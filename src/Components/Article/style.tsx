import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            border: '1px solid #aaa',
            borderRadius: '5px'
        },
        link: {
            textDecoration: 'none',
            color: 'dodgerblue',
            cursor: 'pointer'
        }
    })
    )