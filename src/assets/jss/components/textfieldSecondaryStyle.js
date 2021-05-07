const textfieldSecondaryStyle = {
    root: {
		'& .MuiOutlinedInput-root': {
			borderRadius: `30px`,
			border: 'white',
		
			padding: '3px',
			
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
			color: 'white',
			fontSize: 13,
			fontWeight: 400,
		},
		color: 'white',
		fontSize: 13,
		opacity: '1 !important',
		fontWeight: 400,
	},
	floatingLabelFocusStyle: {
        color: "#fff"
    }
  };

  export default textfieldSecondaryStyle;