import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  refreshButton: {
    backgroundColor: '#33c9dc',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#008394',
      color: '#FFF'
    },
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      fontSize: '20px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '27px'
    },
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      width: '20px',
      height: '20px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '27px',
      height: '27px'
    },
  }
}))

export function RefreshButton(props){
  const classes = useStyles();
  return <Button variant='contained' className={classes.refreshButton} startIcon={<RefreshIcon className={classes.logo}/>} onClick={props.restart}> Restart Game </Button>
}
