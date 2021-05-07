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
import WifiIcon from '@material-ui/icons/Wifi';
import TvIcon from '@material-ui/icons/Tv';
import ParkingIcon from '@material-ui/icons/LocalParking';
import PoolIcon from '@material-ui/icons/Pool';
import ElevatorIcon from '@material-ui/icons/ImportExport';
import KitchenIcon from '@material-ui/icons/Kitchen';
import DryerIcon from '@material-ui/icons/LocalLaundryService';
import GymIcon from '@material-ui/icons/FitnessCenter';
import WasherIcon from '@material-ui/icons/Album';
import IronIcon from '@material-ui/icons/CallToAction';
import LocationIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import BedRoomIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import BathRoomIcon from '@material-ui/icons/Bathtub';
import CarIcon from '@material-ui/icons/DriveEta';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import property1 from '../../../assets/images/p2.jpg';
import property2 from '../../../assets/images/property1.jpg';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const useStyles = dashboardStyle;

const PropertyDetail = () => {
	const classes = useStyles();

	var items = [
		{
			src: property2,
		},
		{
			src: property2,
		},
	];

	function Item(props) {
		return (
			<span>
				<img src={props.item.src} style={{ width: '90%', height: '50%' }} />
			</span>
		);
	}

	return (
		<div>
			<Drawer />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={1} direction="row" className={classes.marginTop20}>
					<Grid item>
						<Typography paragraph className={`${classes.fontSize15} ${classes.colorWhite}`}>
							Property Detail &nbsp;
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={4} direction="row" className={`${classes.backgroundColorWhite}`}>
					<Grid item xs={12} sm={12} md={5} lg={6} style={{ marginTop: '20px', marginLeft: '15px' }}>
						<Carousel>
							{items.map((item, i) => (
								<Item key={i} item={item} />
							))}
						</Carousel>
						<Typography variant="h6">
							<b>Amenities</b>
						</Typography>
						<Grid container direction="row">
							<Grid item lg={6}>
								<List>
									<ListItem>
										<WifiIcon />
										<Typography className={classes.marginLeft5Per}> Wifi</Typography>
									</ListItem>
									<ListItem>
										<TvIcon />
										<Typography className={classes.marginLeft5Per}> Cable TV</Typography>
									</ListItem>
									<ListItem>
										<ParkingIcon />
										<Typography className={classes.marginLeft5Per}>
											{' '}
											Free Parking on premises
										</Typography>
									</ListItem>
									<ListItem>
										<IronIcon />
										<Typography className={classes.marginLeft5Per}> Iron</Typography>
									</ListItem>
									<ListItem>
										<PoolIcon />
										<Typography className={classes.marginLeft5Per}> Pool</Typography>
									</ListItem>
								</List>
							</Grid>
							<Grid item lg={6}>
								<List>
									<ListItem>
										<ElevatorIcon />
										<Typography className={classes.marginLeft5Per}> Elevator</Typography>
									</ListItem>
									<ListItem>
										<KitchenIcon />
										<Typography className={classes.marginLeft5Per}> Kitchen</Typography>
									</ListItem>
									<ListItem>
										<DryerIcon />
										<Typography className={classes.marginLeft5Per}> Dryer</Typography>
									</ListItem>
									<ListItem>
										<GymIcon />
										<Typography className={classes.marginLeft5Per}> Gym</Typography>
									</ListItem>
									<ListItem>
										<WasherIcon />
										<Typography className={classes.marginLeft5Per}> Washer</Typography>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} sm={12} md={5} lg={5} style={{ marginTop: '20px' }}>
						<Typography variant="h6" className={classes.marginBottom20}>
							<b>4BHK Alexander Court,New York</b>
						</Typography>
						<ListItem className={classes.marginLeftN20}>
							<LocationIcon color="secondary" />
							<Typography className={classes.fontSize12}>245 E 20th St, New York, NY 201609</Typography>
						</ListItem>
						<Typography className={`${classes.fontSize12} ${classes.marginTop20}`}>
							Enjoy a perfect stay in the heart of Johor Bahru at RentRadise Kobe Suite, a condo unit
							within walking distance to all major attractions and night life in JB. Book this unit now
							and explore everything that JB has to offer! Points of interest nearby.
							<br /> Fully furnish stylist design one bedroom suite that can comfortably fit up to 5
							guests. Equipped with high quality king size bed and a queen size sofa bed at living hall.
							<br />
							Toiletries such as body, hair shampoo and towel will be provided, just bring your clothes
							and enjoy the stay. One free indoor car park provided, car access card will be given upon
							check in.
						</Typography>

						<Hidden mdDown>
							<ListItem
								className={`${classes.marginTop10}`}
								style={{ backgroundColor: '#fbfbfb', padding: '28px' }}
							>
								<PersonIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp;4 guests
								</Typography>
								<BedRoomIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp; 2 bedrooms
								</Typography>
								<BathRoomIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp;2 bathrooms
								</Typography>
								<CarIcon color="secondary" />
								<Typography className={classes.fontSize12}>&nbsp;1 parking</Typography>
							</ListItem>
						</Hidden>

						<Hidden lgUp>
							<Box className={`${classes.marginTop10} ${classes.facilitesSection}`}>
								<PersonIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp;4 guests
								</Typography>
								<BedRoomIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp; 2 bedrooms
								</Typography>
								<BathRoomIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp;2 bathrooms
								</Typography>
								<CarIcon color="secondary" />
								<Typography className={`${classes.fontSize12} ${classes.marginRight20}`}>
									&nbsp;1 parking
								</Typography>
							</Box>
						</Hidden>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default PropertyDetail;
