import './styling/navbar.css'

const NavBar = () => {
    return (
        <div className="NavBar" >
            <div>
                <div className='NavBar-Placeholder'>
                    <a href='/'>Home</a>
                    </div>
                <div className='NavBar-Placeholder'>
                    <a href='/User'>User</a>
                    </div>
                <div className='NavBar-Placeholder'>
                    <a href='/Create'>Create</a>
                    </div>
                <div className='NavBar-Placeholder'/>
                <div className='NavBar-Placeholder'/>
                <div className='NavBar-Placeholder'/>
            </div>

            <div>
                <div className='NavBar-Placeholder'>
                    <a href='/'>Admin</a>
                    </div>
                <div className='NavBar-Placeholder'>
                    <a href='/'>Settings</a>
                    </div>
            </div>
        </div>
    )
}

export default NavBar;