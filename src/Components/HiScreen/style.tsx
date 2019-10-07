import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            width: '100%',
            height: '100vh',
            fontFamily: "'Alfa Slab One', cursive"
        },
       container: {
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
       },
       image: {
            width: '150px',
            height: '150px',
            borderTopLeftRadius:' 50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            boxShadow: '1px 1px 50px -4px rgba(0, 0, 0, 0.3)',
            border: '2px solid dodgerblue' 
       }
    })
    )