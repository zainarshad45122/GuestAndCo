import React from 'react';
import Drawer from '../../components/Drawer/Drawer';
import ButtonSecondary from '../../components/CustomButtons/ButtonSecondary';
import TextFieldSecondary from '../../components/CustomInput/TextFieldSecondary';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CustomButton from '../../components/CustomButtons/Button';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
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
		marginLeft:'50px',
		background: 'linear-gradient(to right, #ff0051, #ff0ca6)',
		color: 'white',
		minHeight: '200px',
		
	},
	sale: {
		flexGrow: 1,
		padding: theme.spacing(2, 6),
		marginLeft:'50px',
		marginTop: '36px',
		color: '#595959',
	},
	properties: {
		flexGrow: 1,
		padding: theme.spacing(2, 6),
		marginLeft:'50px',
		marginTop: '36px',
		color: '#595959',
		fontFamily: "'Montserrat', sans-serif",
		fontWeightRegular: 400,
		p: {
			fontWeight: 600,
		},
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
	backgroundColorWhite: {
		backgroundColor: '#fff',
	},
}));

const StyledTableCell = withStyles((theme) => ({
	head: {
		color: 'lightgrey',
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Beautiful House for Sale', 'Chicago', '4 BHK', '2,000 ft2', 'Maria Barlow'),
	createData('Luxury Apartment', 'California', '3 BHK', '4,000 ft2', 'Maria Barlow'),
	createData('Bunglow', 'Chicago', '4 BHK', '2,000 ft2', 'Maria Barlow'),
	createData('Studio Apartment', 'California', '3 BHK', '4,000 ft2', 'Maria Barlow'),
	createData('Beach house', 'Chicago', '4 BHK', '2,000 ft2', 'Maria Barlow'),
	createData('Room', 'California', '3 BHK', '4,000 ft2', 'Maria Barlow'),
];
const state = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
	datasets: [
		{
			label: 'Sales',
			backgroundColor: 'rgba(75,192,192,1)',

			borderWidth: 2,
			data: [65, 59, 60, 61, 65, 70, 60, 65, 70],
		},
	],
};

const pieChartState = {
	labels: ['January', 'February', 'March'],
	datasets: [
		{
			label: 'Rainfall',
			backgroundColor: ['yellow', 'skyblue', 'lightpurple'],
			hoverBackgroundColor: ['#501800', '#4B5000', '#175000'],
			data: [65, 59, 80],
		},
	],
};

const Dashboard = () => {
	const classes = useStyles();
	return (
		<div>
			<Drawer />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={1} direction="row">
					<Grid item>
						<Typography paragraph className={classes.fontSize15}>
							Recent Bookings &nbsp;
						</Typography>
					</Grid>
					<Grid item>
						<Typography paragraph className={classes.fontSize12}>
							Online booking managment
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={1} direction="row">
					<Grid item>
						<TextFieldSecondary name="Booking Number" type="text" />
					</Grid>
					<Grid item>
						<TextFieldSecondary label="From" type="date" value="2017-05-24" />
					</Grid>
					<Grid item>
						<TextFieldSecondary label="To" type="date" value="2017-05-24" />
					</Grid>
					<Grid item lg={3} sm={12}>
						<ButtonSecondary text="SEARCH BOOKINGS" />
					</Grid>
				</Grid>
			</main>
			<main className={classes.sale}>
				<Grid container spacing={1} direction="row" className={classes.backgroundColorWhite}>
					<Grid item sm={12} md={4} lg={4}>
						<Box display="flex" p={1}>
							<Box flexGrow={1}>
								<h4>Member Profit</h4>
								<p className={classes.marginTopN20}>Average Weekly Profit</p>
							</Box>

							<Box p={1} className={classes.marginTop20} style={{ color: 'skyblue' }}>
								<b>+$17,800</b>
							</Box>
						</Box>
						<Divider variant="middle" />
						<Box display="flex" p={1}>
							<Box flexGrow={1}>
								<h4>Member Profit</h4>
								<p className={classes.marginTopN20}>Average Weekly Profit</p>
							</Box>

							<Box p={1} className={classes.marginTop20} style={{ color: 'darkred' }}>
								<b>+$17,800</b>
							</Box>
						</Box>
						<Divider variant="middle" />
						<Box display="flex">
							<Box flexGrow={1} p={1}>
								<h4>Member Profit</h4>
								<p className={classes.marginTopN20}>Average Weekly Profit</p>
							</Box>

							<Box p={1} className={classes.marginTop20} style={{ color: 'darkgreen' }}>
								<b>+$17,800</b>
							</Box>
						</Box>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Hidden only="xs">
						<Grid item xs={12} md={4} lg={4}>
							<Box flexGrow={1} style={{ marginLeft: '10px' }}>
								<h4>Daily Sales</h4>
								<p className={classes.marginTopN20}>Check out each column for more details</p>
							</Box>

							<Box flexGrow={1} className={classes.marginTopN50}>
								<Bar
									data={state}
									height={170}
									options={{
										title: {
											display: true,
											fontSize: 20,
										},
										scales: {
											xAxes: [
												{
													display: false,
												},
											],
											yAxes: [
												{
													display: false,
												},
											],
										},
									}}
								/>
							</Box>
						</Grid>
					</Hidden>

					<Divider orientation="vertical" flexItem />
					<Hidden only="xs">
						<Grid item xs={12} md={3} lg={3}>
							<Box flexGrow={1} className={classes.marginTop10}>
								<h4>Profit Share</h4>
								<p className={classes.marginTopN20}>Profit Share between customers</p>
							</Box>
							<Box flexGrow={1} className={classes.marginTopN50}>
								<Doughnut
									data={pieChartState}
									height={170}
									options={{
										title: {
											display: true,

											fontSize: 20,
										},
										legend: {
											display: true,
											position: 'right',
										},
									}}
								/>
							</Box>
						</Grid>
					</Hidden>
				</Grid>
			</main>
			<main className={classes.properties}>
				<Grid container justify="center" spacing={1} direction="row" className={classes.backgroundColorWhite}>
					<Grid item xs={11} md={11} lg={11} className={classes.marginTop20}>
						<Grid container direction="row" style={{ backgroundColor: '#fff', marginBottom: '30px' }}>
							<Grid item md={10}>
								<Hidden only="xs">
									<Typography variant="h6">Properties</Typography>
								</Hidden>
							</Grid>
							<Grid item md={2}>
								<CustomButton text="Add Property" />
							</Grid>
						</Grid>

						<Divider />
						<TableContainer style={{ marginTop: '40px' }} justify="center">
							<Table className={classes.table} aria-label="customized table">
								<TableHead>
									<TableRow>
										<StyledTableCell align="right">#</StyledTableCell>
										<StyledTableCell>PROPERTY</StyledTableCell>
										<StyledTableCell align="right">ADDRESS</StyledTableCell>
										<StyledTableCell align="right">BEDS</StyledTableCell>
										<StyledTableCell align="right">SQ FT</StyledTableCell>
										<StyledTableCell align="right">AGENT</StyledTableCell>
										<StyledTableCell align="right">STATUS</StyledTableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<StyledTableRow key={row.name}>
											<StyledTableCell align="right">1</StyledTableCell>
											<StyledTableCell component="th" scope="row">
												{row.name}
											</StyledTableCell>
											<StyledTableCell align="right">{row.calories}</StyledTableCell>
											<StyledTableCell align="right">{row.fat}</StyledTableCell>
											<StyledTableCell align="right">{row.carbs}</StyledTableCell>
											<StyledTableCell align="right">{row.protein}</StyledTableCell>
											<StyledTableCell align="right">
												<Button variant="outlined" color="secondary">
													Vacant
												</Button>
											</StyledTableCell>
											<StyledTableCell align="right">
												<EditIcon color="secondary" />
												<DeleteIcon color="secondary" />
											</StyledTableCell>
										</StyledTableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default Dashboard;
