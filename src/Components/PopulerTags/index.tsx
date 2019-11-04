import React , {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import {useStyle} from './style'
import ReactWOW from 'react-wow'
import '../../animate.css'
import API from '../../axios'

export interface PopulerTagsInterface{
    children: React.ReactNode,
}

    const PopulerTags = (props: any)=>{
        const classes = useStyle();
    const [words , setWord]: any = useState([]);

    useEffect(() => {
        API.get('tags').then((res: any)=>{
            setWord(res.data.tags)
        })
        .catch(error =>{
            console.error(error)
        })
        
    }, [])
    const PopulerTagsData = words.map((wordItem: any) =>  <Grid item xs={12} lg={3} className={classes.tag} key={wordItem}><a>{wordItem}</a></Grid>)
   

    return(
        <ReactWOW animation="slideInUp">
        <div className={classes.container}>
            <h4 className={classes.title}>Populer Tags</h4>
            <Grid container spacing={1}>
               {PopulerTagsData}
            </Grid>
        </div>
        </ReactWOW>
    )

}

export default PopulerTags;
