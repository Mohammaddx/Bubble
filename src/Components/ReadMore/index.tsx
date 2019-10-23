import React from 'react';
import Typography from '@material-ui/core/Typography'
import ReadMoreInfoProfile from '../ReadMoreInfoProfile/index'
import ReadMoreComment from '../ReadMoreComment/index'
import CommentList from '../CommentList/index'
import {useStyle} from './style'

export interface ReadMore{
    children: React.ReactNode
}

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

    ReadMore.defaultProps =  {
        children: true
    }
}

export default ReadMore;