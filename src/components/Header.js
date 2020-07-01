import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0 30px 0',
    [theme.breakpoints.up('xs')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '100px'
    },
  }
}))

export default function Header(){
  const classes = useStyles();
  return <Typography className={classes.root} display='block' variant='h1'> Tic Tac Toe </Typography>
}
