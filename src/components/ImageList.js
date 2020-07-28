import React from 'react'
import ImageCard from './ImageCard'
import Grid from '@material-ui/core/Grid'

import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
})

class ImageList extends React.Component {
  render() {
    const props = this.props
    const { classes } = this.props
    const images = props.images.map((image) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard key={image.id} image={image} />
        </Grid>
      )
    })

    return (
      <Container className={classes.cardGrid} maxWidth='md'>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {images}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ImageList)
