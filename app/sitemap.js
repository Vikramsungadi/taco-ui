import { SITE_URL } from "@/utils/URL";

export default function sitemap() {
	return [
		{
			url: `${SITE_URL}`,
			lastModified: new Date(),
		},
		{
			url: `${SITE_URL}/components`,
			lastModified: new Date(),
		},
	];
}
