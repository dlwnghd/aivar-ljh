<script lang="ts">
	import { enhance } from "$app/forms";

	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<main class="w-full h-screen flex items-center justify-center bg-neutral-100">
  <form class="shadow-md rounded-sm w-[400px] p-8" method="POST" use:enhance>
    <h2 class="text-center text-2xl text-neutral-950 mb-8">Join</h2>
    <!-- {#if form}
      <h4 class="text-red-600 font-light text-md text-center" />
    {/if} -->
    <div class="mb-2">
      <label for="ID" class="block font-light text-neutral-800 ml-2"
        >ID</label
      >
      <input
        type="id"
        id="id"
        name="id"
        placeholder="ID"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="mb-2">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="mb-2">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="USERNAME"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="mb-2">
      <input
        type="password"
        id="password"
        name="password"
        placeholder="PASSWORD"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="mb-2">
      <input
        type="password"
        id="checkPassword"
        name="checkPassword"
        placeholder="CHECK-PASSWORD"
        class="w-full p-2 border border-neutral-800 rounded-lg"
      />
    </div>
    <div class="w-full flex justify-center">
      <button
        type="submit"
        class="bg-black hover:bg-orange-500 text-lg text-white rounded-lg py-2 px-4 w-full"
        >Join</button
      >
    </div>
    <a class="flex items-center justify-center" href="/sign-in">> 로그인으로 돌아가기</a>
  </form>
</main>
