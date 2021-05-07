import React, { useState } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextFieldTertiary from '../../../components/CustomInput/TextFieldTertiary';
import dashboardStyle from '../../../assets/jss/views/dashboardStyle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MyLocationIcon from '@material-ui/icons/MyLocation';

const useStyles = dashboardStyle;

const RegisterProperty = () => {
	const classes = useStyles();
	const [bedrooms, setBedRooms] = useState(0);
	const [bathrooms, setBathRooms] = useState(0);

	const addBedRoom = (add) => {
		if (bedrooms === 0 && add < 0) {
			setBedRooms(0);
		} else {
			setBedRooms(bedrooms + add);
		}
	};

	const addBathRoom = (add) => {
		if (bathrooms === 0 && add < 0) {
			setBathRooms(0);
		} else {
			setBathRooms(bathrooms + add);
		}
	};

	return (
		<div>
			<Drawer />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={1} direction="row">
					<Grid item>
						<Typography paragraph className={`${classes.fontSize15} ${classes.colorWhite}`}>
							Register Property &nbsp;
						</Typography>
					</Grid>
				</Grid>
				<List className={classes.backgroundColorWhite}>
					<ListItem className={classes.marginBottom30}>
						<Grid container justify="center" spacing={4} direction="row">
							<Grid item xs={12} sm={12} md={5} lg={5}>
								<TextFieldTertiary label="Property Name" />
							</Grid>
							<Grid item md={2} lg={2}></Grid>
							<Grid item xs={12} sm={12} md={5} lg={5}>
								<TextFieldTertiary label="City" />
							</Grid>
						</Grid>
					</ListItem>

					<Divider />

					<ListItem className={`${classes.marginTop20} ${classes.marginBottom30}`}>
						<Grid container spacing={4} direction="row">
							<Grid item xs={12} md={5} lg={5}>
								<b>How many guests can your place accomodate?</b>
								<Typography className={classes.fontSize12}>
									Check that you have enough beds to accodmodate your guests comfortably
								</Typography>
							</Grid>
							<Grid item md={4} lg={4}></Grid>
							<Grid item xs={12} md={3} lg={3}>
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => addBedRoom(1)}
									className={`${classes.root} ${classes.marginRight10}`}
								>
									+
								</Button>
								{bedrooms}
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => addBedRoom(-1)}
									className={`${classes.root} ${classes.marginLeft10}`}
								>
									-
								</Button>
							</Grid>

							<Grid item xs={12} md={5} lg={5}>
								<Typography className={classes.fontSize12}>How many bedrooms can guest use</Typography>
								<TextFieldTertiary />
							</Grid>
						</Grid>
					</ListItem>
					<Divider />

					<ListItem className={`${classes.marginTop20} ${classes.marginBottom30}`}>
						<Grid container spacing={4} direction="row">
							<Grid item xs={12} md={5} lg={5}>
								<b>How many bathrooms can guest use?</b>
								<Typography className={classes.fontSize12}>
									Count bathrooms that don’t have a shower or bathtub as a half bathroom.
								</Typography>
							</Grid>
							<Grid item md={4} lg={4}></Grid>
							<Grid item xs={12} md={3} lg={3}>
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => addBathRoom(1)}
									className={`${classes.root} ${classes.marginRight10}`}
								>
									+
								</Button>
								{bathrooms}
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => addBathRoom(-1)}
									className={`${classes.root} ${classes.marginLeft10}`}
								>
									-
								</Button>
							</Grid>
						</Grid>
					</ListItem>
					<Divider />
					<ListItem className={`${classes.marginTop20} ${classes.marginBottom30}`}>
						<Grid container spacing={4} direction="row">
							<Grid item xs={12} md={5} lg={5}>
								<b>Where’s your place located?</b>
								<Typography className={classes.fontSize12}>
									Guests will only get your exact address once they’ve booked a reservation.
								</Typography>
							</Grid>
							<Grid item md={4} lg={4}></Grid>
							<Grid item xs={12} md={3} lg={3}>
								<Button variant="outlined" color="secondary">
									<MyLocationIcon />
									&nbsp; Use Current Location
								</Button>
							</Grid>
							<Grid item xs={12} sm={12} md={5} lg={5}>
								<TextFieldTertiary label="Country/Region" />
								<TextFieldTertiary label="Street Address" />
								<Grid container spacing={4} direction="row">
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextFieldTertiary label="Apt, suite. (optional)" />
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextFieldTertiary label="Zip code" />
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextFieldTertiary label="City" />
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextFieldTertiary label="State" />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12} md={5} lg={5}></Grid>
						</Grid>
					</ListItem>
				</List>
			</main>
		</div>
	);
};

export default RegisterProperty;
