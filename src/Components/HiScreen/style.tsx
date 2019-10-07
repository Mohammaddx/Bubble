import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            width: '100%',
            height: '100vh',
            fontFamily: "'Alfa Slab One', cursive"
        },
       container: {
            position: 'absolute',
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
            border: '2px solid dodgerblue',
            '&:hover': {
                backgroundColor: 'dodgerblue'
            }
       },
       Headline1: {
        fontWeight: 'bold',
        color: 'darkorchid',
        textShadow: '1px 1px 5px #000',
       },
       Headline2: {
        fontWeight: 'bold',
        color: 'transparent',
        textShadow: '1px 1px 2px dodgerblue'
       },
       Button: {
        position: 'relative',
        padding: '10px 20px',
        border: '0px solid purple',
        color:'#fff',
        backgroundImage: 'linear-gradient(to right, dodgerblue , purple )',
        borderRadius: '20px',
        fontSize: '20px',
        fontFamily: "'Julius Sans One', sans-serif",
        cursor: 'pointer',
        transition: 'backgroundImage 0.5s linear',
        zIndex: 1,
        '&::before': {
            position: 'absolute',
            content: "",
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: 'linear-gradient(to left, dodgerblue , purple )',
            zIndex: -1,
            transition: 'opacity 0.5s linear',
            opacity: 0,
            borderRadius: '20px'
        },
        '&:hover::before': {
            opacity: 1
        }
       },
       

    })
    )


   