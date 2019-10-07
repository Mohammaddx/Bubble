import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'flex',
            margin: '10px',
            justifyContent: 'center'
        },
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            position: 'relative',
            top: '15px'
        },
        button: {
            height: '50px',
            margin: '10px',
            position: 'relative',
            top: '25px'
        },
        Profile_info: {
            position: 'relative', 
            marginTop: '70px'   
        }
    })
    )