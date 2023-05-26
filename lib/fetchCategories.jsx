import { baseUrl } from "@/utils/baseurl";

export default async function fetchCategories() {
	const res = await fetch(`${baseUrl}/category`);

	if (!res.ok) throw new Error("Failed to fetch categories");
	return res.json();
}
