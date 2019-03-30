import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from './NavBar';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ControlledCarousel from './Carousel';
import {Form, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  dividerFullWidth: {
    marginLeft: 130,
    marginRight: 130,
  },
  select: {
      fontSize: 20,
  },
  form: {
    height:80,
  }
});


function PlayList(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <PrimarySearchAppBar/>
      <header>
      </header>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              YOUR PLAYLISTS
            </Typography>
            <Form.Group as={Col} controlId="formGridState" className={classes.form}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            <Form.Label>
              Select    
            </Form.Label>
            <Form.Control as="select"  >
                <option className={classes.select}>Choose...</option>
                <option className={classes.select}>Rock</option>
                <option className={classes.select}>Love</option>
                <option className={classes.select}>Bed Time</option>
            </Form.Control>
            </Typography>
            </Form.Group>
            <center>
            <Button variant="contained" color="primary">
                PLAY ALL
            </Button>
            </center>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
              </Grid>
            </div>
          </div>
        </div>
        <Divider variant="middle" className={classes.dividerFullWidth}/>
        <ListGroup className={classes.dividerFullWidth}>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Divider variant="middle" className={classes.dividerFullWidth}/>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Euphony and Co.
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          MSRIT
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

PlayList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayList);