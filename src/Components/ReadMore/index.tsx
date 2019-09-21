import React,  {useState , useContext} from 'react';
import Typography from '@material-ui/core/Typography'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import image from './motionImage.jpg'
import ReadMoreInfoProfile from '../ReadMoreInfoProfile/index'
import ReadMoreComment from '../ReadMoreComment/index'
import CommentList from '../CommentList/index'


const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        header: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,255,0.5)),url("${image}")`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '300px',
        },
        title: {
           color: '#fff',
           position: 'relative',
           top: '50px'
        },
        divComment: {
            position: 'relative',
            top: '50px'
        },
        comment: {
            position: 'relative',
            top: '100px'
        }
    })
    )

const ReadMore: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div>
            <header className={classes.header}>
                <Typography component="h2" variant="h2" className={classes.title}>Title</Typography>
                <ReadMoreInfoProfile />
            </header>

            <div className={classes.divComment}>
                <ReadMoreComment />
            </div>

            <div className={classes.comment}>
                <CommentList />
            </div>
        </div>
    )
}

export default ReadMore;