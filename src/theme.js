import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff',
			contrastText: '#000000',
		},
		secondary: {
			main: '#ff0058',
			contrastText: '#fff',
		},

		background: {
			default: '#F1F3F7',
		},
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		fontWeightRegular: 400,
		p: {
			fontWeight: 600,
		},
	},
});

export default theme;
