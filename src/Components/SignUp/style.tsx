import {makeStyles, createStyles, Theme} from '@material-ui/core/styles' 

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#fff',
      width: '40%',
      margin: 'auto',
      padding: '10px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '1px 1px 50px -3px rgba(0,0,0,0.5)'
    },
    textFeild: {
      textAlign: 'center',
      
    },
    form: {
        margin: 'auto',
    },
    title: {
        marginBottom: '20px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
   
  }),
);