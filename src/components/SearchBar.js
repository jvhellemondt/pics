import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import CameraIcon from '@material-ui/icons/Camera'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})

class SearchBar extends React.Component {
  state = {
    term: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CameraIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Search images!
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.onFormSubmit}>
          <TextField
            id='standard-basic'
            label='Image Search'
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            autoFocus
          />
        </form>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SearchBar)
