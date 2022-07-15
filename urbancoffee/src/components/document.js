import './styling/document.css'
import * as Doc from './Document-Components'
import Userpfp from './userpfp'

function render( obj , index ){
    switch(obj['type']) {
        case 'p':    return <Doc.Paragraph  key={index} contents={obj['value']}/>
        case 'img':  return <Doc.Image      key={index} contents={obj['value']}/>
        case 'code': return <Doc.Code       key={index} contents={obj['value']}/>
        case 'hdr':  return <Doc.Header     key={index} contents={obj['value']}/>
        default:
            return(<p key={index}>
                Not a proper type. Something went wrong at render. 
                Object passed in was {typeof(obj)} and type of {obj['type']}.
            </p>)
    }
}

const Document = ({ doc }) => {

    return (
        <div className='Document'>

                <h1>{doc.title}</h1>
                <h2>{doc.subtitle}</h2>

                <div className='Doc-Author'>
                    <Userpfp styleType="small"/>
                    <h3>by {doc.author}</h3>
                </div>

                <div className='Doc-Body'>
                    {doc.body.map( (sect, index) => {
                        return render(sect, index);
                    })}
                    <div className="Doc-Body-Time">
                        <p>{doc.timePosted}</p>
                    </div>
                </div>

                <div className='Doc-Adendums'>
                    {/* Adendums */}
                </div>

        </div>
    )
}

export default Document;