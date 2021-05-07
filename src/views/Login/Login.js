import React from 'react';
import Button from '../../components/CustomButtons/Button';
import TextField from '../../components/CustomInput/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Logo from '../../assets/Capture.PNG';
import Box from '@material-ui/core/Box';
import loginStyle from '../../assets/jss/views/loginStyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(loginStyle);

const Login = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				className={classes.margin}
				container
				align="center"
				justify="center"
				alignItems="center"
				spacing={2}
				direction="row"
			>
				<Grid item lg={4}>
					<img src={Logo} height="130" alt="Company Logo" />
				</Grid>
			</Grid>
			<Grid
				className={classes.margin}
				container
				align="center"
				justify="center"
				alignItems="center"
				spacing={2}
				direction="row"
			>
				<Grid item lg={3} spacing={6}>
					<Box className={classes.inputsMargin}>
						<TextField name="Username" type="text" />
					</Box>
					<Box className={classes.inputsMargin}>
						<TextField name="Password" type="password" />
					</Box>
					<Box className={classes.margin}>
						<Button text="Login"  />

					</Box>
					<Box className={classes.margin}>
						<Link className={classes.link} href="#">
							Sign up Now!
						</Link>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
