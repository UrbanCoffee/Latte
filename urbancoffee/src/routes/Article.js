import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styling/Article.css'
import { NavBar, Document, DocBanner,
         PostComment, Comment, SearchBar} from '../components'

const Article = () => {
    const { docID } = useParams();
    const [ docJSON, setDoc ] = useState({});

    useEffect(() => {
        console.log("Check");
        fetch(`http://localhost:8080/getDocument/${docID}`)
            .then(res => {
                if(!res.ok)
                    throw res.status;
                return res.json();
                })
            .then(item => {
                console.log(item);
                setDoc(item);
                })
            .catch(err => console.log(err));
    }, [docID]);

    return (
        <>
        <NavBar/>
        <div className='Container' id='Article'>
            <SearchBar/>
            <DocBanner docID={docID}/>
            <div className="Article-Left-Body">
                {
                    Object.keys(docJSON).length? // check if docJSON is non-empty
                        <Document doc={docJSON}/>:
                        <></>
                }
                <div className='CommentSection'>
                    <PostComment docID={docID} styleType="span"/>
                    <Comment />
                </div>
            </div>
            {/*<div className="Article-Right-Body">
                <p>Test</p>
            </div>*/}
        </div>
        </>
    )
}

export default Article;