const Paragraph = ({ contents }) => {
    // if contents is empty then nothing is displayed.
    // else if contents is not an array, then reduce would not work.
    // therefore, contents is made into an array.
    const body = contents? 
                    (Array.isArray(contents)? contents: [contents])
                    : "" ;

    return ( 
        <p> 
            {
            body.reduce((body, p) => {
                if(!body) return p;
                return ( <> {body} <br/> {p} </>)})
            } 
        </p>
    )
}

export default Paragraph;