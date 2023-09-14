
function Logo(props:React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#prefix__clip0_25_2)' filter='url(#prefix__filter0_f_25_2)'>
				<path fill='#B3DAF0' d='M5 79.802L399.564-148l729.477 1368.497-394.563 227.801z' />
				<path fill='#B5F4E1' d='M506 50.093L880.284-166l678.637 1273.12-374.284 216.094z' />
				<path d='M907-117.279L1294.5-341l683.33 1281.938-387.49 223.722L907-117.279z' fill='#FCB9E9' fillOpacity={0.61} />
				<path fill='#F3D8FD' d='M-348.356 326.686L43.076 100.692 766.152 1457.18 374.72 1683.172z' />
			</g>
			<defs>
				<clipPath id='prefix__clip0_25_2'>
					<path fill='#fff' transform='translate(50 50)' d='M0 0h1440v1024H0z' />
				</clipPath>
				<filter
					id='prefix__filter0_f_25_2'
					x={0}
					y={0}
					className='h-full w-full'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={0} result='effect1_foregroundBlur_25_2' />
				</filter>
			</defs>
		</svg>
	);
}

export default Logo;


