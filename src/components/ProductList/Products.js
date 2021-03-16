import { Grid, makeStyles } from "@material-ui/core"
import Product from "../ProductDetails/Product"
import data from "../../data"

const useStyles = makeStyles(theme=>({
    productsGrid : {
        background:theme.palette.background.paper,
        minHeight:"81.7vh"
    }
}))

function Products({darkMod}) {
    
    const classes = useStyles()
    return (
        <Grid container >
            <Grid container justify="center" item className={classes.productsGrid} >
            {
                data.products.map(product=>{
                    return (
                        <Product darkMod={darkMod} key={product.id} product={product} />
                    )
                })
            }
            
            </Grid>
        </Grid >
    )
}

export default Products
