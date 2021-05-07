import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import buttonStyle from '../../assets/jss/components/buttonStyle';
import AddCircle from '@material-ui/icons/AddCircle';
const useStyles = makeStyles(buttonStyle);

const RegularButton = (props) => {
	const classes = useStyles();
	const { text , pad } = props;
	let icon = '';
	if (text === 'Add Property') {
		icon = <AddCircle />;
	}
	return (
		<div>
			<Button
				fullWidth={true}
				size="small"
				className={classes.root}
				disableElevation
				color="primary"
				variant="contained"
				style= {{ paddingLeft : pad, paddingRight: pad }}
			>
				{icon}
		&nbsp;
				<Typography className={classes.text}>
				 <b> {text}</b>
				</Typography>
			</Button>
		</div>
	);
};

export default RegularButton;
