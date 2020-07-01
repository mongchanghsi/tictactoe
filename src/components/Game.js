import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Paper } from '@material-ui/core';
import { RefreshButton } from './Buttons';

import X from '../img/cross.png';
import O from '../img/circle.png';

const useStyles = theme => ({
  root: {
    padding: '0 0 30px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    backgroundColor: '#FFFFFFF',
    [theme.breakpoints.up('xs')]: {
      width: "288px",
      height: "288px",
    },
    [theme.breakpoints.up('sm')]: {
      width: "405px",
      height: "405px",
    },
    [theme.breakpoints.up('md')]: {
      width: "672px",
      height: "672px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "900px",
      height: "900px",
    }
  },
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFFF',
    [theme.breakpoints.up('xs')]: {
      width: "96px",
      height: "96px"
    },
    [theme.breakpoints.up('sm')]: {
      width: "135px",
      height: "135px"
    },
    [theme.breakpoints.up('md')]: {
      width: "224px",
      height: "224px"
    },
    [theme.breakpoints.up('lg')]: {
      width: "300px",
      height: "300px"
    },
    "&:hover": {
      backgroundColor: '#33c9dc',
      cursor: "pointer",
    },
  },
  image: {
    [theme.breakpoints.up('xs')]: {
      width: "50px",
      height: "50px"
    },
    [theme.breakpoints.up('sm')]: {
      width: "80px",
      height: "80px"
    },
    [theme.breakpoints.up('md')]: {
      width: "140px",
      height: "140px"
    },
    [theme.breakpoints.up('lg')]: {
      width: "180px",
      height: "180px"
    }
  },
  gameText: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '80px'
    }
  }
})

class Game extends Component {
  constructor(props){
    super(props);

    this.state = {
      player: 'X',
      board: ['','','','','','','','',''],
      gameOver: false,
      winner: '',
      tie: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.restart = this.restart.bind(this);
  }

  handleClick(index){
    // Logic starts from
    // Updating the board
    // Check if current player wins
    // Check if there is a tie
    // Else, update next turn

    //Check if game is over, if it is over, then don't handle the response
    if (this.state.gameOver === true) return;

    let player = this.state.player;
    let board = this.state.board;

    //Update the board
    if (board[index] === ''){
      board[index] = player;
    } else return;


    //Check if the current player has won
    let winning_combination = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let i=0; i<winning_combination.length; i++){
      let winning_row = winning_combination[i];
      let square1 = winning_row[0];
      let square2 = winning_row[1];
      let square3 = winning_row[2];

      if (board[square1] === board[square2] && board[square2] === board[square3] && board[square1] != ''){
        return this.setState({ gameOver: true, winner: player })
      }
    }

    //Check for tie
    let tie_counter = 0;
    for (let i=0; i<board.length; i++){
      if (board[i] != ''){
        tie_counter ++
      }
    }
    if (tie_counter === 9 && this.state.gameOver === false){
      return this.setState({ tie: true })
    }

    //Next player turn
    if (player === 'X'){
      player = 'O'
    } else {
      player = 'X'
    }

    this.setState({ player, board })
  }

  // Restart the board
  restart(){
    let board = ['','','','','','','','',''];
    this.setState({ player: 'X', board, gameOver: false, tie: false })
  }

  render(){
    const { classes } = this.props
    return(
      <div>
        <Box className={classes.root}>
          <Grid container spacing={0} justify='center' alignItems="center" className={classes.board} >
            { this.state.board.map( (block, index) => {
              return <Grid item xs={4}>
                      <Box display='inline-block' border={1} onClick={()=>this.handleClick(index)} className={classes.block}>
                        { block === 'X' ? <img src={X} alt='cross' className={classes.image}/> : null }
                        { block === 'O' ? <img src={O} alt='circle' className={classes.image}/> : null }
                      </Box>
                    </Grid>
            })}
          </Grid>
        </Box>
        { this.state.gameOver ? <Typography variant='h2' className={classes.gameText}> Player {this.state.winner} has won! </Typography> : null }
        { this.state.tie ? <Typography variant='h2' className={classes.gameText}> Tied! </Typography> : null }
        <RefreshButton restart={this.restart}/>
      </div>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Game);
