// prettier-ignore

export interface Config {
	/**
	 * The name of the file to be compiled.  
	 * This will default to your `meta.name` if this option is not provided.  
	 * 
	 * This **WILL** name both the "dist" and "base" css files.  
	 * Example: "CoolTheme" = `CoolTheme.theme.css` and `CoolTheme.css`.
	 */
	fileName?: string;

	/**
	 * The available BetterDiscord META.
	 */
	meta: {
		/**
		 * The name of your theme.  
		 * 
		 * To separate the theme name and filename, set the `fileName` option.
		 * @example
		 * ```txt
		 * name = "CoolTheme"
		 *
		 * Will generate:
		 * - CoolTheme.theme.css --- This being the main file that users will download.
		 * - CoolTheme.css --- This being the file that will be imported.
		 * ```
		 */
		name: string;
		/**
		 * Your Discord Tag or whatever you call yourself.  
		 */
		author: string;
		/** The version of your theme */
		version: string;
		/** Discribe your theme in a short sentence. */
		description: string;
		/** The open-source location of your theme files. */
		source: string;
		/** The invite code to your Discord server. */
		invite?: string;
		/** Any donation link you wish to provide. */
		donate?: string;
		/** Your Patreon name. */
		patreon?: string;
		/** Your website. */
		website?: string;
		/** Your Discord unique ID. */
		authorId?: string;
	};

	/**
	 * The target path of the dist file.  
	 * 
	 * You can change either target or output by providing said objects.
	 * 
	 * @default
	 * ```json
	 * {
	 * 	"target": "src/dist.scss",
	 * 	"output": "dist"
	 * }
	 * ```
	 */
	dist?: {
		target?: string;
		output?: string;
	};

	/**
	 * The target path of the base file.  
	 * 
	 * You can change either target or output by providing said objects.
	 * 
	 * @default
	 * ```json
	 * {
	 * 	"target": "src/base.scss",
	 * 	"output": "dist"
	 * }
	 * ```
	 */
	base?: {
		target?: string;
		output?: string;
	};

	/**
	 * The target path of the dist file.  
	 * 
	 * You can change either target or output by providing said objects.  
	 * The `output` **MUST** be an absolute path, as shown in the default.
	 * 
	 * @default 
	 * ```json
	 * {
	 * 	"target": "src/dist.scss",
	 * 	"output": "path/to/BetterDiscord/themes"
	 * }
	 * ```
	 */
	dev?: {
		target?: string;
		output?: string;
	};

	/**
	 * Any addons that should be compiled separately from your theme files.  
	 * Example being Horizontal Server List and it's bottomhsl addon.
	 * 
	 * The first index is the target file while the 2nd index is the output file,  
	 * relative to your project directory.  
	 * 
	 * You **MUST** provide the full path to file, including the extension.  
	 * As the compiler will not auto name these for you.  
	 * 
	 * Example: `['src/addons/_mycooladdon.scss', 'dist/MyCoolAddon.css']`
	 */
	addons?: ([string, string])[];

	/**
	 * The `@import` url used in the .theme.css file.  
	 * If for some reason your GitHub name isn't in the `meta.name` or  
	 * you're building to a differnet diectory use this to change it.
	 * 
	 * Example: `https://discordstyles.github.io/Fluent/Fluent.css`
	 */
	baseImport?: string;
}
