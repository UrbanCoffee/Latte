import '../components/styling/buttons.css'
import './styling/Create.css'
import { useState } from 'react'
import { NavBar, DocBanner, Document}    from '../components'
import { InputFILE, InputTEXTAREA } from '../components/Create-Components'

const Create = () => {
    const [ docTitle, setTitle ] = useState("");
    const [ docSubtitle, setSubtitle ] = useState("");
    const [ docBody, setBody ] = useState([]);

    const updTitle  = input => setTitle(input.target.value);
    const updSubTtl = input => setSubtitle(input.target.value);
    // Have updBody here in the mean time before a proper
    // parse function can be implemented in <inputTEXTAREA/>
    const updBody   = value => {console.log(value);};

    return (
        <>
        <NavBar/>
        <div className='Container' id='Create'>
            <header>
                {/* Fix when screen is small and title is too long */}
                <div><span>Create a document - </span> 
                    {docTitle.length? docTitle : "Untitled"}
                </div>
                <button 
                    className='btn-Blue btn-large'
                    onClick={() => alert("Published Press.")}>
                    Publish
                </button>
            </header>

            <div className='Create-Body'>
                <form method="POST">
                    <InputFILE /><br/>

                    <input type='text' placeholder='Title'
                        id='title'
                        name='title'
                        maxLength={'50'}
                        onInput={updTitle}
                        required
                        /><br/>

                    <input type='text' placeholder='Subtitle'
                        id='subtitle'
                        name='subtitle'
                        onInput={updSubTtl}
                        /><br/>

                    <InputTEXTAREA 
                        updateBody={updBody}/>
                </form>

                <div id='Preview'>
                    <div className='DocPH'>
                        <DocBanner/>
                        <Document
                            doc={{
                                title: docTitle,
                                subtitle: docSubtitle,
                                author: "Placeholder",
                                body: docBody
                            }}
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Create;