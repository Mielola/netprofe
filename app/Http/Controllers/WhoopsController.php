<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use RouterOS\Query;
use Illuminate\Support\Str;
use RouterOS\Client;

class WhoopsController extends Controller
{
    protected function getClient()
    {
        $config = [
            'host' => '45.149.93.122',
            'user' => 'admin',
            'pass' => 'dhiva1029',
            'port' => 8182,
        ];

        return new Client($config);
    }

    public function addHotspotUser1(Request $request)
{
    $request->validate([
        'voucher_hours' => 'required|integer|min:1',
        'voucher_count' => 'required|integer|min:1',
    ]);

    $voucher_hours = $request->input('voucher_hours');
    $voucher_count = $request->input('voucher_count');

    try {
        $client = $this->getClient();
        $generatedUsernames = [];

        for ($i = 0; $i < $voucher_count; $i++) {
            $username = strtoupper(Str::random(8));
            $password = $username ;
            $expiry_time = now()->addMinutes(1)->format('Y-m-d H:i:s');
            $link_login = "https://hotspot.awh.co.id/login?username={$username}&password={$password}";

            $addUserQuery = (new Query('/ip/hotspot/user/add'))
                ->equal('name', $username)
                ->equal('password', $password)
                ->equal('profile', 'Pelanggan')
                ->equal('comment', "status: inactive, expiry: $expiry_time");

            $client->query($addUserQuery)->read();

            $generatedUsernames[] = [
                'username' => $username,
                'password' => $password,
                'expiry_time' => $expiry_time,
                'waktu' => $voucher_hours,
                'link_login' => $link_login,
            ];

            DB::table('voucher_lists')->insert([
                'name' => $username,
                'waktu' => $voucher_hours,
                'profile' => 'Pelanggan',
                'password' => $password,
                'status' => 'Inactive',
                'link_login' => $link_login,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json([
            'message' => 'Voucher berhasil dibuat.',
            'generated_vouchers' => $generatedUsernames,
            'note' => 'Ini Link Login jika lupa. Jangan dipakai jika sudah login dan waktu sudah di-extend.',
        ]);
    } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
    }
    }

    public function deleteExpiredHotspotUsers()
{
    try {
        $client = $this->getClient();

        $getUsersQuery = new Query('/ip/hotspot/user/print');
        $users = $client->query($getUsersQuery)->read();

        foreach ($users as $user) {
            if (isset($user['comment']) && str_contains($user['comment'], 'status: active')) {
                preg_match('/expiry: ([\d\- :]+)/', $user['comment'], $matches);

                if (!empty($matches[1])) {
                    $expiryTime = strtotime($matches[1]);
                    $currentTime = time();


                    if ($currentTime > $expiryTime) {
                        $getActiveUsersQuery = new Query('/ip/hotspot/active/print');
                        $activeUsers = $client->query($getActiveUsersQuery)->read();

                        foreach ($activeUsers as $activeUser) {
                            if ($activeUser['user'] === $user['name']) {
                                $deleteActiveQuery = (new Query('/ip/hotspot/active/remove'))
                                    ->equal('.id', $activeUser['.id']);
                                $client->query($deleteActiveQuery)->read();
                            }
                        }

                        $deleteUserQuery = (new Query('/ip/hotspot/user/remove'))
                            ->equal('.id', $user['.id']);
                        $client->query($deleteUserQuery)->read();
                    }
                }
            }
        }

        return response()->json([
            'message' => 'Expired users deleted successfully from active sessions and users list.'
        ]);

    } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
    }
    }

    public function updateAllHotspotUsersByPhoneNumber()
{
    try {
        $client = $this->getClient();

        $getActiveUsersQuery = new Query('/ip/hotspot/active/print');
        $activeUsers = $client->query($getActiveUsersQuery)->read();

        if (empty($activeUsers)) {
            return response()->json(['message' => 'Tidak ada pengguna aktif.'], 200);
        }

        $activeUsernames = array_column($activeUsers, 'user');

        foreach ($activeUsernames as $username) {
            $getUserQuery = (new Query('/ip/hotspot/user/print'))->where('name', $username);
            $users = $client->query($getUserQuery)->read();

            if (empty($users)) {
                continue;
            }

            foreach ($users as $user) {
                $userId = $user['.id'];
                $comment = $user['comment'] ?? '';

                if (strpos($comment, 'status: active') !== false) {
                    continue;
                }


                $voucher = DB::table('voucher_lists')
                             ->where('name', $username)
                             ->first();

                if (!$voucher) {
                    continue;
                }


                $voucher_hours = $voucher->waktu ?? 0;
                $newExpiryTime = Carbon::now()->addHours($voucher_hours);


                if (preg_match('/name: ([^,]+)/', $comment, $matches)) {
                    $name = $matches[1];
                } else {
                    $name = $username;
                }

                $updatedComment = "status: active, name: {$name}, expiry: {$newExpiryTime->format('Y-m-d H:i:s')}";
                $updateUserQuery = (new Query('/ip/hotspot/user/set'))
                    ->equal('.id', $userId)
                    ->equal('comment', $updatedComment);


                $client->query($updateUserQuery)->read();


                DB::table('voucher_lists')
                    ->where('name', $username)
                    ->update(['status' => 'Online']);
            }
        }

        $this->UpdateData();

        return response()->json([
            'message' => 'Komentar dan waktu kadaluarsa semua pengguna yang sesuai berhasil diperbarui, dan status voucher diperbarui menjadi sudah digunakan.',
        ]);

    } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
    }
    }

    public function getVoucherLists()
{
    $vouchers = DB::table('voucher_lists')->get();

    return response()->json($vouchers);
    }

    public function getHotspotUsers()
{
    try {
        $client = $this->getClient();

        $hotspotQuery = new Query('/ip/hotspot/user/print');
        $hotspotData = $client->q($hotspotQuery)->read();

        $response = [];
        foreach ($hotspotData as $user) {
            $response[] = [
                'username' => $user['name'] ?? 'Not Available',
                'password' => $user['password'] ?? 'Not Available',
                'bytes_in' => $user['bytes-in'] ?? 0,
                'bytes_out' => $user['bytes-out'] ?? 0,
                'comment' => $user['comment'] ?? 'Not Available',
            ];
        }

        return response()->json($response, 200);

    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to fetch hotspot users: ' . $e->getMessage()], 500);
    }
    }

    public function UpdateData()
{
    try {
        $client = $this->getClient();

        $hotspotQuery = new Query('/ip/hotspot/user/print');
        $hotspotData = $client->q($hotspotQuery)->read();

        $databaseVouchers = DB::table('voucher_lists')->get();

        $response = [];
        $voucherNamesInHotspot = [];

        foreach ($hotspotData as $user) {
            $username = $user['name'] ?? null;
            $password = $user['password'] ?? null;
            $profile = $user['profile'] ?? null;

            if ($username && $profile !== 'default-trial') {
                $voucherNamesInHotspot[] = $username;

                $dbVoucher = DB::table('voucher_lists')->where('voucher', $username)->first();

                if ($dbVoucher) {
                    DB::table('voucher_lists')
                        ->where('voucher', $username)
                        ->update(['status' => 'Inactive']);
                } else {
                    DB::table('voucher_lists')->insert([
                        'voucher' => $username,
                        'password' => $password,
                        'status' => 'Inactive',
                    ]);
                }
                $response[] = [
                    'username' => $username,
                    'status' => 'Inactive',
                    'profile' => $profile,
                ];
            }
        }

        foreach ($databaseVouchers as $voucher) {
            if (!in_array($voucher->voucher, $voucherNamesInHotspot)) {
                DB::table('voucher_lists')
                    ->where('voucher', $voucher->voucher)
                    ->update(['status' => 'Already Used']);
            }
        }

        return response()->json($response, 200);

    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to fetch hotspot users: ' . $e->getMessage()], 500);
    }
    }

    public function setHotspotProfile(Request $request)
{
    $request->validate([
        'profile_name' => 'required|string|max:255',
        'shared_users' => 'required|integer|min:1',
        'rate_limit' => 'nullable|string',
        'link' => 'nullable|string',
    ]);

    $profile_name = $request->input('profile_name');
    $shared_users = $request->input('shared_users');
    $rate_limit = $request->input('rate_limit');
    $link = $request->input('link');

    try {
         $client = $this->getClient();

        $checkQuery = (new Query('/ip/hotspot/user/profile/print'))
            ->where('name', $profile_name);

        $existingProfiles = $client->query($checkQuery)->read();

        if (!empty($existingProfiles)) {
            $existingLink = DB::table('user_profile_link')
                ->where('name', $profile_name)
                ->exists();

            if (!$existingLink) {
                DB::table('user_profile_link')->insert([
                    'name' => $profile_name,
                    'link' => $link,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                return response()->json([
                    'message' => 'Profile sudah ada, tapi link-nya belum ada. Saya tambahin dulu ya'
                ], 200);
            }

            return response()->json(['message' => 'Profile dan link sudah ada, tidak ada perubahan yang dilakukan'], 200);
        } else {
            $addQuery = (new Query('/ip/hotspot/user/profile/add'))
                ->equal('name', $profile_name)
                ->equal('shared-users', $shared_users)
                ->equal('keepalive-timeout', 'none');

            if (!empty($rate_limit)) {
                $addQuery->equal('rate-limit', $rate_limit);
            }

            $client->query($addQuery)->read();

            return response()->json(['message' => 'Hotspot profile created successfully'], 201);
        }
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
    }

    function updateVoucher(Request $request)
{
    $request->validate([
        'old_name' => 'required|string',
        'new_name' => 'required|string',
        'status' => 'required|string'
    ]);

    $updated = DB::table('voucher_lists')
        ->where('name', $request->old_name)
        ->update([
            'name' => $request->new_name,
            'status' => $request->status,
            'updated_at' => now()
        ]);

    if ($updated) {
        return response()->json(['message' => 'Voucher updated successfully']);
    } else {
        return response()->json(['message' => 'Voucher not found or not updated'], 404);
    }
    }
}
