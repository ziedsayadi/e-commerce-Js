import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Pinterest , ShoppingCart} from "@material-ui/icons"
import {Brightness7 ,Brightness4 , VpnKey } from '@material-ui/icons/';




function NavBar({darkMod , setDarkMod }) {

    const isActive = useMediaQuery('(max-width:450px)')
    const tooSmalle = useMediaQuery('(max-width:350px)')

    // styling the nav with makeStyles func

    const useStyles = makeStyles((theme)=>({
        nav : {
            boxShadow: "1px 2px 1px rgba(0,0,0,0.1)",
        },
        title :{
            flex:1,
            cursor:"pointer"
            
        },
        link : {
            textDecoration:"none",
            color:"#fff"
        } ,
        Toolbar:{
            marginLeft:theme.spacing(2),
            marginRight:theme.spacing(2),
            
        },
        icons:{
            margin:theme.spacing(0,2,0,0),
            
        }
    }))


    const classes = useStyles() ;
    return (
        <Paper elevation={3}>
        <AppBar className={classes.nav} position="static">
        <Toolbar className={classes.Toolbar} >
                <IconButton edge="start" className={classes.icons} color="inherit" aria-label="menu">
                   <Pinterest fontSize={isActive ? 'small' : 'default'} />
                </IconButton>
               
                 <Typography className={classes.title}  variant={isActive ? "inherit" : "h6" } >
                   <a className={classes.link} href="http://localhost:3000/" >My Store</a>
                  </Typography>
                 
                  <IconButton onClick={()=>setDarkMod(!darkMod)} className={classes.icons} color="inherit" aria-label="menu">
                   {darkMod ? <Brightness7 fontSize={isActive ? 'small' : 'default'} /> : <Brightness4 fontSize={isActive ? 'small' : 'default'}/>}
                  </IconButton>
                  <IconButton className={classes.icons} color="inherit" aria-label="menu">
                   <ShoppingCart fontSize={isActive ? 'small' : 'default'}/>
                </IconButton>
                {
                    tooSmalle ? <IconButton color="inherit" ><VpnKey fontSize="small" /></IconButton>
                    :
                    <Button variant="contained" size={isActive ? 'small' : 'medium'}  color="primary">
                     Sign In
                   </Button>
                }
                 
                
        </Toolbar>
      </AppBar>
      </Paper>
    )
}

export default NavBar
