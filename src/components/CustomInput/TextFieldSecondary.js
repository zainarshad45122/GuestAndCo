import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import textfieldSecondaryStyle from '../../assets/jss/components/textfieldSecondaryStyle';

const useStyles = makeStyles(textfieldSecondaryStyle);

const TextFieldSecondary = (props) => {
	const classes = useStyles();
	const { name, type, label, value } = props;
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
				defaultValue={value}
				label={label}
				InputProps={{
					startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
					classes: {
						input: classes.input,
						notchedOutline: classes.notchedOutline,
					},
				}}
				InputLabelProps={{
					className: classes.floatingLabelFocusStyle,
				}}
			/>
		</div>
	);
};

export default TextFieldSecondary;
