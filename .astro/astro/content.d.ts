declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal.mdx": {
	id: "portal.mdx";
  slug: "portal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/audio.md": {
	id: "portal/audio.md";
  slug: "portal/audio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/audio/a2-fundamentals.mdx": {
	id: "portal/audio/a2-fundamentals.mdx";
  slug: "portal/audio/a2-fundamentals";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/general.md": {
	id: "portal/general.md";
  slug: "portal/general";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/general/intercom-etiquette.mdx": {
	id: "portal/general/intercom-etiquette.mdx";
  slug: "portal/general/intercom-etiquette";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/general/student-guide.mdx": {
	id: "portal/general/student-guide.mdx";
  slug: "portal/general/student-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/led.md": {
	id: "portal/led.md";
  slug: "portal/led";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/led/connecting-data.mdx": {
	id: "portal/led/connecting-data.mdx";
  slug: "portal/led/connecting-data";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/led/connecting-power.mdx": {
	id: "portal/led/connecting-power.mdx";
  slug: "portal/led/connecting-power";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/led/wall-setup.mdx": {
	id: "portal/led/wall-setup.mdx";
  slug: "portal/led/wall-setup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/lighting.md": {
	id: "portal/lighting.md";
  slug: "portal/lighting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/pwa/info.mdx": {
	id: "portal/pwa/info.mdx";
  slug: "portal/pwa/info";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/Basketball/broadcast.mdx": {
	id: "portal/sports/Basketball/broadcast.mdx";
  slug: "portal/sports/basketball/broadcast";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/Basketball/imag.mdx": {
	id: "portal/sports/Basketball/imag.mdx";
  slug: "portal/sports/basketball/imag";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/Basketball/scorebug.mdx": {
	id: "portal/sports/Basketball/scorebug.mdx";
  slug: "portal/sports/basketball/scorebug";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/diamond-sports.mdx": {
	id: "portal/sports/diamond-sports.mdx";
  slug: "portal/sports/diamond-sports";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/field-hockey.mdx": {
	id: "portal/sports/field-hockey.mdx";
  slug: "portal/sports/field-hockey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/football-imag.mdx": {
	id: "portal/sports/football-imag.mdx";
  slug: "portal/sports/football-imag";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/football.mdx": {
	id: "portal/sports/football.mdx";
  slug: "portal/sports/football";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/hockey.mdx": {
	id: "portal/sports/hockey.mdx";
  slug: "portal/sports/hockey";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/lacrosse.mdx": {
	id: "portal/sports/lacrosse.mdx";
  slug: "portal/sports/lacrosse";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/soccer.mdx": {
	id: "portal/sports/soccer.mdx";
  slug: "portal/sports/soccer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/swimming.mdx": {
	id: "portal/sports/swimming.mdx";
  slug: "portal/sports/swimming";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/sports/track-and-field.mdx": {
	id: "portal/sports/track-and-field.mdx";
  slug: "portal/sports/track-and-field";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/stage.md": {
	id: "portal/stage.md";
  slug: "portal/stage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/stage/cable-guide.mdx": {
	id: "portal/stage/cable-guide.mdx";
  slug: "portal/stage/cable-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/stage/gear-guide.mdx": {
	id: "portal/stage/gear-guide.mdx";
  slug: "portal/stage/gear-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video.md": {
	id: "portal/video.md";
  slug: "portal/video";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"portal/video/Camera/Camera Tours/bigbuild.mdx": {
	id: "portal/video/Camera/Camera Tours/bigbuild.mdx";
  slug: "portal/video/camera/camera-tours/bigbuild";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/Camera Tours/handheld.mdx": {
	id: "portal/video/Camera/Camera Tours/handheld.mdx";
  slug: "portal/video/camera/camera-tours/handheld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/Camera Tours/menu.mdx": {
	id: "portal/video/Camera/Camera Tours/menu.mdx";
  slug: "portal/video/camera/camera-tours/menu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/Camera Tours/smallbuild.mdx": {
	id: "portal/video/Camera/Camera Tours/smallbuild.mdx";
  slug: "portal/video/camera/camera-tours/smallbuild";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/becoming-better.mdx": {
	id: "portal/video/Camera/The Next Level/becoming-better.mdx";
  slug: "portal/video/camera/the-next-level/becoming-better";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/centerline.mdx": {
	id: "portal/video/Camera/The Next Level/centerline.mdx";
  slug: "portal/video/camera/the-next-level/centerline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/dolly-steadicam.mdx": {
	id: "portal/video/Camera/The Next Level/dolly-steadicam.mdx";
  slug: "portal/video/camera/the-next-level/dolly-steadicam";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/handheld.mdx": {
	id: "portal/video/Camera/The Next Level/handheld.mdx";
  slug: "portal/video/camera/the-next-level/handheld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/high-wide.mdx": {
	id: "portal/video/Camera/The Next Level/high-wide.mdx";
  slug: "portal/video/camera/the-next-level/high-wide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/jib.mdx": {
	id: "portal/video/Camera/The Next Level/jib.mdx";
  slug: "portal/video/camera/the-next-level/jib";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/The Next Level/secondary.mdx": {
	id: "portal/video/Camera/The Next Level/secondary.mdx";
  slug: "portal/video/camera/the-next-level/secondary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Camera/introduction.mdx": {
	id: "portal/video/Camera/introduction.mdx";
  slug: "portal/video/camera/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Control Room/content-operator.mdx": {
	id: "portal/video/Control Room/content-operator.mdx";
  slug: "portal/video/control-room/content-operator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Control Room/transmission-policy.mdx": {
	id: "portal/video/Control Room/transmission-policy.mdx";
  slug: "portal/video/control-room/transmission-policy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"portal/video/Shading/shading-training.mdx": {
	id: "portal/video/Shading/shading-training.mdx";
  slug: "portal/video/shading/shading-training";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
