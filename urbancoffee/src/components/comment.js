import { useState, useEffect } from "react";

const Comment = ({ commentID }) => {
    const [commentJSON, setComment] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/getComment/${commentID}`)
        .then(res => res.json())
        .then(item => setComment(item))
        .catch(err => {
            console.log(err);
            //setComment({text: "An error has occured."});
        });
    }, [commentID]);

    return (
        <>
        { commentJSON?
            <p> {commentJSON.text} </p> :
            <p>Empty Comment</p>
        }
        </>
    )
}

export default Comment;