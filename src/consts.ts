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
	appId: 'F55Q6IXQJ6',
	apiKey: '13847e52ae5d844eb3824654fccf40e5',
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
		'程序员学习路线': [
			{ text: '求知若渴，虚心若虚', link: 'en/introduction' },
			{ text: '前端学习路线', link: 'en/全栈学习路线/前端学习路线' },
			{ text: 'java学习路线', link: 'en/java学习路线/java学习路线' },
			{ text: 'linux学习路线', link: 'en/linux学习路线/linux学习路线' },
			{ text: 'python学习路线', link: 'en/python学习路线/python学习路线' },
			{ text: '程序员通用技能', link: 'en/five' },
		],
		'多级目录版本点击进入': [
			{ text: '前端学习路线', link: 'en/one' },
			{ text: 'java学习路线', link: 'en/two' },
			{ text: 'linux学习路线', link: 'en/three' },
			{ text: 'python学习路线', link: 'en/four' },
			{ text: '程序员通用技能', link: 'en/five' },
		]
	},
};
