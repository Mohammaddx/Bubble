import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
        },
        leftSide:{
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'left'
        },
        img: {
           borderRadius: '50%',
            width: '40px',
            height: '40px',
        },
        
        HeaderDivH4: {
            color: 'dodgerblue',
            lineHeight: '2px',
        },
        HeaderDivSpan: {
            color: '#aaa',
            lineHeight: '2px',
        },
        Button: {
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            height: '50px',
        }
    })
    )