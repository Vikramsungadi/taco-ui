import type { Category, Component, ComponentResponse, apiDefaults } from "@/types/apiTypes";
import { API_URL, } from "@/utils/URL";
import axios from "axios";

export async function fetchComponent(id:string) {
	const data = await axios.get(`${API_URL}/component/${id}`);
	return data.data[0];
}


export async function fetchComponentsByFilter(queryObj: {category:string}): Promise<Array<ComponentResponse>> {
	let queryString = "";
	Object.entries(queryObj).forEach(([name, value]) => {
		queryString += `&${name}=${value?.toUpperCase()}`;
	});
	queryString = queryString.substring(1);

	const data = await axios.get(`${API_URL}/component/?${queryString}`);
	return data.data;
}

export async function fetchAllComponents(): Promise<Array<ComponentResponse>> {
	const data = await axios.get(`${API_URL}/component/`);

	return data.data;
}

export async function fetchFilteredComponents() {
	const data = await axios.get(`${API_URL}/component/`);
	return data.data;
}
