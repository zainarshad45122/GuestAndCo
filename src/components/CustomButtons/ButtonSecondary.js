import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import buttonSecondaryStyle from '../../assets/jss/components/buttonSecondaryStyle';
const useStyles = makeStyles(buttonSecondaryStyle);

const ButtonSecondary = (props) => {
	const classes = useStyles();
	const { text } = props;
	return (
		<div>
			<Button
				fullWidth={true}
				size="small"
				className={classes.root}
				disableElevation
				color="primary"
				variant="contained"
			>
				<Typography className={classes.text}>
					{text}
				</Typography>
			</Button>
		</div>
	);
};

export default ButtonSecondary;
