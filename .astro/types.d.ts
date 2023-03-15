declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"docs": {
"en/01React课程学习和问题笔记/000README.md": {
  id: "en/01React课程学习和问题笔记/000README.md",
  slug: "en/01react课程学习和问题笔记/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/01React课程学习和问题笔记/000ReackHook掘金课程.md": {
  id: "en/01React课程学习和问题笔记/000ReackHook掘金课程.md",
  slug: "en/01react课程学习和问题笔记/000reackhook掘金课程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/01React课程学习和问题笔记/001UmiJS学习记录.md": {
  id: "en/01React课程学习和问题笔记/001UmiJS学习记录.md",
  slug: "en/01react课程学习和问题笔记/001umijs学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/01React课程学习和问题笔记/React-SSR.md": {
  id: "en/01React课程学习和问题笔记/React-SSR.md",
  slug: "en/01react课程学习和问题笔记/react-ssr",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/03掘金算法课程学习和问题笔记/000README.md": {
  id: "en/03掘金算法课程学习和问题笔记/000README.md",
  slug: "en/03掘金算法课程学习和问题笔记/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/000Taro版本基础使用.md": {
  id: "en/04小程序专题/000Taro版本基础使用.md",
  slug: "en/04小程序专题/000taro版本基础使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/001uniapp建立部署打包uniapp的使用.md": {
  id: "en/04小程序专题/001uniapp建立部署打包uniapp的使用.md",
  slug: "en/04小程序专题/001uniapp建立部署打包uniapp的使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/001原生小程序基础开发.md": {
  id: "en/04小程序专题/001原生小程序基础开发.md",
  slug: "en/04小程序专题/001原生小程序基础开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/002uniapp基础开发记录.md": {
  id: "en/04小程序专题/002uniapp基础开发记录.md",
  slug: "en/04小程序专题/002uniapp基础开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/002掘金课程uniapp记录.md": {
  id: "en/04小程序专题/002掘金课程uniapp记录.md",
  slug: "en/04小程序专题/002掘金课程uniapp记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/taro.md": {
  id: "en/04小程序专题/taro.md",
  slug: "en/04小程序专题/taro",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/taro1.md": {
  id: "en/04小程序专题/taro1.md",
  slug: "en/04小程序专题/taro1",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/04小程序专题/taro2.md": {
  id: "en/04小程序专题/taro2.md",
  slug: "en/04小程序专题/taro2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/05leetcode刷题记录每周/001优秀算法思路的记录.md": {
  id: "en/05leetcode刷题记录每周/001优秀算法思路的记录.md",
  slug: "en/05leetcode刷题记录每周/001优秀算法思路的记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/001第二章-jksj-koaexpress说明对比笔记readme.md": {
  id: "en/06Node全栈记录/001第二章-jksj-koaexpress说明对比笔记readme.md",
  slug: "en/06node全栈记录/001第二章-jksj-koaexpress说明对比笔记readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/002第三章-jksj-Nodejs学习笔记1readme.md": {
  id: "en/06Node全栈记录/002第三章-jksj-Nodejs学习笔记1readme.md",
  slug: "en/06node全栈记录/002第三章-jksj-nodejs学习笔记1readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/003第四章-jksj-笔记Node.js优化性能.md": {
  id: "en/06Node全栈记录/003第四章-jksj-笔记Node.js优化性能.md",
  slug: "en/06node全栈记录/003第四章-jksj-笔记nodejs优化性能",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/004第五章-jksj-总结学习事件循环记录整理.md": {
  id: "en/06Node全栈记录/004第五章-jksj-总结学习事件循环记录整理.md",
  slug: "en/06node全栈记录/004第五章-jksj-总结学习事件循环记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/006Node相关学习补充.md": {
  id: "en/06Node全栈记录/006Node相关学习补充.md",
  slug: "en/06node全栈记录/006node相关学习补充",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/06Node全栈记录/008webSocket的开发使用记录.md": {
  id: "en/06Node全栈记录/008webSocket的开发使用记录.md",
  slug: "en/06node全栈记录/008websocket的开发使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/000README.md": {
  id: "en/07React学习常见问题和笔记记录/000README.md",
  slug: "en/07react学习常见问题和笔记记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/001React版本升级和功能说明.md": {
  id: "en/07React学习常见问题和笔记记录/001React版本升级和功能说明.md",
  slug: "en/07react学习常见问题和笔记记录/001react版本升级和功能说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/001入门面试题react笔记汇总记录.md": {
  id: "en/07React学习常见问题和笔记记录/001入门面试题react笔记汇总记录.md",
  slug: "en/07react学习常见问题和笔记记录/001入门面试题react笔记汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录.md": {
  id: "en/07React学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录.md",
  slug: "en/07react学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/002相关项目安装React问题排查.md": {
  id: "en/07React学习常见问题和笔记记录/002相关项目安装React问题排查.md",
  slug: "en/07react学习常见问题和笔记记录/002相关项目安装react问题排查",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/003React路由和其他核心插件的相关升级问题记录.md": {
  id: "en/07React学习常见问题和笔记记录/003React路由和其他核心插件的相关升级问题记录.md",
  slug: "en/07react学习常见问题和笔记记录/003react路由和其他核心插件的相关升级问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/004React生命周期以及hook和性能优化的问题记录.md": {
  id: "en/07React学习常见问题和笔记记录/004React生命周期以及hook和性能优化的问题记录.md",
  slug: "en/07react学习常见问题和笔记记录/004react生命周期以及hook和性能优化的问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/006React脚手架创建和配置使用记录.md": {
  id: "en/07React学习常见问题和笔记记录/006React脚手架创建和配置使用记录.md",
  slug: "en/07react学习常见问题和笔记记录/006react脚手架创建和配置使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/07React学习常见问题和笔记记录/007React配置Webpack项目说明记录.md": {
  id: "en/07React学习常见问题和笔记记录/007React配置Webpack项目说明记录.md",
  slug: "en/07react学习常见问题和笔记记录/007react配置webpack项目说明记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/000vue2升级vue3的api变化.md": {
  id: "en/08vue常见问题和学习记录/000vue2升级vue3的api变化.md",
  slug: "en/08vue常见问题和学习记录/000vue2升级vue3的api变化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/001Vue3升级后个人使用汇总案例.md": {
  id: "en/08vue常见问题和学习记录/001Vue3升级后个人使用汇总案例.md",
  slug: "en/08vue常见问题和学习记录/001vue3升级后个人使用汇总案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/001Vue版本升级和功能说明.md": {
  id: "en/08vue常见问题和学习记录/001Vue版本升级和功能说明.md",
  slug: "en/08vue常见问题和学习记录/001vue版本升级和功能说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案(2).md": {
  id: "en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案(2).md",
  slug: "en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案(3).md": {
  id: "en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案(3).md",
  slug: "en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案3",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/004vue3每周使用总结案例（01）.md": {
  id: "en/08vue常见问题和学习记录/004vue3每周使用总结案例（01）.md",
  slug: "en/08vue常见问题和学习记录/004vue3每周使用总结案例01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/005vue3经典开发总结案例（02）.md": {
  id: "en/08vue常见问题和学习记录/005vue3经典开发总结案例（02）.md",
  slug: "en/08vue常见问题和学习记录/005vue3经典开发总结案例02",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用.md": {
  id: "en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用.md",
  slug: "en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/007Vue生命周期和执行顺序记录整理.md": {
  id: "en/08vue常见问题和学习记录/007Vue生命周期和执行顺序记录整理.md",
  slug: "en/08vue常见问题和学习记录/007vue生命周期和执行顺序记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/007Vue生命周期和渲染记录整理.md": {
  id: "en/08vue常见问题和学习记录/007Vue生命周期和渲染记录整理.md",
  slug: "en/08vue常见问题和学习记录/007vue生命周期和渲染记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理.md": {
  id: "en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理.md",
  slug: "en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么.md": {
  id: "en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么.md",
  slug: "en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01.md": {
  id: "en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01.md",
  slug: "en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/003css工程化适配方案.md": {
  id: "en/09book前端进阶知识学习图书笔记/003css工程化适配方案.md",
  slug: "en/09book前端进阶知识学习图书笔记/003css工程化适配方案",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/004好玩的css.md": {
  id: "en/09book前端进阶知识学习图书笔记/004好玩的css.md",
  slug: "en/09book前端进阶知识学习图书笔记/004好玩的css",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总.md": {
  id: "en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总.md",
  slug: "en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/006前端底层基础工具各个版本API的更新情况汇总.md": {
  id: "en/09book前端进阶知识学习图书笔记/006前端底层基础工具各个版本API的更新情况汇总.md",
  slug: "en/09book前端进阶知识学习图书笔记/006前端底层基础工具各个版本api的更新情况汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明.md": {
  id: "en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明.md",
  slug: "en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本.md": {
  id: "en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本.md",
  slug: "en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/11elementplus经典源码和实战学习和问题笔记/001每周开发问题和总结汇总01.md": {
  id: "en/11elementplus经典源码和实战学习和问题笔记/001每周开发问题和总结汇总01.md",
  slug: "en/11elementplus经典源码和实战学习和问题笔记/001每周开发问题和总结汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/11elementplus经典源码和实战学习和问题笔记/001组件经典案例使用说明.md": {
  id: "en/11elementplus经典源码和实战学习和问题笔记/001组件经典案例使用说明.md",
  slug: "en/11elementplus经典源码和实战学习和问题笔记/001组件经典案例使用说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/000README.md": {
  id: "en/12前端开发经典库学习记录/000README.md",
  slug: "en/12前端开发经典库学习记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/001你不知道的JavaScript学习知识点汇总.md": {
  id: "en/12前端开发经典库学习记录/001你不知道的JavaScript学习知识点汇总.md",
  slug: "en/12前端开发经典库学习记录/001你不知道的javascript学习知识点汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/002axios.md": {
  id: "en/12前端开发经典库学习记录/002axios.md",
  slug: "en/12前端开发经典库学习记录/002axios",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/002vue中一些常用经典库使用.md": {
  id: "en/12前端开发经典库学习记录/002vue中一些常用经典库使用.md",
  slug: "en/12前端开发经典库学习记录/002vue中一些常用经典库使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/003前端开发进阶技术.md": {
  id: "en/12前端开发经典库学习记录/003前端开发进阶技术.md",
  slug: "en/12前端开发经典库学习记录/003前端开发进阶技术",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/004glob语法库使用.md": {
  id: "en/12前端开发经典库学习记录/004glob语法库使用.md",
  slug: "en/12前端开发经典库学习记录/004glob语法库使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/005经典库canvas画excel组件记录.md": {
  id: "en/12前端开发经典库学习记录/005经典库canvas画excel组件记录.md",
  slug: "en/12前端开发经典库学习记录/005经典库canvas画excel组件记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/12前端开发经典库学习记录/010经典js问题内容.md": {
  id: "en/12前端开发经典库学习记录/010经典js问题内容.md",
  slug: "en/12前端开发经典库学习记录/010经典js问题内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/13Koa和express框架学习记录/000README.md": {
  id: "en/13Koa和express框架学习记录/000README.md",
  slug: "en/13koa和express框架学习记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/13Koa和express框架学习记录/001PM2进程相关汇总记录.md": {
  id: "en/13Koa和express框架学习记录/001PM2进程相关汇总记录.md",
  slug: "en/13koa和express框架学习记录/001pm2进程相关汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/13Koa和express框架学习记录/003Nuxt开发使用说明和案例记录.md": {
  id: "en/13Koa和express框架学习记录/003Nuxt开发使用说明和案例记录.md",
  slug: "en/13koa和express框架学习记录/003nuxt开发使用说明和案例记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/13Koa和express框架学习记录/004Koa开发使用说明和案例记录.md": {
  id: "en/13Koa和express框架学习记录/004Koa开发使用说明和案例记录.md",
  slug: "en/13koa和express框架学习记录/004koa开发使用说明和案例记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/13Koa和express框架学习记录/006vitesse汇总记录.md": {
  id: "en/13Koa和express框架学习记录/006vitesse汇总记录.md",
  slug: "en/13koa和express框架学习记录/006vitesse汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/000README.md": {
  id: "en/14前端图形化学习/000README.md",
  slug: "en/14前端图形化学习/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/001aggrid实战拓展记录.md": {
  id: "en/14前端图形化学习/001aggrid实战拓展记录.md",
  slug: "en/14前端图形化学习/001aggrid实战拓展记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/002scratch.md": {
  id: "en/14前端图形化学习/002scratch.md",
  slug: "en/14前端图形化学习/002scratch",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/003antvX6.md": {
  id: "en/14前端图形化学习/003antvX6.md",
  slug: "en/14前端图形化学习/003antvx6",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/004各种css拓展小知识补充.md": {
  id: "en/14前端图形化学习/004各种css拓展小知识补充.md",
  slug: "en/14前端图形化学习/004各种css拓展小知识补充",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/005threejs2D3D图形化.md": {
  id: "en/14前端图形化学习/005threejs2D3D图形化.md",
  slug: "en/14前端图形化学习/005threejs2d3d图形化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/006跟着月影学习可视化极客时间.md": {
  id: "en/14前端图形化学习/006跟着月影学习可视化极客时间.md",
  slug: "en/14前端图形化学习/006跟着月影学习可视化极客时间",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/14前端图形化学习/007svg图形化使用记录.md": {
  id: "en/14前端图形化学习/007svg图形化使用记录.md",
  slug: "en/14前端图形化学习/007svg图形化使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000jenkins部署记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000jenkins部署记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000jenkins部署记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000rollup工程化问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000rollup工程化问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000rollup工程化问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000webpack工程化问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000webpack工程化问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000webpack工程化问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000代码校验统一格式化.md": {
  id: "en/15工具和项目配置工程化问题记录/000代码校验统一格式化.md",
  slug: "en/15工具和项目配置工程化问题记录/000代码校验统一格式化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用.md": {
  id: "en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用.md",
  slug: "en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包.md": {
  id: "en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包.md",
  slug: "en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/001vuepress问题汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/001vuepress问题汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/001vuepress问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/002Docker部署前端简单实现.md": {
  id: "en/15工具和项目配置工程化问题记录/002Docker部署前端简单实现.md",
  slug: "en/15工具和项目配置工程化问题记录/002docker部署前端简单实现",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/003CICD记录学习.md": {
  id: "en/15工具和项目配置工程化问题记录/003CICD记录学习.md",
  slug: "en/15工具和项目配置工程化问题记录/003cicd记录学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/004Docker课程学习笔记和部署笔记.md": {
  id: "en/15工具和项目配置工程化问题记录/004Docker课程学习笔记和部署笔记.md",
  slug: "en/15工具和项目配置工程化问题记录/004docker课程学习笔记和部署笔记",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01.md": {
  id: "en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01.md",
  slug: "en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/006React和Chrome插件项目文件夹目录结构说明.md": {
  id: "en/15工具和项目配置工程化问题记录/006React和Chrome插件项目文件夹目录结构说明.md",
  slug: "en/15工具和项目配置工程化问题记录/006react和chrome插件项目文件夹目录结构说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法.md": {
  id: "en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法.md",
  slug: "en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金.md": {
  id: "en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金.md",
  slug: "en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题.md": {
  id: "en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题.md",
  slug: "en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/014docker部署mysql，nginx,mongo记录.md": {
  id: "en/15工具和项目配置工程化问题记录/014docker部署mysql，nginx,mongo记录.md",
  slug: "en/15工具和项目配置工程化问题记录/014docker部署mysqlnginxmongo记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用.md": {
  id: "en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用.md",
  slug: "en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录.md": {
  id: "en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录.md",
  slug: "en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/017node版本和py版本内容.md": {
  id: "en/15工具和项目配置工程化问题记录/017node版本和py版本内容.md",
  slug: "en/15工具和项目配置工程化问题记录/017node版本和py版本内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/018vscode插件开发案例.md": {
  id: "en/15工具和项目配置工程化问题记录/018vscode插件开发案例.md",
  slug: "en/15工具和项目配置工程化问题记录/018vscode插件开发案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录.md": {
  id: "en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录.md",
  slug: "en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例.md": {
  id: "en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例.md",
  slug: "en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/021ssh命令学习记录.md": {
  id: "en/15工具和项目配置工程化问题记录/021ssh命令学习记录.md",
  slug: "en/15工具和项目配置工程化问题记录/021ssh命令学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/022python基本语法记录.md": {
  id: "en/15工具和项目配置工程化问题记录/022python基本语法记录.md",
  slug: "en/15工具和项目配置工程化问题记录/022python基本语法记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/023python环境配置相关汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/023python环境配置相关汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/023python环境配置相关汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/024linux系统命令常用使用.md": {
  id: "en/15工具和项目配置工程化问题记录/024linux系统命令常用使用.md",
  slug: "en/15工具和项目配置工程化问题记录/024linux系统命令常用使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/15工具和项目配置工程化问题记录/025.离线环境安装npm包记录过程.md": {
  id: "en/15工具和项目配置工程化问题记录/025.离线环境安装npm包记录过程.md",
  slug: "en/15工具和项目配置工程化问题记录/025离线环境安装npm包记录过程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题.md": {
  id: "en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题.md",
  slug: "en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000README.md": {
  id: "en/16前端拓展知识学习/000README.md",
  slug: "en/16前端拓展知识学习/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000前端架构师体系化学习.md": {
  id: "en/16前端拓展知识学习/000前端架构师体系化学习.md",
  slug: "en/16前端拓展知识学习/000前端架构师体系化学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000如何高效使用一台服务器.md": {
  id: "en/16前端拓展知识学习/000如何高效使用一台服务器.md",
  slug: "en/16前端拓展知识学习/000如何高效使用一台服务器",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000记录webcomponets规范.md": {
  id: "en/16前端拓展知识学习/000记录webcomponets规范.md",
  slug: "en/16前端拓展知识学习/000记录webcomponets规范",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/000软件使用个人经验汇总学习.md": {
  id: "en/16前端拓展知识学习/000软件使用个人经验汇总学习.md",
  slug: "en/16前端拓展知识学习/000软件使用个人经验汇总学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/001最新ECMA标准js学习.md": {
  id: "en/16前端拓展知识学习/001最新ECMA标准js学习.md",
  slug: "en/16前端拓展知识学习/001最新ecma标准js学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/001编译器编译过程总结.md": {
  id: "en/16前端拓展知识学习/001编译器编译过程总结.md",
  slug: "en/16前端拓展知识学习/001编译器编译过程总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/002typeScirpt标准补充学习.md": {
  id: "en/16前端拓展知识学习/002typeScirpt标准补充学习.md",
  slug: "en/16前端拓展知识学习/002typescirpt标准补充学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/003vue项目中常用ts方式汇总01.md": {
  id: "en/16前端拓展知识学习/003vue项目中常用ts方式汇总01.md",
  slug: "en/16前端拓展知识学习/003vue项目中常用ts方式汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/004React项目中常见ts方式汇总01.md": {
  id: "en/16前端拓展知识学习/004React项目中常见ts方式汇总01.md",
  slug: "en/16前端拓展知识学习/004react项目中常见ts方式汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/005ts常见问题汇总记录.md": {
  id: "en/16前端拓展知识学习/005ts常见问题汇总记录.md",
  slug: "en/16前端拓展知识学习/005ts常见问题汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/006经典文章总结资源相关应用汇总.md": {
  id: "en/16前端拓展知识学习/006经典文章总结资源相关应用汇总.md",
  slug: "en/16前端拓展知识学习/006经典文章总结资源相关应用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/007electron学习笔记.md": {
  id: "en/16前端拓展知识学习/007electron学习笔记.md",
  slug: "en/16前端拓展知识学习/007electron学习笔记",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/008相关协议和通信补充学习.md": {
  id: "en/16前端拓展知识学习/008相关协议和通信补充学习.md",
  slug: "en/16前端拓展知识学习/008相关协议和通信补充学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/011java知识简单入门.md": {
  id: "en/16前端拓展知识学习/011java知识简单入门.md",
  slug: "en/16前端拓展知识学习/011java知识简单入门",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/013数据库相关知识汇总.md": {
  id: "en/16前端拓展知识学习/013数据库相关知识汇总.md",
  slug: "en/16前端拓展知识学习/013数据库相关知识汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/017异常npm报错问题汇总.md": {
  id: "en/16前端拓展知识学习/017异常npm报错问题汇总.md",
  slug: "en/16前端拓展知识学习/017异常npm报错问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/018php的相关内容.md": {
  id: "en/16前端拓展知识学习/018php的相关内容.md",
  slug: "en/16前端拓展知识学习/018php的相关内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/018软件著作权相关.md": {
  id: "en/16前端拓展知识学习/018软件著作权相关.md",
  slug: "en/16前端拓展知识学习/018软件著作权相关",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/019yaml和yml学习记录.md": {
  id: "en/16前端拓展知识学习/019yaml和yml学习记录.md",
  slug: "en/16前端拓展知识学习/019yaml和yml学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/020web3元宇宙.md": {
  id: "en/16前端拓展知识学习/020web3元宇宙.md",
  slug: "en/16前端拓展知识学习/020web3元宇宙",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/021图形流程设计UML学习记录汇总.md": {
  id: "en/16前端拓展知识学习/021图形流程设计UML学习记录汇总.md",
  slug: "en/16前端拓展知识学习/021图形流程设计uml学习记录汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/022区块链课程知识学习01.md": {
  id: "en/16前端拓展知识学习/022区块链课程知识学习01.md",
  slug: "en/16前端拓展知识学习/022区块链课程知识学习01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/023mongo使用记录学习.md": {
  id: "en/16前端拓展知识学习/023mongo使用记录学习.md",
  slug: "en/16前端拓展知识学习/023mongo使用记录学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/024mysql使用记录.md": {
  id: "en/16前端拓展知识学习/024mysql使用记录.md",
  slug: "en/16前端拓展知识学习/024mysql使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/16前端拓展知识学习/025配置虚拟机环境软件相关.md": {
  id: "en/16前端拓展知识学习/025配置虚拟机环境软件相关.md",
  slug: "en/16前端拓展知识学习/025配置虚拟机环境软件相关",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/000从零开发可视化搭建项目jj.md": {
  id: "en/17低代码学习和总结/000从零开发可视化搭建项目jj.md",
  slug: "en/17低代码学习和总结/000从零开发可视化搭建项目jj",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/000极客时间课程物联网开发001.md": {
  id: "en/17低代码学习和总结/000极客时间课程物联网开发001.md",
  slug: "en/17低代码学习和总结/000极客时间课程物联网开发001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/001scratch组件封装实现.md": {
  id: "en/17低代码学习和总结/001scratch组件封装实现.md",
  slug: "en/17低代码学习和总结/001scratch组件封装实现",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/004图形化模式器开发.md": {
  id: "en/17低代码学习和总结/004图形化模式器开发.md",
  slug: "en/17低代码学习和总结/004图形化模式器开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/005腾讯低代码魔方模拟器.md": {
  id: "en/17低代码学习和总结/005腾讯低代码魔方模拟器.md",
  slug: "en/17低代码学习和总结/005腾讯低代码魔方模拟器",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/006coco低代码模拟器开发记录.md": {
  id: "en/17低代码学习和总结/006coco低代码模拟器开发记录.md",
  slug: "en/17低代码学习和总结/006coco低代码模拟器开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/007低代码0-1实现思路梳理01.md": {
  id: "en/17低代码学习和总结/007低代码0-1实现思路梳理01.md",
  slug: "en/17低代码学习和总结/007低代码0-1实现思路梳理01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/007低代码0-1实现思路梳理02.md": {
  id: "en/17低代码学习和总结/007低代码0-1实现思路梳理02.md",
  slug: "en/17低代码学习和总结/007低代码0-1实现思路梳理02",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/17低代码学习和总结/009DSL说明学习记录.md": {
  id: "en/17低代码学习和总结/009DSL说明学习记录.md",
  slug: "en/17低代码学习和总结/009dsl说明学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/001手把手带你实现存储引擎.md": {
  id: "en/18经验亮点汇总汇总/001手把手带你实现存储引擎.md",
  slug: "en/18经验亮点汇总汇总/001手把手带你实现存储引擎",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/002一台服务器有什么用.md": {
  id: "en/18经验亮点汇总汇总/002一台服务器有什么用.md",
  slug: "en/18经验亮点汇总汇总/002一台服务器有什么用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/003一文手把手教你搭建Git私服.md": {
  id: "en/18经验亮点汇总汇总/003一文手把手教你搭建Git私服.md",
  slug: "en/18经验亮点汇总汇总/003一文手把手教你搭建git私服",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/004前端开发常用工具汇总说明.md": {
  id: "en/18经验亮点汇总汇总/004前端开发常用工具汇总说明.md",
  slug: "en/18经验亮点汇总汇总/004前端开发常用工具汇总说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/005公司npm包私有化部署.md": {
  id: "en/18经验亮点汇总汇总/005公司npm包私有化部署.md",
  slug: "en/18经验亮点汇总汇总/005公司npm包私有化部署",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南.md": {
  id: "en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南.md",
  slug: "en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa.md": {
  id: "en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa.md",
  slug: "en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/18经验亮点汇总汇总/007WebRTC开发记录和其他音视频开发记录.md": {
  id: "en/18经验亮点汇总汇总/007WebRTC开发记录和其他音视频开发记录.md",
  slug: "en/18经验亮点汇总汇总/007webrtc开发记录和其他音视频开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/eighteen.md": {
  id: "en/eighteen.md",
  slug: "en/eighteen",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/eighth.md": {
  id: "en/eighth.md",
  slug: "en/eighth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/eighth2.md": {
  id: "en/eighth2.md",
  slug: "en/eighth2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/eleventh.md": {
  id: "en/eleventh.md",
  slug: "en/eleventh",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/fifteenth.md": {
  id: "en/fifteenth.md",
  slug: "en/fifteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/fifth.md": {
  id: "en/fifth.md",
  slug: "en/fifth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/first.md": {
  id: "en/first.md",
  slug: "en/first",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/fourteenth.md": {
  id: "en/fourteenth.md",
  slug: "en/fourteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/fourth.md": {
  id: "en/fourth.md",
  slug: "en/fourth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/introduction.md": {
  id: "en/introduction.md",
  slug: "en/introduction",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/ninth.md": {
  id: "en/ninth.md",
  slug: "en/ninth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/notices.md": {
  id: "en/notices.md",
  slug: "en/notices",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/others.md": {
  id: "en/others.md",
  slug: "en/others",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/second.md": {
  id: "en/second.md",
  slug: "en/second",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/second/000README.md": {
  id: "en/second/000README.md",
  slug: "en/second/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/second/001源码API的区别学习记录.md": {
  id: "en/second/001源码API的区别学习记录.md",
  slug: "en/second/001源码api的区别学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/second/002课程记录周边每周汇总01.md": {
  id: "en/second/002课程记录周边每周汇总01.md",
  slug: "en/second/002课程记录周边每周汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/seventeenth.md": {
  id: "en/seventeenth.md",
  slug: "en/seventeenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/seventh.md": {
  id: "en/seventh.md",
  slug: "en/seventh",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/sixteenth.md": {
  id: "en/sixteenth.md",
  slug: "en/sixteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/sixth.md": {
  id: "en/sixth.md",
  slug: "en/sixth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/tenth.md": {
  id: "en/tenth.md",
  slug: "en/tenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/third.md": {
  id: "en/third.md",
  slug: "en/third",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/thirteenth.md": {
  id: "en/thirteenth.md",
  slug: "en/thirteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/twelfth.md": {
  id: "en/twelfth.md",
  slug: "en/twelfth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero.md": {
  id: "en/zero.md",
  slug: "en/zero",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/001前端经典问题考究思考.md": {
  id: "en/zero/001前端经典问题考究思考.md",
  slug: "en/zero/001前端经典问题考究思考",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/001掘金课程记录和问题.md": {
  id: "en/zero/001掘金课程记录和问题.md",
  slug: "en/zero/001掘金课程记录和问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/002项目实战和说明内容001.md": {
  id: "en/zero/002项目实战和说明内容001.md",
  slug: "en/zero/002项目实战和说明内容001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/003常用node开发.md": {
  id: "en/zero/003常用node开发.md",
  slug: "en/zero/003常用node开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/004常用前端开发项目总结.md": {
  id: "en/zero/004常用前端开发项目总结.md",
  slug: "en/zero/004常用前端开发项目总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/005编程猫学习研究依赖相关汇总.md": {
  id: "en/zero/005编程猫学习研究依赖相关汇总.md",
  slug: "en/zero/005编程猫学习研究依赖相关汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/006常用H5开发总结.md": {
  id: "en/zero/006常用H5开发总结.md",
  slug: "en/zero/006常用h5开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/007常用react开发汇总.md": {
  id: "en/zero/007常用react开发汇总.md",
  slug: "en/zero/007常用react开发汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/008常用Vue开发总结.md": {
  id: "en/zero/008常用Vue开发总结.md",
  slug: "en/zero/008常用vue开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/009前端存储相关的问题开发总结.md": {
  id: "en/zero/009前端存储相关的问题开发总结.md",
  slug: "en/zero/009前端存储相关的问题开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/010项目monorepo架构开发.md": {
  id: "en/zero/010项目monorepo架构开发.md",
  slug: "en/zero/010项目monorepo架构开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/README.md": {
  id: "en/zero/README.md",
  slug: "en/zero/readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
"en/zero/test.md": {
  id: "en/zero/test.md",
  slug: "en/zero/test",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}