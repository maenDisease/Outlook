# bd-scss

Simple package to create themes for BetterDiscord using SCSS.

<br>

## Usage

Install the package with:

```bash
npm install bd-scss
# or
yarn add bd-scss
# or
pnpm add bd-scss
```

Then create a `bd-scss.config.js` file in the root of your project folder with the following:

```js
/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Cooltheme',
		author: 'Gibbu',
		version: '1.0.0',
		description: 'My cool theme',
		source: 'https://github.com/Gibbu/Cooltheme',
	},
};
```

And then use the `bd-scss` command followed by the script you wish to use.

```bash
bd-scss dev # will build to your BetterDiscord themes folder or if you've provided a path in the dev option.

bd-scss build # will build the necessary files to distribute your theme.
```

> **NOTE**: Make sure you have `"type": "module"` set in your `package.json`.

<br>

## Compiler API

| Property     | Type                 | Required | Description                                                                                                                                    |
| ------------ | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`       | Object               | true     | The BetterDiscord theme/plugin META. View all avaiable meta [HERE](https://github.com/BetterDiscord/BetterDiscord/wiki/Plugin-and-Theme-METAs) |
| `dev`        | Object               | false    | The target and output path of the dev file.                                                                                                    |
| `dist`       | Object               | false    | The target and output path of the dist file.                                                                                                   |
| `base`       | Object               | false    | The target and output path of the base file.                                                                                                   |
| `fileName`   | string               | false    | The name of the file to be compiled. This will default to your `meta.name` if this option is not provided.                                     |
| `addons`     | ([string, string])[] | false    | Any addons that should be compiled separately from your theme files.                                                                           |
| `baseImport` | string               | false    | The `@import` url used in the .theme.css file.                                                                                                 |

All `dev`, `dist`, and `base` objects contain a `target` and `output` properties, and are relative to the project directory.  
Execpt of the `dev.output`, that is an absolute path allowing you to change the location of the BetterDiscord themes folder.

> Example: `C:\Users\Gibbu\AppData\Roaming\BetterDiscord\themes`

<br>

## Examples

- [DiscordStyles/SoftX](https://github.com/DiscordStyles/SoftX)
- [DiscordStyles/Slate](https://github.com/DiscordStyles/Slate)

<br>

## License

See the [LICENSE](https://github.com/Gibbu/bd-scss/blob/main/LICENSE) file for license rights and limitations (MIT).
