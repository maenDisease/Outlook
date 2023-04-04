import chalk from 'chalk';

export default {
	success: (message: unknown | any) => {
		console.log(`${chalk.greenBright.bold('[SUCCESS]')} ${message}`);
	},
	warning: (message: unknown | any) => {
		console.log(`${chalk.yellowBright.bold('[WARNING]')} ${message}`);
	},
	error: (message: unknown | any) => {
		console.log(`\n${chalk.redBright.bold('[ERROR]')} ${message}\n`);
		process.exit(1);
	},
	info: (message: unknown | any, title?: string) => {
		console.log(`${chalk.blueBright.bold(`[${title || 'INFO'}]`)} ${message}`);
	},
	code: (message: unknown | any, char: string = '`') => {
		return chalk.yellow(`${char}` + message + `${char}`);
	}
};
