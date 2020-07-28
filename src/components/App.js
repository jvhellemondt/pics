import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
})

class App extends React.Component {
  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })

    this.setState({
      images: response.data.results,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant='h6' color='inherit' noWrap>
              Fetch some unsplash pictures!
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth='sm'>
              <Typography
                component='h1'
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom>
                Pictures, so many pictures!
              </Typography>
              <SearchBar onSubmit={this.onSearchSubmit} />
            </Container>
          </div>
          <ImageList images={this.state.images} />
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'>
            UI with Material-UI and fed by Unsplash!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(App)
