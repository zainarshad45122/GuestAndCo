import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import textfieldStyle from '../../assets/jss/components/textfieldStyle'

const useStyles = makeStyles(textfieldStyle);

const RegularTextField = (props) => {
	const classes = useStyles();
	const { name, type } = props;
	let icon = '';
	if (name === 'Username') {
		icon = <AccountCircle />;
	}
	if (name === 'Password') {
		icon = <Lock />;
	}
	return (
		<div>
			<TextField
				className={classes.root}
				id="outlined-search"
				size="small"
				name={name}
				placeholder={name}
				type={type}
				variant="outlined"
				fullWidth={true}
				InputProps={{
					startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
					classes: {
						input: classes.input,
						notchedOutline: classes.notchedOutline,
					},
				}}
			/>
		</div>
	);
};

export default RegularTextField;
