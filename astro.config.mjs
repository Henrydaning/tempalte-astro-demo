import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	// TODO:这里的地址site和base写的慎重一些，如果都写了，这里可能出现解析错误地址
	// TODO:如果这里site地址不配置，可能出现new URL的地址解析出错
	site: 'https://nyhxiaoning.github.io',//注意结尾没有斜杠/
	// base: '/dist',//网站根目录是dist，但是如果仓库名称是xxx.github.io，那么不要使用base参数
});
