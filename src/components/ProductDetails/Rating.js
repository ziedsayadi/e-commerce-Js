import { makeStyles, Typography } from '@material-ui/core';
import {Star , StarHalf , StarBorder} from "@material-ui/icons"
import React from 'react'

const useStyles = makeStyles(theme=>({
    stars :{
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        margin: theme.spacing(1,0,2,0)
    },
    reviews : {
        marginLeft:theme.spacing(1),
        color:"#696969",
        marginBottom:theme.spacing(0.3)
    }
}))

function Rating({numReviews,stars}) {

    const classes = useStyles()
    return (
        <Typography className={classes.stars} >
            <div>
            <span>
            {
                stars >=1 ? <Star color="secondary" /> : stars >= 0.5 ? <StarHalf color="secondary" /> : <StarBorder color="secondary"/>
            }   
            </span>
            <span>
            {
                stars >=2 ? <Star color="secondary"/> : stars >= 1.5 ? <StarHalf color="secondary"/> : <StarBorder color="secondary"/>
            }   
            </span>
            <span>
            {
                stars >=3 ? <Star color="secondary"/> : stars >= 2.5 ? <StarHalf color="secondary"/> : <StarBorder color="secondary"/>
            }   
            </span>
            <span>
            {
                stars >=4 ? <Star color="secondary"/> : stars >= 3.5 ? <StarHalf color="secondary"/> : <StarBorder color="secondary"/>
            }   
            </span>
            <span>
            {
                stars >=5 ? <Star color="secondary"/> : stars >= 4.5 ? <StarHalf color="secondary"/> : <StarBorder color="secondary"/>
            }   
            </span>
            </div>
            <Typography variant="subtitle1" className={classes.reviews}  >{stars}</Typography>
            <Typography variant="subtitle1" className={classes.reviews}  >{`(${numReviews} reviews)`}</Typography>
            
        </Typography>

    )
}

export default Rating
