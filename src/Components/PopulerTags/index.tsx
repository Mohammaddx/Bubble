import React , {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import axios  from 'axios';
import {useStyle} from './style'

    const PopulerTags = (props: any)=>{
        const classes = useStyle();
    const [words , setWord] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then((res: any)=>{setWord(res.data.PTD)})
    }, [])

    const PTDWord = words.map((wordItem:any)=>{
        return(
            <Grid item xs={12} lg={3} key={(wordItem.id)} className={classes.tag}><a>{wordItem.word}</a></Grid>
        )
    })

    return(
        <div className={classes.container}>
            <h4 className={classes.title}>Populer Tags</h4>
            <Grid container spacing={1}>
                {PTDWord}
            </Grid>
        </div>
    )
}

export default PopulerTags;