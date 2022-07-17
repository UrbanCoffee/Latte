/*
    hdr [
        0: "<...text...>",
        1: "<...more text...>",
        ... elements are on a single line seperated by a space
        n: "<...more text...>"
    ]
*/

const Header = ({contents}) => {

    return (
        <h3>{contents.join(" ")}</h3>
    )
}

export default Header;