<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log('data : ',data);
</script>

<svelte:head>
  <title>Aivar-LJH</title>
  <meta name="description" content="에이아이바 기업 과제 | 이주홍" />
</svelte:head>

<div class="w-full h-screen pt-5 pr-16 pl-16 text-neutral-950 bg-slate-50">
  <div class="flex justify-between">
    <h1 class="text-3xl font-bold font-sans mb-5">{data.username} 님 안녕하세요.</h1>
    <a href="/sign-out" class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">로그 아웃</a>
  </div>
  <div>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    고유번호
                </th>
                <th scope="col" class="px-6 py-3">
                    아이디
                </th>
                <th scope="col" class="px-6 py-3">
                    이름
                </th>
                <th scope="col" class="px-6 py-3">
                    이메일
                </th>
                <th scope="col" class="px-6 py-3">
                    회원가입 타입
                </th>
            </tr>
        </thead>
        <tbody>
          {#each data.userList as user (user.useridx)}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.useridx}
                </th>
                <td class="px-6 py-4">
                    {user.userid}
                </td>
                <td class="px-6 py-4">
                    {user.username}
                </td>
                <td class="px-6 py-4">
                    {user.useremail}
                </td>
                <td class="px-6 py-4">
                    {user.jointypeidx === 1 ? 'email' : user.jointypeidx === 2 ? 'naver' : user.jointypeidx == 3 ? 'kakao' : '-'}
                </td>
            </tr>
    {/each}

        </tbody>
    </table>
  </div>
  </div>
</div>
