import './styling/img.css'

/*
    Img [
        1: "Alt-text",
        2: "Src/Link"
    ]
*/

const Image = ({ contents }) => {
    if (!contents)
        return (<div className='Doc-Image-Placeholder'/>)

    return (
        <div className='Doc-Image'>
            <img alt={contents[1]} src={contents[2]}/>
            <p>{contents[1]}</p>
        </div>
    );
}

export default Image;