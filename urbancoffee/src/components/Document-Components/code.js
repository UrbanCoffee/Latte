/*
    Code [
        0: "Language",
        1: "Src Code"
    ]
*/

const Code = ({ contents }) => {
    
    return (
        <pre>
        <code class='language-{contents[0]}'>
            {contents[1]}
        </code>
        </pre>
    )
}

export default Code;