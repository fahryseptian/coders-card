import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, makeStyles } from '@material-ui/core';
export type TextFieldProps = MuiTextFieldProps;

const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiFormLabel-root': {
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
    },
    '& .label.Mui-focused': {
      fontSize: '12px',
      color: theme.palette.text.secondary,
    },
    '& .MuiFilledInput-root': {
      borderRadius: '8px',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.field,
    },
    '& .MuiFilledInput-underline:before': { borderBottom: 'none' },
    '& .MuiFilledInput-underline:after': { borderBottom: 'none' },
  },
}));

export const TextField = (props: TextFieldProps): JSX.Element => {
  const classes = useStyles();
  return <MuiTextField className={classes.textField} {...props} />;
};
