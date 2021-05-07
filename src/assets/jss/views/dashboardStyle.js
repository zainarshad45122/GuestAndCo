import { makeStyles } from '@material-ui/core/styles';

const dashboardStyle = makeStyles((theme) => ({
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 5),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2, 6),
		background: 'linear-gradient(to right, #ff0051, #ff0ca6)',
		color: 'black',
		maxHeight: '200px',
		marginLeft: '50px',
	},
	sale: {
		flexGrow: 1,
		padding: theme.spacing(2, 20),
		marginLeft: '30px',
		marginTop: '36px',
		color: '#595959',
	},
	properties: {
		flexGrow: 1,
		padding: theme.spacing(15, 15),

		marginTop: '36px',
		color: '#595959',
	},
	table: {
		minWidth: 700,
	},
	fontSize15: {
		fontSize: '15px',
	},
	fontSize12: {
		fontSize: '12px',
	},
	marginTop20: {
		marginTop: '20px',
	},
	marginTopN20: {
		marginTop: '-20px',
	},
	marginTop10: {
		marginTop: '10px',
	},
	marginTopN10: {
		marginTop: '-10px',
	},
	marginTop50: {
		marginTop: '50px',
	},
	marginTopN50: {
		marginTop: '-50px',
	},
	marginBottom10: {
		marginBottom: '10px',
	},
	marginBottom20: {
		marginBottom: '20px',
	},

	marginBottom30: {
		marginBottom: '30px',
	},
	marginLeft10: {
		marginLeft: '10px',
	},
	marginLeft5Per: {
		marginLeft: '5%',
	},
	marginLeftN20: {
		marginLeft: '-20px',
	},
	marginLeftN45Per: {
		marginLeft: '-45%',
	},
	marginRight10: {
		marginRight: '10px',
	},
	marginRight20: {
		marginRight: '20px',
	},
	backgroundColorWhite: {
		backgroundColor: '#fff',
	},
	card: {
		borderRadius: '10px',
		maxWidth: '98%',
		color: 'rgb(0,0,0,0.5)',
	},
	avatar: {
		height: '120px',
		borderRadius: '50%',
	},
	number: {
		marginTop: '70px',

		justifyContent: 'center',
		marginLeft: '30%',
		color: 'black',
	},

	info: {
		flexGrow: 1,
		padding: theme.spacing(15, 15),

		marginTop: '1000px',
		color: '#595959',
	},

	rootCard: {
		minWidth: 200,
		border: 'none',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	root: {
		borderRadius: '50%',
		paddingTop: '15px',
		paddingBottom: '15px',
	},
	facilitesSection: {
		backgroundColor: '#fbfbfb',
		padding: '28px',
	},
	colorWhite : {
		color:'white'
	}
}));

export default dashboardStyle;
