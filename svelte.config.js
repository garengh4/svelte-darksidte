import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: azure({ out: 'my-output-directory' })
  }
};

export default config;
