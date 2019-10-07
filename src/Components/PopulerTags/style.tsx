import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles(()=>
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