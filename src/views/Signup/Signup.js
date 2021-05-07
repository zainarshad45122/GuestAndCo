import React from 'react';
import Button from '../../components/CustomButtons/Button';
import TextField from '../../components/CustomInput/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Camera from '@material-ui/icons/CameraAlt';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/Capture.PNG';
import signupStyle from '../../assets/jss/views/signupStyle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(signupStyle);

const Signup = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container align="center" justify="center" alignItems="center" spacing={2} direction="row">
				<Grid item lg={12}>
					<img src={Logo} height="130" alt="Company Logo" />
				</Grid>

				<Grid item lg={12}></Grid>
			</Grid>
			<Grid container align="center" justify="center" alignItems="center" spacing={2} direction="row">
				<Grid item lg={4}>
					<Box className={classes.box} boxShadow={1} bgcolor="background.paper">
						<IconButton  color="secondary" className={classes.boxInside}>
							<Camera className ={classes.cameraIcon} />
						</IconButton>
						<p className= {classes.marginBottom}>Select Avatar</p>
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Name" type="text" />
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Email" text="email" />
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Mobile" type="text" />
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Birth Date" type="text" />
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Country" type="text"/>
					</Box>
					<Box className={classes.signupButton}>
						<Button text="SIGN UP" />
					</Box>
					<Box className={classes.margin}>
						Already signed up <Link className={classes.link} href="#">
							Login Now!
						</Link>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Signup;
