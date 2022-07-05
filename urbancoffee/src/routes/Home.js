import {NavBar, SearchBar, Footer,
        ArtCard} from '../components'

import './styling/Container.css'
import './styling/Home.css'

const Home = () => {
    return (
        <>
        <NavBar/>
        <div className="Container" id="Home">
            <SearchBar/>
            <div id="Home-Content">
                <div id="Main-Content">
                    <p>Main Content</p>
                    <hr/>
                    <ArtCard/>
                    <ArtCard/>
                </div>
                <div id="Side-Content">
                    <p>Side Content</p>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home;