import { Category, CategoryResponse } from "@/types/apiTypes";
import { API_URL} from "@/utils/URL";

export default async function fetchCategories(): Promise<Array<CategoryResponse>>{

	const res = await fetch(`${API_URL}/category`);
	
	if (!res.ok) throw new Error("Failed to fetch categories");
	return res.json();
}
