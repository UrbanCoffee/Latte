import './styling/inputTEXTAREA.css'

const InputTEXTAREA = () => {
    //{/* Look into useLayoutEffect */}
    return (
        <textarea placeholder='Write Document Body Here...'
            id='body'
            name='body'
            required

            className="Create-TA"
            />
    )
}

export default InputTEXTAREA;