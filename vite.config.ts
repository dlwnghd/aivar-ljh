import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
  server: {
    proxy: {
      '/graphql': 'http://localhost:4000'
    }
  }
});
