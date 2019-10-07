import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import image from './motionImage.jpg'

export const useStyle = makeStyles((theme: Theme)=>
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