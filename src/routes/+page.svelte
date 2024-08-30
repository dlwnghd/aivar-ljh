<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log('data : ',data);
</script>

<svelte:head>
  <title>Aivar-LJH</title>
  <meta name="description" content="에이아이바 기업 과제 | 이주홍" />
</svelte:head>

<div class="w-full h-screen p-16 text-neutral-950 bg-slate-50">
  <h1 class="text-3xl font-bold font-sans">사용자 리스트</h1>
  <h4 class="font-light text-lg italic">by Lee Juhong</h4>

  <div>
    {#each data.userList as user (user.useridx)}
      <div class="flex mt-4 bg-white rounded-lg w-full p-4 shadow-lg gap-6">
        <h3 class="flex flex-row items-center gap-x-2">{user.useridx}</h3>
        <h3 class="flex flex-row items-center gap-x-2">{user.userid}</h3>
        <h3 class="flex flex-row items-center gap-x-2">{user.username}</h3>
        <h3 class="flex flex-row items-center gap-x-2">{user.useremail}</h3>
        <h3 class="flex flex-row items-center gap-x-2">{user.jointypeidx}</h3>
      </div>
    {/each}
  </div>
  <a href="/sign-out" class="">로그 아웃</a>
</div>
