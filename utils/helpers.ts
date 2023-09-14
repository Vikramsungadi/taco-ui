export const capitalize = (word: string) =>
	word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();

export const unSlugify = (word: string) => capitalize(word.split("-").join(" "));

export const CapsWord = (word: string) =>
	word
		.split("-")
		.map((splittedWord) => capitalize(splittedWord))
		.join(" ");

export const slugify = (word: string) => word.toLowerCase().split(" ").join("-");
