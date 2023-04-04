#!/usr/bin/env node

import sade from 'sade';
import chokidar from 'chokidar';

import compile from './compiler.js';
import { getConfig, getPath } from './utils.js';
import { DEFAULTS } from './defaults.js';
import log from './log.js';

const config = await getConfig();

const prog = sade('bd-scss');

prog
	.command('build')
	.describe('Compiles the `dist` and `base` config objects.')
	.action(async () => {
		log.info(`Running ${log.code('build')} script...`);

		try {
			// Bullds the .theme.css file for end users to download and install.
			await compile({
				target: getPath(config?.dist?.target || DEFAULTS.dist.target),
				output: getPath(config?.dist?.output || DEFAULTS.dist.output),
				mode: 'dist'
			});

			// Builds the "base" .css file to be @import'd
			await compile({
				target: getPath(config?.base?.target || DEFAULTS.base.target),
				output: getPath(config?.base?.output || DEFAULTS.base.output)
			});
		} catch (err) {
			log.error(err);
		}

		// Builds any addons
		if (config?.addons && Array.isArray(config?.addons) && config?.addons.length > 0) {
			config?.addons.forEach(async (addon) => {
				try {
					await compile({
						target: getPath(addon[0]),
						output: getPath(addon[1]),
						mode: 'addon'
					});
				} catch (err) {
					log.error(err);
				}
			});
		}

		log.success('Built all files.');
	});

prog
	.command('dev')
	.describe('Watch the SRC folder for changes and autocompile them to the BetterDiscord themes folder.')
	.action(async () => {
		chokidar
			.watch('src', { usePolling: true })
			.on('ready', () => {
				log.info(`\nWatching: ${log.code('src')} folder.` + `\nOutput: ${log.code(config?.dev?.output || DEFAULTS.dev.output)}\n`, 'DEV');
			})
			.on('change', async () => {
				try {
					await compile({
						target: getPath(config?.dev?.target || DEFAULTS.dev.target),
						output: getPath(config?.dev?.output || DEFAULTS.dev.output),
						mode: 'dev'
					});
				} catch (err) {
					log.error(err);
				}
			});
	});

prog.parse(process.argv);
