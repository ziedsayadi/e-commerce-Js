import { Button, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import "./product.css"

import Rating from './Rating';



function Product({product,darkMod}) {
    const {name,price,brand,image,stars,numReviews} = product
    
    const useStyles = makeStyles(theme=>({


    
        description_container : {
            display:"flex",
            flexDirection:"column",
            // alignItems:"center",
            margin:theme.spacing(1,0),
            position:"absolute",
            background:theme.palette.background.paper,
            padding:theme.spacing(2),
            // bottom:theme.spacing(-10),
            width:"100%",
            boxShadow:"-1px -1px 6px rgba(0,0,0,0.1)"
    
        },
        title : {
            fontWeight:"500",
            position:"relative"
        },
        brand:{
            color:"#c9d1d1",
            margin:theme.spacing(1,0)
        },
        price:{
            position:"absolute",
            color:theme.palette.success.main,
            top:theme.spacing(2.6),
            right:theme.spacing(3),
            fontWeight:"bold"
        },
       
        button_container : {
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly"
        },
        button1 : {
            background:darkMod ? "#30ba51" : "#4a80ed",

        },
        button2 : {
            background:darkMod ? "#de8e3e" : "#f5204e"
        }
    
    }))
    
    const classes = useStyles()
    
    return (
        <Paper elevation={3} className="root">
            <div className="Imge_container">
                   <img className="image" src={image}
                    alt="image" />
            </div>
            <Paper id="description" className={classes.description_container}>
            <div>
                <Typography className={classes.title} variant="h6" >{name}</Typography>
                <Typography className={classes.brand} variant="h6" >{brand.toUpperCase()}</Typography>
                <Rating numReviews={numReviews} stars={stars} />
                <Typography className={classes.price} variant="body1" >{price} $</Typography>
            </div>
            <div className={classes.button_container}>
                <Button id="btn" 
                variant="contained"
                className={classes.button1} 
                color="primary" 
                endIcon={<ShoppingCart>send</ShoppingCart>}>Add To Cart</Button>
                <Button id="btn" variant="contained" className={classes.button2} color="primary">More info</Button>
            </div>
            </Paper>
        </Paper>
    )
}

export default Product
