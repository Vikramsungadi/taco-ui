import { API_URL, SITE_URL } from "@/utils/URL";

export default async function fetchCategories() {
	const res = await fetch(`${API_URL}/category`);

	if (!res.ok) throw new Error("Failed to fetch categories");
	return res.json();
}
