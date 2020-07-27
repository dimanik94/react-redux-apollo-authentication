export const sleep = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const thousandsSeparator = (value: number): string =>
	value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
