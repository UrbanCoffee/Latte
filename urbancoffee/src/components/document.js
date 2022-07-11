import './styling/document.css'
import Userpfp from './userpfp'

function render( obj , index ){
    switch(obj['type']) {
        case 'p':
            return (<p key={index}>{obj['value']} p case</p>)
        case 'img':
            return (<p key={index}>{obj['value']} img case</p>)
        case 'code':
            return (<p key={index}>{obj['value']} code case</p>)
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