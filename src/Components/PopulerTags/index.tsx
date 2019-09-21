import React , {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import axios  from 'axios';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(()=>
    createStyles({
        tag: {
            backgroundColor: 'dodgerblue',
            color: '#fff',
            padding: '10px 20xp',
            borderRadius: '20px',
            margin: '10px 0'
        },
        container:{
            backgroundColor: '#eee',
            padding: '10px',
            alignItems: 'center',
            borderRadius: '5px'
        },
        title: {
            textAlign: 'left',
        }
       
    }),
    );

    const PopulerTags = ()=>{
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