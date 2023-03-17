/**
 * 修改站点题目头
 */
export const SITE = {
	title: '全栈记录之旅',
	description: '成长依旧，步履不停',
	defaultLanguage: 'en-us',
} as const;
/**
 * 打开源头编辑页面的时候
 */
export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

/**
 * 可编辑的url地址：官方案例：export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;
 */
export const GITHUB_EDIT_URL = `https://github.com/nyhxiaoning/nyhxiaoning.github.io/blob/master`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
// TODO:algolia的网站api的key:https://www.algolia.com/account/api-keys/all?applicationId=L77QL0K6KC
export const ALGOLIA = {
	indexName: 'henry-git-master-nyhxiaoning',//这个名字的来源，可以新建New API Key后，找到更新查看indices
	appId: ' F55Q6IXQJ6',
	apiKey: 'a90a2ba0ae3064e4cc5550f8cfbb0754',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
/**
 * 配置左侧的列表内容
 */
export const SIDEBAR: Sidebar = {
	en: {
		'记录是学习的开始': [
			{ text: '全栈学习', link: 'en/introduction' },
			{ text: '00 个人前端项目实战记录和链接', link: 'en/zero' },
			{ text: '01 React 课程学习和问题笔记', link: 'en/first' },
			{ text: '02 极客时间Vue课程学习和问题笔记', link: 'en/second' },
			{ text: '03 掘金算法课程学习和问题笔记', link: 'en/third' },
			{ text: '04 掘金 Uniapp 课程和Taro或原生小程序学习笔记', link: 'en/fourth' },
			{ text: '05 leetcode 刷题记录每周', link: 'en/fifth' },
			{ text: '06 极客时间 Node 全栈记录', link: 'en/sixth' },
			{ text: '07 React 学习常见问题和笔记记录', link: 'en/seventh' },
			{ text: '08 vue 常见问题和学习记录', link: 'en/eighth' },
			{ text: '09 book 前端进阶知识学习图书笔记', link: 'en/ninth' },
			{ text: '10 book 前端开发设计模式和开发实战笔记', link: 'en/tenth' },
			{ text: '11 elementplus 经典源码和实战学习和问题笔记', link: 'en/eleventh' },
			{ text: '12 前端开发经典库学习记录', link: 'en/twelfth' },
			{ text: '13 Koa和express 框架学习记录', link: 'en/thirteenth' },
			{ text: '14 前端图形化学习', link: 'en/fourteenth' },
			{ text: '15 工具和项目配置工程化问题记录', link: 'en/fifteenth' },
			{ text: '16 前端拓展知识学习', link: 'en/sixteenth' },
			{ text: '17 低代码学习和总结', link: 'en/seventeenth' },
			{ text: '18 经验亮点汇总( 迁移中 )', link: 'en/eighteen' },
			{ text: '其他常见问题', link: 'en/others' },
			{ text: '常用符号', link: 'en/notices' }
		],
		'其他说明': [{ text: '自定义', link: 'en/page-4' }]
	},
};
