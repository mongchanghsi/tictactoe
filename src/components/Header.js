import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0 30px 0',
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '60px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '80px'
    },
  }
}))

export default function Header(){
  const classes = useStyles();
  return <Typography className={classes.root} display='block' variant='h1'> Tic Tac Toe </Typography>
}
