export const capitalize = (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
export const unSlugify = (word) => capitalize(word.split("-").join(" "));
export const CapsWord = (word) =>
	word
		.split("-")
		.map((splittedWord) => capitalize(splittedWord))
		.join(" ");
export const slugify = (word) => word.toLowerCase().split(" ").join("-");
