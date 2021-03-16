import { Button, Grid, Link, makeStyles, Paper, Typography, useMediaQuery } from '@material-ui/core'
import { CheckCircle, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import data from "../../data"
import Rating from '../ProductDetails/Rating'



function ProductPage({darkMod}) {

    const isActive = useMediaQuery('(max-width:745px)')
    const isMaxWidth = useMediaQuery('(max-width:1077px)')


    const useStyles = makeStyles(theme=>({

        container:{
            minHeight:"81.7vh"
        },
       
        productsGrid : {
            background:theme.palette.background.paper,
            
        },
       
        // Image section Styling **********************

        imageSection : {
            margin:theme.spacing(3,3,3,5), 
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            maxWidth:isMaxWidth ? 500 : 450,
            maxHeight:600,
        },
        imageContainer : {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:theme.spacing(2)
        },
    
        descriptionSection : {
            margin:isActive? theme.spacing(3) : theme.spacing(3,3,3,5)  ,  
        },
        image : {
            maxHeight:"100%",
            maxWidth:"100%",
            
        },
        // description styling ******************************

        descriptionWrapper : {
            padding:theme.spacing(2),
            maxWidth:isMaxWidth ? "100%" : 650
        },
        link : {
            marginTop:theme.spacing(1),
            marginBottom:theme.spacing(-1)
        },
        price : {
            marginTop:theme.spacing(-1.5),
            marginBottom:theme.spacing(1)
        },
        description : {
            marginBottom:theme.spacing(1),
            textAlign:"justify"
        },
        checkContainer: {
            display:"flex",
            margin:theme.spacing(0.5,0)

        },
        check : {
            marginLeft:theme.spacing(1),
            fontWeight:"600"
        },
        buttonContainer : {
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        numberInput : {
            marginRight:theme.spacing(2),
            
        },
        button1 : {
            background:darkMod ? "#30ba51" : "#4a80ed",
            marginRight:theme.spacing(2)

        },
        button2 : {
            background:darkMod ? "#f58e20" : "#f5204e"
        }
        
    }))


    const firstImage = data.products[0].image
    const classes = useStyles()
    return (
        <Paper className={classes.container}>
        <Grid container >
            <Grid container item justify="center" className={classes.productsGrid}>
            
            <Paper className={classes.imageSection}>
                <div className={classes.imageContainer} >
                    <img className={classes.image} src={firstImage} />
                </div>
            </Paper>
            
            
            <Paper className={classes.descriptionSection}>
                <div className={classes.descriptionWrapper}>
                <Typography  variant="h5">
                   T-Shirt for man
                </Typography>
                <Typography id="link" className={classes.link} variant="subtitle1" >
                    <a href="http://localhost:3000/" alt="#" style={{color : darkMod ? "#fff" : "#000000DE"}} >
                        Visite My Store
                    </a>
                </Typography>
                <Rating />
                <Typography className={classes.price} variant="body1" >
                    Price :
                    <span id="price"><strong>120 $</strong></span>
                </Typography>
                <div>
                <Typography id="About" variant="h6" >
                    About This Item
                </Typography>
                <Typography className={classes.description} variant='body2' >
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker
                </Typography>
                </div>
                <div>
                <div className={classes.checkContainer}>
                <CheckCircle  color="secondary" />
                <Typography className={classes.check} variant="body2" >Color: <span id="span" >Black</span></Typography>
                </div>
                <div className={classes.checkContainer}>
                <CheckCircle  color="secondary" />
                <Typography className={classes.check} variant="body2" >Available: <span id="span">In Stock</span></Typography>
                </div>
                <div className={classes.checkContainer}>
                <CheckCircle  color="secondary" />
                <Typography className={classes.check} variant="body2" >Category: <span id="span">T-shirt</span></Typography>
                </div>
                </div>
                <div className={classes.buttonContainer}>
                    <input id="input" className={classes.numberInput} type="number" min="0" value="1" />
                    <Button
                        id="btn"
                        variant="contained"
                        color="primary"
                        className={classes.button1}
                        endIcon={<ShoppingCart>send</ShoppingCart>}
                     >Add To Cart</Button>
                     {/* <Button id="btn" variant="contained" className={classes.button2} color="primary">
                        <a href="http://localhost:3000" alt="my stor">My Store</a> 
                     </Button> */}
                </div>
                </div>

            </Paper>
            
            </Grid>
        </Grid >
      </Paper>
    )
}

export default ProductPage
