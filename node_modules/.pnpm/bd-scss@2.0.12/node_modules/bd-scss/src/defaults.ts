import { getConfig, getDataFolder } from './utils.js';

const config = await getConfig();
const dataFolder = getDataFolder();

export const DEFAULTS = {
	dev: {
		target: 'src/dev.scss',
		output: dataFolder
	},
	dist: {
		target: 'src/dist.scss',
		output: 'dist'
	},
	base: {
		target: 'src/base.scss',
		output: 'dist'
	},
	baseImport: `https://${config?.meta.author.toLowerCase()}.github.io/${config?.meta.name}/${config?.meta.name}.css`
};
