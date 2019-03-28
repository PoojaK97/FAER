import React from 'react';
import { Link } from 'react-router-dom';
import './R.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Jumbotron} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 90,
    
    justifyContent: 'center',
    padding: '0 30px',
    boxShadow: '0 2px 2px 1px rgba(255, 105, 135, .3)',
  },
});

function R(props) {
  const { classes } = props;
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classNames(classes.appBar, classes.root)} >
        <Toolbar>
          <img src={require('../images/logo.png')} className="App-logo" />
          <div>
          <Typography variant="h6" color="inherit" noWrap className="Menu">
            EUPHONY
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <Jumbotron>
          <h1>You are what you listen to ;)</h1>
          <Button raised variant="contained" color="secondary" size="large" className={classNames(classes.margin, classes.root)}
          component={Link} to="/Album">
            LISTEN NOW
          </Button>
        </Jumbotron>
      </header>
      </React.Fragment>
    );
}

R.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(R);
