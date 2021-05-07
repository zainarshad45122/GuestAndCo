import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import textfieldSecondaryStyle from '../../assets/jss/components/textfieldSecondaryStyle';

const useStyles = makeStyles(textfieldSecondaryStyle);

const TextFieldTertiary = (props) => {
	const classes = useStyles();
	const { name, type, label, value } = props;

	return (
		<span>
			<p style={{ color: 'black' }}>
				{label}
			</p>
			<TextField
				name={name}
				placeholder={name}
				type={type}
				variant="outlined"
				defaultValue={value}
				fullWidth={true}
			/>
		</span>
	);
};

export default TextFieldTertiary;
