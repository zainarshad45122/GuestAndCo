const textfieldStyle = {
    root: {
		'& .MuiOutlinedInput-root': {
			borderRadius: `30px`,
			border: 'white',
			backgroundColor : 'white',
			padding: '5px;',
			paddingLeft: '33px',
			'&hover': {
				borderColor: '#F1F3F7',
			},
		},
	},
	notchedOutline: {
		borderWidth: '0.1px',
		borderColor: 'rgba(255, 255, 255, 0.5)',
		'&hover': {
			borderColor: '#F1F3F7',
		},
	},
	input: {
		'&::placeholder': {
			opacity: '1 !important',
			color: 'black',
			fontSize: 13,
			fontWeight: 400,
		},
		color: 'black',
		fontSize: 13,
		opacity: '1 !important',
		fontWeight: 400,
	},
	
  };

  export default textfieldStyle;