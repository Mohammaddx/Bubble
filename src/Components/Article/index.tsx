import * as React from 'react';
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ArticleHeader from '../ArticleHeader/index'
import ArticleBody from '../ArticleBody/index'
import {useStyle} from './style'
import '../../animate.css'

export interface ArticleInterface{
    children?: React.ReactNode,
}
const Article: React.FC = () =>{
    const classes = useStyle()
    return(
        
        <div style={{padding: '35px'}}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}> <ArticleHeader /> </Grid>
                <Grid item xs={12}> <ArticleBody /> </Grid>
                <Grid item xs={12}> <span><NavLink to="/ReadMore" className={classes.link} >Read more...</NavLink></span></Grid>
            </Grid>
        </div>
    )
    Article.defaultProps = {
        children: true
    }
}

export default Article;