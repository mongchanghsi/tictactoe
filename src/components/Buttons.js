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
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
  }
}))

export function RefreshButton(props){
  const classes = useStyles();
  return <Button variant='contained' className={classes.refreshButton} startIcon={<RefreshIcon/>} onClick={props.restart}> Restart Game </Button>
}
