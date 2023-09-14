export interface apiDefaults  {
	_id: string;
	__v: number
}


export 	interface Category {
		name: string
}
	
export interface Component   {
		name: string;
		html: string;
		css:string;
		javascript:string;
		react:string;
		size:string;
		category:string;
		center:string;
		
}
export interface ComponentResponse extends Component,apiDefaults {}
export interface CategoryResponse extends Category,apiDefaults {}