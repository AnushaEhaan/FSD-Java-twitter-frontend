const stringUtils = {
	extractTrends: (text: string) => {
		return text
			.split(' ')
			.filter((word: string) => word.startsWith('#') && word.length > 1)
			.map((word: string) => word.slice(1));
	},
};

export default stringUtils;
