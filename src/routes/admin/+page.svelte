<script>
  export let data;
</script>

<main>
  <h1>Welcome {data.useridx}!</h1>
  <p>Here is your full payload:</p>
  <pre>{JSON.stringify(data, null, 2)}</pre>
  <a href="/" class="block">메인페이지로</a>
  <a href="/sign-out">로그 아웃</a>
</main>
