import {  Link, makeStyles,Typography } from '@material-ui/core'
import React from 'react'



function Footer({darkMod}) {

  const useStyles = makeStyles(theme=>({
    container : {
        height:theme.spacing(7),
        background:darkMod ? theme.palette.background.paper : "#3f51b5",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderTop:darkMod ? "1px solid #4a4747" : "1px solid #757ce8"
    },
    copyright : {
      fontWeight:"bold",
      color:"#fff"
    }
}))

    const classes = useStyles()
    return (

  <div className={classes.container}>
  <Typography className={classes.copyright} variant="body2" color="textSecondary" >
      {'Copyright © '}
      <Link color="inherit" href="https://zied-sayadi-portfolio.netlify.app/">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
          </Typography>
  </div>

)
}

export default Footer
