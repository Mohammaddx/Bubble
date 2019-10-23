import  React , {useState} from 'react';

 export interface AppContextForComment{
    text: string 
}

export interface CommentsContextInterface{
    children: React.ReactNode,
}

export const context = React.createContext<AppContextForComment | null>(null)
export const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

const CommentsContext: React.FC = (props) =>{
    const [comment , setCommnts] = useState([])
    const value: any = [comment, setCommnts]
    return(
        <AppContextProvider value={value}>
            {props.children}
        </AppContextProvider>
    )
    CommentsContext.defaultProps ={
        children: null
    }
}

export default CommentsContext;

