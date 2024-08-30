<script lang="ts">
  import naverLoginIcon from '$lib/images/naverLoginIcon.png'
  import kakaoLoginIcon from '$lib/images/kakaoLoginIcon.png'

  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<main class="w-full h-screen flex items-center justify-center bg-neutral-100">
  <form class="shadow-md rounded-sm w-[400px] p-8" method="POST" use:enhance>
    <h2 class="text-center text-2xl text-neutral-950 mb-8">Login</h2>
    <div class="mb-2">
      <input
        type="id"
        id="id"
        name="id"
        placeholder="ID"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="mb-6">
      <input
        class="w-full p-2 border border-neutral-800 rounded-lg"
        type="password"
        id="password"
        name="password"
        placeholder="PASSWORD"
      />
    </div>
    <div class="w-full flex flex-col items-center">
      {#if form?.error}
        <p class="text-red-600 font-light text-sm mb-2">
          {form.error}
        </p>
      {/if}
      <button
        type="submit"
        class="w-full bg-black hover:bg-orange-500 text-lg text-white rounded-lg py-2 px-4"
        >Login</button
      >
    </div>
    <div class="w-full flex justify-normal mt-8">
      <span class="text-base">
        <a href="/join">회원가입</a>
      </span>
    </div>
    <p class="text-center">소셜 계정으로 간편 로그인</p>
    <div class="flex items-center justify-center gap-3">
      <a href="/auth/naver">
        <img alt="네이버 로그인" src={naverLoginIcon} style="width: 50px;">
      </a> 
      <a href="/auth/kakao">
        <img alt="카카오 로그인" src={kakaoLoginIcon} style="width: 50px;">
      </a>
    </div>
  </form>
</main>