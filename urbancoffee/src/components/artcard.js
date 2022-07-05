import './styling/artcard.css'

const ArtCard = ( {ArtID} ) => {

    return (
        <div className="ArtCard">
            <div className="">
                <h1>Main Title. Maybe Something Descriptive</h1>
                <h3>Subtitle. Something witty or attention grabby perhaps.</h3>
                <p>
                    Brief description with a limited number or characters. Or perhaps displays
                    the first couple of sentences in the article. Regardless, text is displayed here when
                    the artcile does not have a banner within it.
                </p>
            </div>
        </div>
    )
}

export default ArtCard;