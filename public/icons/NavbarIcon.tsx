const NavbarIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='aspect-square w-6'
			width='44'
			height='44'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<rect x='4' y='4' width='16' height='16' rx='2' /> <line x1='4' y1='9' x2='20' y2='9' />
		</svg>
	);
};

export default NavbarIcon;
