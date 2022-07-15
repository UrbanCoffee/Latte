const Image = ({ contents }) => {

    return (
        <div>
            <img alt={contents[1]} src={contents[1]}/>
            <p>{contents[0]}</p>
        </div>
    );
}

export default Image;