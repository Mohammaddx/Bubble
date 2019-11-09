import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography'
import ReadMoreInfoProfile from '../ReadMoreInfoProfile/index'
import ReadMoreComment from '../ReadMoreComment/index'
import CommentList from '../CommentList/index'
import {useStyle} from './style'
import AXIOS from '../../utils/axios'

export interface ReadMore{
    children: React.ReactNode;
    username: string;
    image: string;
    following: boolean;
    text: string;
    classname: string;
}

const ReadMore: React.FC = ()=>{
    const classes = useStyle()
     //for profile
     const [image, setImage]: any = useState('');
     const [username, setUsername]: any = useState('');
     const [bio, setBio]: any = useState(''); //not useing here now
     const [following, setFellowing]: any = useState(false) //not useing here now
     // for info
   const [text, setText]: any = useState('');
   const [classname, setClassname]:any = useState('');
    //for article
    const [slug, setSlug]: any = useState('');
    const [title, setTitle]: any = useState('');
    const [createdAt, setCreatedAt]: any = useState('');

   useEffect(()=>{
     let path = window.location.pathname;
     let filename = path.substring(path.indexOf('@')+2);
     let slugname = path.substring(path.indexOf('?')+2);
     console.log(filename);
     console.log(slugname);
     
         AXIOS.get(`profiles/${filename}`)
         .then(res =>{
         setImage(res.data.profile.image);
         console.log(res.data.profile.username);
         setUsername(res.data.profile.username);
         setBio(res.data.profile.bio);
         setFellowing(res.data.profile.following);
         })
         .catch(err =>{
             console.error(err);    
         })   
         
         AXIOS.get(`articles/${slugname}`)
         .then((res: any) =>{
             setSlug(slugname);
             setTitle(res.article.title);
             setCreatedAt(res.article.createdAt)
         })
         
   }, [])
    return(
        <div>
            <header className={classes.header}>
                <Typography component="h2" variant="h2" className={classes.title}>Title</Typography>
                <ReadMoreInfoProfile username={username} image={image} following={following} 
                                    text={text} classname={classname} title={title} createdAt={createdAt}/>
            </header>

            <div className={classes.divComment}>
                <ReadMoreComment slug={slug}/>
            </div>

            <div className={classes.comment}>
                <CommentList slug={slug}/>
            </div>
        </div>
    )
}

export default ReadMore;
