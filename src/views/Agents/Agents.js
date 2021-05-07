import React from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
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
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import dashboardStyle from '../../assets/jss/views/dashboardStyle'
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




const Agents = () => {
	const classes = useStyles();
	

	return (
		<div>
			<Drawer />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={1} direction="row">
					<Grid item>
						<Typography paragraph className={classes.fontSize15}>
							Agent Profile &nbsp;
						</Typography>
					</Grid>
				</Grid>

				<Grid container justify="center" spacing={1} direction="row" className={classes.backgroundColorWhite}>
					<Grid item xs={11} md={11} lg={11} className={classes.marginTop20}>
						<Grid container direction="row" style={{ backgroundColor: '#fff', marginBottom: '30px' }}>
							<Grid item md={10}>
								<TextField
									className={classes.margin}
									id="input-with-icon-textfield"
                                    label="Search"
                                    variant="outlined"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon/>
											</InputAdornment>
										),
									}}
								/>
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

export default Agents;
