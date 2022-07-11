import '../components/styling/buttons.css'
import './styling/Create.css'
import { NavBar }    from '../components'
import { InputFILE, InputTEXTAREA } from '../components/Create-Components'

const Create = () => {

    return (
        <>
        <NavBar/>
        <div className='Container' id='Create'>
            <header>
                <div><span>Create a document -</span> Untitled</div>
                <button 
                    className='btn-Blue btn-large'
                    onClick={() => alert("Published Press.")}>
                    Publish
                </button>
            </header>

            <form method="POST">
                <InputFILE /><br/>

                <input type='text' placeholder='Title'
                    id='title'
                    name='title'
                    maxLength={'50'}
                    required
                    /><br/>

                <input type='text' placeholder='Subtitle'
                    id='subtitle'
                    name='subtitle'
                    /><br/>

                <InputTEXTAREA />
            </form>
        </div>
        </>
    )
}

export default Create;