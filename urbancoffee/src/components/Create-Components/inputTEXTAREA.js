import './styling/inputTEXTAREA.css'

const InputTEXTAREA = ({ updateBody }) => {
    //{/* Look into useLayoutEffect */}

    const parse = input => {
        updateBody(input.target.value);
    }
    return (
        <textarea placeholder='Write Document Body Here...'
            id='body'
            name='body'
            required

            onInput={parse}
            className="Create-TA"
            />
    )
}

export default InputTEXTAREA;