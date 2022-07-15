import './styling/postcomment.css'

const PostComment = ({ styleType }) => {
    let classStyle = 'PostComment ' + styleType;
    return (
        <div className={classStyle}>
            <form>
                {/* text input box is a few pixels too big */}
                <input type="text" /><br/>
                <input type="submit" value="Post Comment"/>
            </form>
        </div>
    )
}

export default PostComment;