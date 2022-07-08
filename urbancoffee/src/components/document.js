//import {useEffect} from 'react'
import './styling/document.css'

function render( obj , index){
    switch(obj['type']) {
        case 'p':
            return (<p key={index}>{obj['value']} p case</p>)
        case 'img':
            return (<p key={index}>{obj['value']} img case</p>)
        default:
            return(<p key={index}>
                Not a proper type. Something went wrong at render. 
                Object passed in was {obj}.
            </p>)
    }
}

const Document = ({ doc }) => {

    return (
        <div className='Document'>
            <div className='Doc-Banner'>
                <img alt='banner' src='#'/>
            </div>
            <h1>{doc.title}</h1>
            <h3>{doc.subtitle}</h3>
            <div className='Doc-Author'>
                <img className='userpfp pfp-small' alt='meaningful text' src='#'/>
                <h3>by {doc.author}</h3>
            </div>

            <div className='Doc-Body'>
                {doc.body.map( (sect, index) => {
                    console.log(sect);
                    return render(sect, index);
                })}
            </div>
        </div>
    )
}

export default Document;