import fetchCategories from "@/lib/fetchCategories";
import { Category } from "@/types/apiTypes";
import { SITE_URL } from "@/utils/URL";

export default async function sitemap() {
	const categories:Category[] = await fetchCategories();
	const sitemapUrls = categories.map((category) => ({
		url: `${SITE_URL}/components/${category.name.toLowerCase()}`,
		lastModified: new Date(),
	}));

	return [
		{
			url: `${SITE_URL}`,
			lastModified: new Date(),
		},
		{
			url: `${SITE_URL}/components`,
			lastModified: new Date(),
		},
		...sitemapUrls,
	];
}
