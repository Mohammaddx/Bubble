import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px'

        },
        img: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            position: 'relative',
            top: '12px'
        },
        HeaderDiv: {
            padding: '10px',
        },
        HeaderDivH4: {
            color: 'dodgerblue'
        },
        HeaderDivSpan: {
            color: '#aaa'
        },
        Button: {
            height: '40px',
            position: 'relative',
            top: '40px'
        }
    })
    )