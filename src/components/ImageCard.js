import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
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
})

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  render() {
    const { classes } = this.props
    const { alt_description, urls, description, user } = this.props.image

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          ref={this.imageRef}
          image={urls.regular}
          title={alt_description}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            By {user.name}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ImageCard)
