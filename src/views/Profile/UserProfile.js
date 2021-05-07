import React from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles, } from '@material-ui/core/styles';
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
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AvatarImage from '../../assets/images/avatar.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import dashboardStyle from '../../assets/jss/views/dashboardStyle';

const useStyles = dashboardStyle;

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

const UserProfile = () => {
	const classes = useStyles();
	const flexContainer = {
		display: 'flex',
		flexDirection: 'row',
		padding: 8,
	};

	return (
		<div>
			<Drawer />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography paragraph className={`${classes.fontSize15} ${classes.colorWhite}`}>
					Agent Profile &nbsp;
				</Typography>
				<Grid container spacing={4} direction="row">
					<Grid item xs={12} sm={6} md={6}>
						<Card className={classes.rootCard}>
							<CardContent>
								<List style={flexContainer}>
									<ListItem>
										<img className={classes.avatar} alt="profile" src={AvatarImage} />
									</ListItem>
									<Hidden mdDown>
										<ListItem className={classes.marginLeftN45Per}>
											<div>
												<Typography variant="h6">
													<b>Michael Deo</b>
												</Typography>
												<Typography className={classes.fontSize12}>Real State Agent</Typography>
												<Typography className={`${classes.fontSize12} ${classes.marginTop10}`}>
													795 Folson Avenue, Suit 600
												</Typography>
												<Typography className={`${classes.fontSize12} `}>
													795 Folson Avenue, Suit 600
												</Typography>
												<List
													style={flexContainer}
													className={`${classes.fontSize12} ${classes.marginTop10} ${classes.marginLeftN20}`}
												>
													<CustomButton text={'Message'} pad={'25px'} />

													<Divider
														orientation="vertical"
														className={`${classes.marginTop10} ${classes.marginBottom10}`}
														flexItem
														style={{ marginLeft: '10px' }}
													/>
													<ListItem>
														<FacebookIcon />
														&nbsp;
														<TwitterIcon />
														&nbsp;
														<InstagramIcon />
													</ListItem>
												</List>
											</div>
										</ListItem>
									</Hidden>
								</List>
								<Hidden lgUp>
									<ListItem >
										<div>
											<Typography variant="h6">
												<b>Michael Deo</b>
											</Typography>
											<Typography className={classes.fontSize12}>Real State Agent</Typography>
											<Typography
												className={`${classes.fontSize12} ${classes.marginTop10}  ${classes.marginBottom10}`}
											>
												795 Folson Avenue, Suit 600
											</Typography>
											<CustomButton text={'Message'} pad={'25px'} />
											<Divider
												orientation="vertical"
												className={`${classes.marginTop10} ${classes.marginBottom10}`}
												flexItem
											/>
											&nbsp;
											<FacebookIcon />
											&nbsp;
											<TwitterIcon />
											&nbsp;
											<InstagramIcon />
										</div>
									</ListItem>
								</Hidden>
							</CardContent>
						</Card>
					</Grid>
					<Hidden mdDown>
					<Grid item xs={12} sm={6} md={6}>
						<Card className={classes.rootCard}>
							<CardContent>
								<List style={flexContainer}>
								
										<ListItem>
											<div>
												<Typography paragraph>Daily Sales</Typography>
												<p className={classes.marginTopN20}>
													Check out each column for more details
												</p>

												<Bar
													data={state}
													height={110}
													className={classes.marginTopN20}
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
											</div>
										</ListItem>
										<Divider
											orientation="vertical"
											className={`${classes.marginTop10} ${classes.marginBottom10}`}
											flexItem
										/>
										<ListItem>
											<div>
												<Typography variant="h4">
													<b>$4,658</b>
												</Typography>
												<Typography paragraph color="secondary">
													<b>Total Sales</b>
												</Typography>
											</div>
										</ListItem>
									
								</List>
								
							</CardContent>
						</Card>
					</Grid>

					</Hidden>
				</Grid>

				<Grid container spacing={1} direction="row" style={{ color: '#595959', marginTop: '4%' }}>
					<Grid item sm={12} md={10} lg={12}>
						<Grid container direction="row" className={`${classes.backgroundColorWhite}`}>
							<Grid item>
								<Box md={6} p={5}>
									<Typography className={classes.fontSize15}>
										<b>Email Address</b>
									</Typography>
									<Typography className={classes.fontSize15}>info@example.com</Typography>
									<Typography className={`${classes.fontSize15} ${classes.marginTop20}`}>
										<b>Phone Number</b>
									</Typography>
									<Typography className={classes.fontSize15}>+202--555-9191</Typography>
								</Box>
							</Grid>
							<Grid item>
								<Box md={6} p={5}>
									<Typography className={classes.fontSize15}>
										<b>Mobile Number</b>
									</Typography>
									<Typography className={classes.fontSize15}>+202--555-2828</Typography>
									<Typography className={`${classes.fontSize15} ${classes.marginTop20}`}>
										<b>Date of Birth</b>
									</Typography>
									<Typography className={classes.fontSize15}>Oct 22th, 1990</Typography>
								</Box>
							</Grid>
							<Divider
								orientation="vertical"
								className={`${classes.marginTop10} ${classes.marginBottom10}`}
								flexItem
							/>
							<Grid item>
								<Box p={5}>
									<Typography className={classes.fontSize15}>
										<b>About Michael</b>
									</Typography>
									<Typography className={classes.fontSize15}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										<br /> sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua.
										<br /> sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua.
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					container
					justify="center"
					spacing={1}
					direction="row"
					style={{ color: 'black', marginTop: '4%', marginLeft: '2px' }}
					className={classes.backgroundColorWhite}
				>
					<Grid item xs={12} md={12} lg={12} className={classes.marginTop20}>
						<Grid container direction="row" style={{ backgroundColor: '#fff', marginBottom: '30px' }}>
							<Grid item md={12}>
								<Box md={6} pl={5}>
									<Typography variant="h6">Properties Rented</Typography>
								</Box>
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

export default UserProfile;
