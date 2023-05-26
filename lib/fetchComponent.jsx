import { API_URL, SITE_URL } from "@/utils/URL";
import axios from "axios";

export async function fetchComponent(id) {
	const data = await axios.get(`${API_URL}/component/${id}`);
	return data.data[0];
}
export async function fetchComponentsByFilter(queryObj) {
	let queryString = "";
	Object.entries(queryObj).forEach(([name, value]) => {
		queryString += `&${name}=${value?.toUpperCase()}`;
	});
	queryString = queryString.substring(1);

	const data = await axios.get(`${API_URL}/component/?${queryString}`);
	return data.data;
}

export async function fetchAllComponents() {
	const data = await axios.get(`${API_URL}/component/`);

	return data.data;
}

export async function fetchFilteredComponents() {
	const data = await axios.get(`${API_URL}/component/`);
	return data.data;
}
