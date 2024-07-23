const Spinner = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
			width='200'
			height='200'
			style={{
				shapeRendering: 'auto',
				display: 'block',
				background: 'rgb(255, 255, 255)',
				margin: '0 auto',
			}}
		>
			<g>
				<circle r='20' fill='#9f0114' cy='50' cx='30'>
					<animate
						begin='-0.5s'
						values='30;70;30'
						keyTimes='0;0.5;1'
						dur='1s'
						repeatCount='indefinite'
						attributeName='cx'
					></animate>
				</circle>
				<circle r='20' fill='#5c5c5c' cy='50' cx='70'>
					<animate
						begin='0s'
						values='30;70;30'
						keyTimes='0;0.5;1'
						dur='1s'
						repeatCount='indefinite'
						attributeName='cx'
					></animate>
				</circle>
				<circle r='20' fill='#9f0114' cy='50' cx='30'>
					<animate
						begin='-0.5s'
						values='30;70;30'
						keyTimes='0;0.5;1'
						dur='1s'
						repeatCount='indefinite'
						attributeName='cx'
					></animate>
					<animate
						repeatCount='indefinite'
						dur='1s'
						keyTimes='0;0.499;0.5;1'
						calcMode='discrete'
						values='0;0;1;1'
						attributeName='fill-opacity'
					></animate>
				</circle>
				<g></g>
			</g>
		</svg>
	);
};

export default Spinner;
