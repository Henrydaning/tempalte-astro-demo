declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

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
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"docs": {
"en/01react课程学习和问题笔记/000reackhook掘金课程.md": {
  id: "en/01react课程学习和问题笔记/000reackhook掘金课程.md",
  slug: "en/01react课程学习和问题笔记/000reackhook掘金课程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/01react课程学习和问题笔记/001umijs学习记录.md": {
  id: "en/01react课程学习和问题笔记/001umijs学习记录.md",
  slug: "en/01react课程学习和问题笔记/001umijs学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/01react课程学习和问题笔记/002react-ssr.md": {
  id: "en/01react课程学习和问题笔记/002react-ssr.md",
  slug: "en/01react课程学习和问题笔记/002react-ssr",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/01react课程学习和问题笔记/003react记录api问题汇总归档01.md": {
  id: "en/01react课程学习和问题笔记/003react记录api问题汇总归档01.md",
  slug: "en/01react课程学习和问题笔记/003react记录api问题汇总归档01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/01react课程学习和问题笔记/004react记录配置环境问题汇总归档02.md": {
  id: "en/01react课程学习和问题笔记/004react记录配置环境问题汇总归档02.md",
  slug: "en/01react课程学习和问题笔记/004react记录配置环境问题汇总归档02",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/01react课程学习和问题笔记/005react记录ui库问题汇总归档03.md": {
  id: "en/01react课程学习和问题笔记/005react记录ui库问题汇总归档03.md",
  slug: "en/01react课程学习和问题笔记/005react记录ui库问题汇总归档03",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/02极客时间vue课程学习和问题笔记/000readme.md": {
  id: "en/02极客时间vue课程学习和问题笔记/000readme.md",
  slug: "en/02极客时间vue课程学习和问题笔记/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/02极客时间vue课程学习和问题笔记/001源码api的区别学习记录.md": {
  id: "en/02极客时间vue课程学习和问题笔记/001源码api的区别学习记录.md",
  slug: "en/02极客时间vue课程学习和问题笔记/001源码api的区别学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/02极客时间vue课程学习和问题笔记/002课程记录周边每周汇总01.md": {
  id: "en/02极客时间vue课程学习和问题笔记/002课程记录周边每周汇总01.md",
  slug: "en/02极客时间vue课程学习和问题笔记/002课程记录周边每周汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/03掘金算法课程学习和问题笔记/000readme.md": {
  id: "en/03掘金算法课程学习和问题笔记/000readme.md",
  slug: "en/03掘金算法课程学习和问题笔记/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/000taro版本基础使用.md": {
  id: "en/04小程序专题/000taro版本基础使用.md",
  slug: "en/04小程序专题/000taro版本基础使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/001uniapp建立部署打包uniapp的使用.md": {
  id: "en/04小程序专题/001uniapp建立部署打包uniapp的使用.md",
  slug: "en/04小程序专题/001uniapp建立部署打包uniapp的使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/001原生小程序基础开发.md": {
  id: "en/04小程序专题/001原生小程序基础开发.md",
  slug: "en/04小程序专题/001原生小程序基础开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/002uniapp基础开发记录.md": {
  id: "en/04小程序专题/002uniapp基础开发记录.md",
  slug: "en/04小程序专题/002uniapp基础开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/002掘金课程uniapp记录.md": {
  id: "en/04小程序专题/002掘金课程uniapp记录.md",
  slug: "en/04小程序专题/002掘金课程uniapp记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/taro.md": {
  id: "en/04小程序专题/taro.md",
  slug: "en/04小程序专题/taro",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/taro1.md": {
  id: "en/04小程序专题/taro1.md",
  slug: "en/04小程序专题/taro1",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/04小程序专题/taro2.md": {
  id: "en/04小程序专题/taro2.md",
  slug: "en/04小程序专题/taro2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/05leetcode刷题记录每周/001优秀算法思路的记录.md": {
  id: "en/05leetcode刷题记录每周/001优秀算法思路的记录.md",
  slug: "en/05leetcode刷题记录每周/001优秀算法思路的记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/05leetcode刷题记录每周/002leetcode的刷题辅助调试debug.md": {
  id: "en/05leetcode刷题记录每周/002leetcode的刷题辅助调试debug.md",
  slug: "en/05leetcode刷题记录每周/002leetcode的刷题辅助调试debug",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/05leetcode刷题记录每周/0解题模板.md": {
  id: "en/05leetcode刷题记录每周/0解题模板.md",
  slug: "en/05leetcode刷题记录每周/0解题模板",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/001第二章极客时间koaexpress说明对比笔记readme.md": {
  id: "en/06node全栈记录/001第二章极客时间koaexpress说明对比笔记readme.md",
  slug: "en/06node全栈记录/001第二章极客时间koaexpress说明对比笔记readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/002第三章极客时间nodejs学习笔记readme.md": {
  id: "en/06node全栈记录/002第三章极客时间nodejs学习笔记readme.md",
  slug: "en/06node全栈记录/002第三章极客时间nodejs学习笔记readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/003第四章极客时间笔记node优化性能.md": {
  id: "en/06node全栈记录/003第四章极客时间笔记node优化性能.md",
  slug: "en/06node全栈记录/003第四章极客时间笔记node优化性能",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/004第五章jksj总结学习事件循环记录整理.md": {
  id: "en/06node全栈记录/004第五章jksj总结学习事件循环记录整理.md",
  slug: "en/06node全栈记录/004第五章jksj总结学习事件循环记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/005nodereact实战记账本掘金课程.md": {
  id: "en/06node全栈记录/005nodereact实战记账本掘金课程.md",
  slug: "en/06node全栈记录/005nodereact实战记账本掘金课程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/006node相关学习补充.md": {
  id: "en/06node全栈记录/006node相关学习补充.md",
  slug: "en/06node全栈记录/006node相关学习补充",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/008websocket的开发使用记录.md": {
  id: "en/06node全栈记录/008websocket的开发使用记录.md",
  slug: "en/06node全栈记录/008websocket的开发使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/009sequelize和orm.md": {
  id: "en/06node全栈记录/009sequelize和orm.md",
  slug: "en/06node全栈记录/009sequelize和orm",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/010nginx的proxymanager可视化nginx管理平台.md": {
  id: "en/06node全栈记录/010nginx的proxymanager可视化nginx管理平台.md",
  slug: "en/06node全栈记录/010nginx的proxymanager可视化nginx管理平台",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/06node全栈记录/11前端需要了解的meta标签.md": {
  id: "en/06node全栈记录/11前端需要了解的meta标签.md",
  slug: "en/06node全栈记录/11前端需要了解的meta标签",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/000readme.md": {
  id: "en/07react学习常见问题和笔记记录/000readme.md",
  slug: "en/07react学习常见问题和笔记记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/001react版本升级和功能说明.md": {
  id: "en/07react学习常见问题和笔记记录/001react版本升级和功能说明.md",
  slug: "en/07react学习常见问题和笔记记录/001react版本升级和功能说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/001入门面试题react笔记汇总记录.md": {
  id: "en/07react学习常见问题和笔记记录/001入门面试题react笔记汇总记录.md",
  slug: "en/07react学习常见问题和笔记记录/001入门面试题react笔记汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录.md": {
  id: "en/07react学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录.md",
  slug: "en/07react学习常见问题和笔记记录/001基础react笔记问题学习学习笔记记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/002相关项目安装React问题排查.md": {
  id: "en/07react学习常见问题和笔记记录/002相关项目安装React问题排查.md",
  slug: "en/07react学习常见问题和笔记记录/002相关项目安装react问题排查",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/003react路由和其他核心插件的相关升级问题记录.md": {
  id: "en/07react学习常见问题和笔记记录/003react路由和其他核心插件的相关升级问题记录.md",
  slug: "en/07react学习常见问题和笔记记录/003react路由和其他核心插件的相关升级问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/004react生命周期以及hook和性能优化的问题记录.md": {
  id: "en/07react学习常见问题和笔记记录/004react生命周期以及hook和性能优化的问题记录.md",
  slug: "en/07react学习常见问题和笔记记录/004react生命周期以及hook和性能优化的问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/006react脚手架创建和配置使用记录.md": {
  id: "en/07react学习常见问题和笔记记录/006react脚手架创建和配置使用记录.md",
  slug: "en/07react学习常见问题和笔记记录/006react脚手架创建和配置使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/07react学习常见问题和笔记记录/007react配置Webpack项目说明记录.md": {
  id: "en/07react学习常见问题和笔记记录/007react配置Webpack项目说明记录.md",
  slug: "en/07react学习常见问题和笔记记录/007react配置webpack项目说明记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/000vue2升级vue3的api变化.md": {
  id: "en/08vue常见问题和学习记录/000vue2升级vue3的api变化.md",
  slug: "en/08vue常见问题和学习记录/000vue2升级vue3的api变化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/001vue3升级后个人使用汇总案例.md": {
  id: "en/08vue常见问题和学习记录/001vue3升级后个人使用汇总案例.md",
  slug: "en/08vue常见问题和学习记录/001vue3升级后个人使用汇总案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/001vue版本升级和功能说明.md": {
  id: "en/08vue常见问题和学习记录/001vue版本升级和功能说明.md",
  slug: "en/08vue常见问题和学习记录/001vue版本升级和功能说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案2.md": {
  id: "en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案2.md",
  slug: "en/08vue常见问题和学习记录/002vue3使用汇总问题记录和解决方案2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案3.md": {
  id: "en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案3.md",
  slug: "en/08vue常见问题和学习记录/003vue3使用汇总问题记录和解决方案3",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/004vue3每周使用总结案例1.md": {
  id: "en/08vue常见问题和学习记录/004vue3每周使用总结案例1.md",
  slug: "en/08vue常见问题和学习记录/004vue3每周使用总结案例1",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/005vue3经典开发总结案例2.md": {
  id: "en/08vue常见问题和学习记录/005vue3经典开发总结案例2.md",
  slug: "en/08vue常见问题和学习记录/005vue3经典开发总结案例2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用.md": {
  id: "en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用.md",
  slug: "en/08vue常见问题和学习记录/006vue3中基础开发setup语法糖总结开发使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/007vue生命周期和执行顺序记录整理.md": {
  id: "en/08vue常见问题和学习记录/007vue生命周期和执行顺序记录整理.md",
  slug: "en/08vue常见问题和学习记录/007vue生命周期和执行顺序记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/007vue生命周期和渲染记录整理.md": {
  id: "en/08vue常见问题和学习记录/007vue生命周期和渲染记录整理.md",
  slug: "en/08vue常见问题和学习记录/007vue生命周期和渲染记录整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理.md": {
  id: "en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理.md",
  slug: "en/08vue常见问题和学习记录/008vue2和vue3脚手架基础知识汇总整理",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么.md": {
  id: "en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么.md",
  slug: "en/08vue常见问题和学习记录/009es12发布普通项目使用需要做什么",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/010动态切换cdn实现线上的cdn自动的支持.md": {
  id: "en/08vue常见问题和学习记录/010动态切换cdn实现线上的cdn自动的支持.md",
  slug: "en/08vue常见问题和学习记录/010动态切换cdn实现线上的cdn自动的支持",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/08vue常见问题和学习记录/011vue经典问题汇总2.md": {
  id: "en/08vue常见问题和学习记录/011vue经典问题汇总2.md",
  slug: "en/08vue常见问题和学习记录/011vue经典问题汇总2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01.md": {
  id: "en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01.md",
  slug: "en/09book前端进阶知识学习图书笔记/001高级css常用使用技巧汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/09book前端进阶知识学习图书笔记/003css工程化适配方案.md": {
  id: "en/09book前端进阶知识学习图书笔记/003css工程化适配方案.md",
  slug: "en/09book前端进阶知识学习图书笔记/003css工程化适配方案",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/09book前端进阶知识学习图书笔记/004好玩的css.md": {
  id: "en/09book前端进阶知识学习图书笔记/004好玩的css.md",
  slug: "en/09book前端进阶知识学习图书笔记/004好玩的css",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总.md": {
  id: "en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总.md",
  slug: "en/09book前端进阶知识学习图书笔记/005高级js知识补充汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明.md": {
  id: "en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明.md",
  slug: "en/09book前端进阶知识学习图书笔记/007less和sass汇总常用说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/001前端经典问题考究思考.md": {
  id: "en/0个人前端项目实战记录和链接/001前端经典问题考究思考.md",
  slug: "en/0个人前端项目实战记录和链接/001前端经典问题考究思考",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/001掘金课程记录和问题.md": {
  id: "en/0个人前端项目实战记录和链接/001掘金课程记录和问题.md",
  slug: "en/0个人前端项目实战记录和链接/001掘金课程记录和问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/002项目实战和说明内容001.md": {
  id: "en/0个人前端项目实战记录和链接/002项目实战和说明内容001.md",
  slug: "en/0个人前端项目实战记录和链接/002项目实战和说明内容001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/003常用node开发.md": {
  id: "en/0个人前端项目实战记录和链接/003常用node开发.md",
  slug: "en/0个人前端项目实战记录和链接/003常用node开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/004常用前端开发项目总结.md": {
  id: "en/0个人前端项目实战记录和链接/004常用前端开发项目总结.md",
  slug: "en/0个人前端项目实战记录和链接/004常用前端开发项目总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/005编程猫学习研究依赖相关汇总.md": {
  id: "en/0个人前端项目实战记录和链接/005编程猫学习研究依赖相关汇总.md",
  slug: "en/0个人前端项目实战记录和链接/005编程猫学习研究依赖相关汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/006常用h5开发总结.md": {
  id: "en/0个人前端项目实战记录和链接/006常用h5开发总结.md",
  slug: "en/0个人前端项目实战记录和链接/006常用h5开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/007常用react开发汇总.md": {
  id: "en/0个人前端项目实战记录和链接/007常用react开发汇总.md",
  slug: "en/0个人前端项目实战记录和链接/007常用react开发汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/008常用vue开发总结.md": {
  id: "en/0个人前端项目实战记录和链接/008常用vue开发总结.md",
  slug: "en/0个人前端项目实战记录和链接/008常用vue开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/009前端存储相关的问题开发总结.md": {
  id: "en/0个人前端项目实战记录和链接/009前端存储相关的问题开发总结.md",
  slug: "en/0个人前端项目实战记录和链接/009前端存储相关的问题开发总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0个人前端项目实战记录和链接/010项目monorepo架构开发.md": {
  id: "en/0个人前端项目实战记录和链接/010项目monorepo架构开发.md",
  slug: "en/0个人前端项目实战记录和链接/010项目monorepo架构开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/0经典脚手架持续迭代/000readme.md": {
  id: "en/0经典脚手架持续迭代/000readme.md",
  slug: "en/0经典脚手架持续迭代/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本.md": {
  id: "en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本.md",
  slug: "en/10book前端开发设计模式和开发实战笔记/001设计模式学习记录大全基础入门版本",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/001antdesign每周开发问题和总结汇总001.md": {
  id: "en/11经典源码和实战学习和问题笔记/001antdesign每周开发问题和总结汇总001.md",
  slug: "en/11经典源码和实战学习和问题笔记/001antdesign每周开发问题和总结汇总001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/001element每周开发问题和总结汇总01.md": {
  id: "en/11经典源码和实战学习和问题笔记/001element每周开发问题和总结汇总01.md",
  slug: "en/11经典源码和实战学习和问题笔记/001element每周开发问题和总结汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/001组件经典案例使用说明.md": {
  id: "en/11经典源码和实战学习和问题笔记/001组件经典案例使用说明.md",
  slug: "en/11经典源码和实战学习和问题笔记/001组件经典案例使用说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002react源码案例系列001.md": {
  id: "en/11经典源码和实战学习和问题笔记/002react源码案例系列001.md",
  slug: "en/11经典源码和实战学习和问题笔记/002react源码案例系列001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002react源码案例系列002.md": {
  id: "en/11经典源码和实战学习和问题笔记/002react源码案例系列002.md",
  slug: "en/11经典源码和实战学习和问题笔记/002react源码案例系列002",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002react源码案例系列003.md": {
  id: "en/11经典源码和实战学习和问题笔记/002react源码案例系列003.md",
  slug: "en/11经典源码和实战学习和问题笔记/002react源码案例系列003",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002vue源码案例系列001.md": {
  id: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列001.md",
  slug: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002vue源码案例系列002.md": {
  id: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列002.md",
  slug: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列002",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/11经典源码和实战学习和问题笔记/002vue源码案例系列003.md": {
  id: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列003.md",
  slug: "en/11经典源码和实战学习和问题笔记/002vue源码案例系列003",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/000readme.md": {
  id: "en/12前端开发高级拓展知识学习记录/000readme.md",
  slug: "en/12前端开发高级拓展知识学习记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/001你不知道的JavaScript学习知识点汇总.md": {
  id: "en/12前端开发高级拓展知识学习记录/001你不知道的JavaScript学习知识点汇总.md",
  slug: "en/12前端开发高级拓展知识学习记录/001你不知道的javascript学习知识点汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/002axios.md": {
  id: "en/12前端开发高级拓展知识学习记录/002axios.md",
  slug: "en/12前端开发高级拓展知识学习记录/002axios",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/002vue中一些常用经典库使用.md": {
  id: "en/12前端开发高级拓展知识学习记录/002vue中一些常用经典库使用.md",
  slug: "en/12前端开发高级拓展知识学习记录/002vue中一些常用经典库使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/003前端开发进阶技术.md": {
  id: "en/12前端开发高级拓展知识学习记录/003前端开发进阶技术.md",
  slug: "en/12前端开发高级拓展知识学习记录/003前端开发进阶技术",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/004glob语法库使用.md": {
  id: "en/12前端开发高级拓展知识学习记录/004glob语法库使用.md",
  slug: "en/12前端开发高级拓展知识学习记录/004glob语法库使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/005经典库canvas画excel组件记录.md": {
  id: "en/12前端开发高级拓展知识学习记录/005经典库canvas画excel组件记录.md",
  slug: "en/12前端开发高级拓展知识学习记录/005经典库canvas画excel组件记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/006前端底层基础工具各个版本API的更新情况汇总.md": {
  id: "en/12前端开发高级拓展知识学习记录/006前端底层基础工具各个版本API的更新情况汇总.md",
  slug: "en/12前端开发高级拓展知识学习记录/006前端底层基础工具各个版本api的更新情况汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/12前端开发高级拓展知识学习记录/010经典js问题内容.md": {
  id: "en/12前端开发高级拓展知识学习记录/010经典js问题内容.md",
  slug: "en/12前端开发高级拓展知识学习记录/010经典js问题内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/000readme.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/000readme.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/001pm2进程相关汇总记录.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/001pm2进程相关汇总记录.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/001pm2进程相关汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/002nuxt开发使用说明和案例记录001.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/002nuxt开发使用说明和案例记录001.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/002nuxt开发使用说明和案例记录001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/003next开发使用说明和案例记录001.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/003next开发使用说明和案例记录001.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/003next开发使用说明和案例记录001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/004koa开发使用说明和案例记录001.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/004koa开发使用说明和案例记录001.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/004koa开发使用说明和案例记录001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/006vitesse汇总记录.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/006vitesse汇总记录.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/006vitesse汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/13koa和express框架nuxt和next及其他全栈框架学习记录/007关于node项目一些报错记录.md": {
  id: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/007关于node项目一些报错记录.md",
  slug: "en/13koa和express框架nuxt和next及其他全栈框架学习记录/007关于node项目一些报错记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/000readme.md": {
  id: "en/14前端图形化学习/000readme.md",
  slug: "en/14前端图形化学习/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/001aggrid实战拓展记录.md": {
  id: "en/14前端图形化学习/001aggrid实战拓展记录.md",
  slug: "en/14前端图形化学习/001aggrid实战拓展记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/002scratch.md": {
  id: "en/14前端图形化学习/002scratch.md",
  slug: "en/14前端图形化学习/002scratch",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/003antvX6.md": {
  id: "en/14前端图形化学习/003antvX6.md",
  slug: "en/14前端图形化学习/003antvx6",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/004各种css拓展小知识补充.md": {
  id: "en/14前端图形化学习/004各种css拓展小知识补充.md",
  slug: "en/14前端图形化学习/004各种css拓展小知识补充",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/005threejs2d3d图形化.md": {
  id: "en/14前端图形化学习/005threejs2d3d图形化.md",
  slug: "en/14前端图形化学习/005threejs2d3d图形化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/006跟着月影学习可视化极客时间.md": {
  id: "en/14前端图形化学习/006跟着月影学习可视化极客时间.md",
  slug: "en/14前端图形化学习/006跟着月影学习可视化极客时间",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/14前端图形化学习/007svg图形化使用记录.md": {
  id: "en/14前端图形化学习/007svg图形化使用记录.md",
  slug: "en/14前端图形化学习/007svg图形化使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000jenkins部署记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000jenkins部署记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000jenkins部署记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000rollup工程化问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000rollup工程化问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000rollup工程化问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000vuecli工程化脚手架问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000webpack和vite开发插件和loader记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000webpack和vite开发插件和loader记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000webpack和vite开发插件和loader记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000webpack工程化问题记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000webpack工程化问题记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000webpack工程化问题记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000代码校验统一格式化.md": {
  id: "en/15工具和项目配置工程化问题记录/000代码校验统一格式化.md",
  slug: "en/15工具和项目配置工程化问题记录/000代码校验统一格式化",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000前端多环境配置工具隔离方法.md": {
  id: "en/15工具和项目配置工程化问题记录/000前端多环境配置工具隔离方法.md",
  slug: "en/15工具和项目配置工程化问题记录/000前端多环境配置工具隔离方法",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用.md": {
  id: "en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用.md",
  slug: "en/15工具和项目配置工程化问题记录/000前端工程化中的脚手架创建和使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录.md": {
  id: "en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录.md",
  slug: "en/15工具和项目配置工程化问题记录/000部署代码各种方案案例记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包.md": {
  id: "en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包.md",
  slug: "en/15工具和项目配置工程化问题记录/001vitevue3开发一个组件库和私有npm包",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/001vite或是webpack开发组件库记录.md": {
  id: "en/15工具和项目配置工程化问题记录/001vite或是webpack开发组件库记录.md",
  slug: "en/15工具和项目配置工程化问题记录/001vite或是webpack开发组件库记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/001vuepress问题汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/001vuepress问题汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/001vuepress问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/002docker部署前端简单实现.md": {
  id: "en/15工具和项目配置工程化问题记录/002docker部署前端简单实现.md",
  slug: "en/15工具和项目配置工程化问题记录/002docker部署前端简单实现",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/003cicd记录学习.md": {
  id: "en/15工具和项目配置工程化问题记录/003cicd记录学习.md",
  slug: "en/15工具和项目配置工程化问题记录/003cicd记录学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/004docker课程学习笔记和部署笔记包含nginx配置.md": {
  id: "en/15工具和项目配置工程化问题记录/004docker课程学习笔记和部署笔记包含nginx配置.md",
  slug: "en/15工具和项目配置工程化问题记录/004docker课程学习笔记和部署笔记包含nginx配置",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01.md": {
  id: "en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01.md",
  slug: "en/15工具和项目配置工程化问题记录/005前端工程化之脚手架常用的那些公共库处理01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/006react或vue和chrome插件项目文件夹目录结构说明.md": {
  id: "en/15工具和项目配置工程化问题记录/006react或vue和chrome插件项目文件夹目录结构说明.md",
  slug: "en/15工具和项目配置工程化问题记录/006react或vue和chrome插件项目文件夹目录结构说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法.md": {
  id: "en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法.md",
  slug: "en/15工具和项目配置工程化问题记录/006调试源码和跳转代码相关工具方法",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金.md": {
  id: "en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金.md",
  slug: "en/15工具和项目配置工程化问题记录/007babal学习记录原理掘金",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题.md": {
  id: "en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题.md",
  slug: "en/15工具和项目配置工程化问题记录/008工程化开发中npm包对应的版本安装问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/009vue项目中引入图标库或是组件库的方法汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/010packages文件中字段作用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/011webpack和vite工程化插件和开发功能汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/012webpack中那些性能优化的方案配置汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/013vite框架中那些性能优化的方案汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/014docker部署mysql，nginx,mongo记录.md": {
  id: "en/15工具和项目配置工程化问题记录/014docker部署mysql，nginx,mongo记录.md",
  slug: "en/15工具和项目配置工程化问题记录/014docker部署mysqlnginxmongo记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用.md": {
  id: "en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用.md",
  slug: "en/15工具和项目配置工程化问题记录/015脚手架常见命令统一配置使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/016常见包管理工具问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录.md": {
  id: "en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录.md",
  slug: "en/15工具和项目配置工程化问题记录/017jianmu建木流程化部署记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/017node版本管理和缓存设置管理和py版本内容.md": {
  id: "en/15工具和项目配置工程化问题记录/017node版本管理和缓存设置管理和py版本内容.md",
  slug: "en/15工具和项目配置工程化问题记录/017node版本管理和缓存设置管理和py版本内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/018vscode插件开发案例.md": {
  id: "en/15工具和项目配置工程化问题记录/018vscode插件开发案例.md",
  slug: "en/15工具和项目配置工程化问题记录/018vscode插件开发案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录.md": {
  id: "en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录.md",
  slug: "en/15工具和项目配置工程化问题记录/019前端埋点监控方案记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例.md": {
  id: "en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例.md",
  slug: "en/15工具和项目配置工程化问题记录/019自定义前端本地化脚手架框架案例",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/020ngnix配置说明使用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/021ssh命令学习记录.md": {
  id: "en/15工具和项目配置工程化问题记录/021ssh命令学习记录.md",
  slug: "en/15工具和项目配置工程化问题记录/021ssh命令学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/022python基本语法记录.md": {
  id: "en/15工具和项目配置工程化问题记录/022python基本语法记录.md",
  slug: "en/15工具和项目配置工程化问题记录/022python基本语法记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/023python环境配置相关汇总.md": {
  id: "en/15工具和项目配置工程化问题记录/023python环境配置相关汇总.md",
  slug: "en/15工具和项目配置工程化问题记录/023python环境配置相关汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/024linux系统命令常用使用.md": {
  id: "en/15工具和项目配置工程化问题记录/024linux系统命令常用使用.md",
  slug: "en/15工具和项目配置工程化问题记录/024linux系统命令常用使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/025.离线环境安装npm包记录过程.md": {
  id: "en/15工具和项目配置工程化问题记录/025.离线环境安装npm包记录过程.md",
  slug: "en/15工具和项目配置工程化问题记录/025离线环境安装npm包记录过程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/026ngrok内网穿透工具使用相关.md": {
  id: "en/15工具和项目配置工程化问题记录/026ngrok内网穿透工具使用相关.md",
  slug: "en/15工具和项目配置工程化问题记录/026ngrok内网穿透工具使用相关",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/027bpmn图.md": {
  id: "en/15工具和项目配置工程化问题记录/027bpmn图.md",
  slug: "en/15工具和项目配置工程化问题记录/027bpmn图",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/15工具和项目配置工程化问题记录/028mac上面的各种配置环境相关记录.md": {
  id: "en/15工具和项目配置工程化问题记录/028mac上面的各种配置环境相关记录.md",
  slug: "en/15工具和项目配置工程化问题记录/028mac上面的各种配置环境相关记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题.md": {
  id: "en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题.md",
  slug: "en/16前端拓展知识学习/000000学以致用用程序员的思路思考和解决现实问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000readme.md": {
  id: "en/16前端拓展知识学习/000readme.md",
  slug: "en/16前端拓展知识学习/000readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000前端架构师体系化学习.md": {
  id: "en/16前端拓展知识学习/000前端架构师体系化学习.md",
  slug: "en/16前端拓展知识学习/000前端架构师体系化学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000如何高效使用一台服务器.md": {
  id: "en/16前端拓展知识学习/000如何高效使用一台服务器.md",
  slug: "en/16前端拓展知识学习/000如何高效使用一台服务器",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000记录webcomponets规范.md": {
  id: "en/16前端拓展知识学习/000记录webcomponets规范.md",
  slug: "en/16前端拓展知识学习/000记录webcomponets规范",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/000软件使用个人经验汇总学习.md": {
  id: "en/16前端拓展知识学习/000软件使用个人经验汇总学习.md",
  slug: "en/16前端拓展知识学习/000软件使用个人经验汇总学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/001最新ecma标准js学习.md": {
  id: "en/16前端拓展知识学习/001最新ecma标准js学习.md",
  slug: "en/16前端拓展知识学习/001最新ecma标准js学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/001编译器编译过程总结.md": {
  id: "en/16前端拓展知识学习/001编译器编译过程总结.md",
  slug: "en/16前端拓展知识学习/001编译器编译过程总结",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/002typescirpt标准补充学习.md": {
  id: "en/16前端拓展知识学习/002typescirpt标准补充学习.md",
  slug: "en/16前端拓展知识学习/002typescirpt标准补充学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/003vue项目中常用ts方式汇总01.md": {
  id: "en/16前端拓展知识学习/003vue项目中常用ts方式汇总01.md",
  slug: "en/16前端拓展知识学习/003vue项目中常用ts方式汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/004React项目中常见ts方式汇总01.md": {
  id: "en/16前端拓展知识学习/004React项目中常见ts方式汇总01.md",
  slug: "en/16前端拓展知识学习/004react项目中常见ts方式汇总01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/005ts常见问题汇总记录.md": {
  id: "en/16前端拓展知识学习/005ts常见问题汇总记录.md",
  slug: "en/16前端拓展知识学习/005ts常见问题汇总记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/006经典文章总结资源相关应用汇总.md": {
  id: "en/16前端拓展知识学习/006经典文章总结资源相关应用汇总.md",
  slug: "en/16前端拓展知识学习/006经典文章总结资源相关应用汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/007electron学习笔记.md": {
  id: "en/16前端拓展知识学习/007electron学习笔记.md",
  slug: "en/16前端拓展知识学习/007electron学习笔记",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/008相关协议和通信补充学习.md": {
  id: "en/16前端拓展知识学习/008相关协议和通信补充学习.md",
  slug: "en/16前端拓展知识学习/008相关协议和通信补充学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/011java知识简单入门.md": {
  id: "en/16前端拓展知识学习/011java知识简单入门.md",
  slug: "en/16前端拓展知识学习/011java知识简单入门",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/013数据库相关知识汇总.md": {
  id: "en/16前端拓展知识学习/013数据库相关知识汇总.md",
  slug: "en/16前端拓展知识学习/013数据库相关知识汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/017异常npm报错问题汇总.md": {
  id: "en/16前端拓展知识学习/017异常npm报错问题汇总.md",
  slug: "en/16前端拓展知识学习/017异常npm报错问题汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/018php的相关内容.md": {
  id: "en/16前端拓展知识学习/018php的相关内容.md",
  slug: "en/16前端拓展知识学习/018php的相关内容",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/018软件著作权相关.md": {
  id: "en/16前端拓展知识学习/018软件著作权相关.md",
  slug: "en/16前端拓展知识学习/018软件著作权相关",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/019yaml和yml学习记录.md": {
  id: "en/16前端拓展知识学习/019yaml和yml学习记录.md",
  slug: "en/16前端拓展知识学习/019yaml和yml学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/020web3元宇宙.md": {
  id: "en/16前端拓展知识学习/020web3元宇宙.md",
  slug: "en/16前端拓展知识学习/020web3元宇宙",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/021图形流程设计UML学习记录汇总.md": {
  id: "en/16前端拓展知识学习/021图形流程设计UML学习记录汇总.md",
  slug: "en/16前端拓展知识学习/021图形流程设计uml学习记录汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/022区块链课程知识学习01.md": {
  id: "en/16前端拓展知识学习/022区块链课程知识学习01.md",
  slug: "en/16前端拓展知识学习/022区块链课程知识学习01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/023mongo使用记录学习.md": {
  id: "en/16前端拓展知识学习/023mongo使用记录学习.md",
  slug: "en/16前端拓展知识学习/023mongo使用记录学习",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/024mysql使用记录.md": {
  id: "en/16前端拓展知识学习/024mysql使用记录.md",
  slug: "en/16前端拓展知识学习/024mysql使用记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/025配置虚拟机环境软件相关.md": {
  id: "en/16前端拓展知识学习/025配置虚拟机环境软件相关.md",
  slug: "en/16前端拓展知识学习/025配置虚拟机环境软件相关",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/026远程桌面使用.md": {
  id: "en/16前端拓展知识学习/026远程桌面使用.md",
  slug: "en/16前端拓展知识学习/026远程桌面使用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/027ubuntu开发常见问题.md": {
  id: "en/16前端拓展知识学习/027ubuntu开发常见问题.md",
  slug: "en/16前端拓展知识学习/027ubuntu开发常见问题",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/028svelte和solid.md": {
  id: "en/16前端拓展知识学习/028svelte和solid.md",
  slug: "en/16前端拓展知识学习/028svelte和solid",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/029mac和windows软件默认装机使用和快捷键汇总.md": {
  id: "en/16前端拓展知识学习/029mac和windows软件默认装机使用和快捷键汇总.md",
  slug: "en/16前端拓展知识学习/029mac和windows软件默认装机使用和快捷键汇总",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/16前端拓展知识学习/030中文排版指北.md": {
  id: "en/16前端拓展知识学习/030中文排版指北.md",
  slug: "en/16前端拓展知识学习/030中文排版指北",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/000从零开发可视化搭建项目jj.md": {
  id: "en/17低代码学习和总结/000从零开发可视化搭建项目jj.md",
  slug: "en/17低代码学习和总结/000从零开发可视化搭建项目jj",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/000极客时间课程物联网开发001.md": {
  id: "en/17低代码学习和总结/000极客时间课程物联网开发001.md",
  slug: "en/17低代码学习和总结/000极客时间课程物联网开发001",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/001scratch组件封装实现.md": {
  id: "en/17低代码学习和总结/001scratch组件封装实现.md",
  slug: "en/17低代码学习和总结/001scratch组件封装实现",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/004图形化模式器开发.md": {
  id: "en/17低代码学习和总结/004图形化模式器开发.md",
  slug: "en/17低代码学习和总结/004图形化模式器开发",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/005腾讯低代码魔方模拟器.md": {
  id: "en/17低代码学习和总结/005腾讯低代码魔方模拟器.md",
  slug: "en/17低代码学习和总结/005腾讯低代码魔方模拟器",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/006coco低代码模拟器开发记录.md": {
  id: "en/17低代码学习和总结/006coco低代码模拟器开发记录.md",
  slug: "en/17低代码学习和总结/006coco低代码模拟器开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/007低代码0到1实现思路梳理01.md": {
  id: "en/17低代码学习和总结/007低代码0到1实现思路梳理01.md",
  slug: "en/17低代码学习和总结/007低代码0到1实现思路梳理01",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/007低代码0到1实现思路梳理02.md": {
  id: "en/17低代码学习和总结/007低代码0到1实现思路梳理02.md",
  slug: "en/17低代码学习和总结/007低代码0到1实现思路梳理02",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/17低代码学习和总结/009DSL说明学习记录.md": {
  id: "en/17低代码学习和总结/009DSL说明学习记录.md",
  slug: "en/17低代码学习和总结/009dsl说明学习记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/001手把手带你实现存储引擎.md": {
  id: "en/18经验亮点汇总汇总/001手把手带你实现存储引擎.md",
  slug: "en/18经验亮点汇总汇总/001手把手带你实现存储引擎",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/002一台服务器有什么用.md": {
  id: "en/18经验亮点汇总汇总/002一台服务器有什么用.md",
  slug: "en/18经验亮点汇总汇总/002一台服务器有什么用",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/003一文手把手教你搭建Git私服.md": {
  id: "en/18经验亮点汇总汇总/003一文手把手教你搭建Git私服.md",
  slug: "en/18经验亮点汇总汇总/003一文手把手教你搭建git私服",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/004前端抓包工具和调试工具汇总说明.md": {
  id: "en/18经验亮点汇总汇总/004前端抓包工具和调试工具汇总说明.md",
  slug: "en/18经验亮点汇总汇总/004前端抓包工具和调试工具汇总说明",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/005公司npm包私有化部署.md": {
  id: "en/18经验亮点汇总汇总/005公司npm包私有化部署.md",
  slug: "en/18经验亮点汇总汇总/005公司npm包私有化部署",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南.md": {
  id: "en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南.md",
  slug: "en/18经验亮点汇总汇总/005移动端自动化autojs快速入门指南",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa.md": {
  id: "en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa.md",
  slug: "en/18经验亮点汇总汇总/006推荐一个web端自动化神器automa",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/007webrtc开发记录和其他音视频开发记录.md": {
  id: "en/18经验亮点汇总汇总/007webrtc开发记录和其他音视频开发记录.md",
  slug: "en/18经验亮点汇总汇总/007webrtc开发记录和其他音视频开发记录",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/008node开发调用后端c语言.md": {
  id: "en/18经验亮点汇总汇总/008node开发调用后端c语言.md",
  slug: "en/18经验亮点汇总汇总/008node开发调用后端c语言",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/009Vite和Webpack在项目中同时配置.md": {
  id: "en/18经验亮点汇总汇总/009Vite和Webpack在项目中同时配置.md",
  slug: "en/18经验亮点汇总汇总/009vite和webpack在项目中同时配置",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/18经验亮点汇总汇总/010组件库开发方案.md": {
  id: "en/18经验亮点汇总汇总/010组件库开发方案.md",
  slug: "en/18经验亮点汇总汇总/010组件库开发方案",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/eighteen.md": {
  id: "en/eighteen.md",
  slug: "en/eighteen",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/eighth.md": {
  id: "en/eighth.md",
  slug: "en/eighth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/eighth2.md": {
  id: "en/eighth2.md",
  slug: "en/eighth2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/eleventh.md": {
  id: "en/eleventh.md",
  slug: "en/eleventh",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/fifteenth.md": {
  id: "en/fifteenth.md",
  slug: "en/fifteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/fifth.md": {
  id: "en/fifth.md",
  slug: "en/fifth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/first.md": {
  id: "en/first.md",
  slug: "en/first",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/fourteenth.md": {
  id: "en/fourteenth.md",
  slug: "en/fourteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/fourth.md": {
  id: "en/fourth.md",
  slug: "en/fourth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/introduction.md": {
  id: "en/introduction.md",
  slug: "en/introduction",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/ninghteen.md": {
  id: "en/ninghteen.md",
  slug: "en/ninghteen",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/ninth.md": {
  id: "en/ninth.md",
  slug: "en/ninth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/notices.md": {
  id: "en/notices.md",
  slug: "en/notices",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/others.md": {
  id: "en/others.md",
  slug: "en/others",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/second.md": {
  id: "en/second.md",
  slug: "en/second",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/seventeenth.md": {
  id: "en/seventeenth.md",
  slug: "en/seventeenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/seventh.md": {
  id: "en/seventh.md",
  slug: "en/seventh",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/sixteenth.md": {
  id: "en/sixteenth.md",
  slug: "en/sixteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/sixth.md": {
  id: "en/sixth.md",
  slug: "en/sixth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/tenth.md": {
  id: "en/tenth.md",
  slug: "en/tenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/third.md": {
  id: "en/third.md",
  slug: "en/third",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/thirteenth.md": {
  id: "en/thirteenth.md",
  slug: "en/thirteenth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/twelfth.md": {
  id: "en/twelfth.md",
  slug: "en/twelfth",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/twenty.md": {
  id: "en/twenty.md",
  slug: "en/twenty",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/zero.md": {
  id: "en/zero.md",
  slug: "en/zero",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
