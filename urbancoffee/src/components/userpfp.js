import './styling/userpfp.css'

const Userpfp = ({ userID, styleType}) => {
    let className = "userpfp " + styleType;

    return (
        <div 
            className={className}
        />
    )
}

export default Userpfp;