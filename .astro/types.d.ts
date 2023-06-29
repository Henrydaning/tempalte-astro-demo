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
"en/five.md": {
  id: "en/five.md",
  slug: "en/five",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/four.md": {
  id: "en/four.md",
  slug: "en/four",
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
"en/java学习路线/java学习路线.md": {
  id: "en/java学习路线/java学习路线.md",
  slug: "en/java学习路线/java学习路线",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/linux学习路线/linux学习路线.md": {
  id: "en/linux学习路线/linux学习路线.md",
  slug: "en/linux学习路线/linux学习路线",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/one.md": {
  id: "en/one.md",
  slug: "en/one",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/python学习路线/python学习路线.md": {
  id: "en/python学习路线/python学习路线.md",
  slug: "en/python学习路线/python学习路线",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/three.md": {
  id: "en/three.md",
  slug: "en/three",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/two.md": {
  id: "en/two.md",
  slug: "en/two",
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
"en/全栈学习路线/前端学习路线.md": {
  id: "en/全栈学习路线/前端学习路线.md",
  slug: "en/全栈学习路线/前端学习路线",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/全栈学习路线/学习大圣前端老师的网站课程.md": {
  id: "en/全栈学习路线/学习大圣前端老师的网站课程.md",
  slug: "en/全栈学习路线/学习大圣前端老师的网站课程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/程序员通用技能/大厂研发流程.md": {
  id: "en/程序员通用技能/大厂研发流程.md",
  slug: "en/程序员通用技能/大厂研发流程",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
