import logo from "./assets/1.png" 
function Header(){
    return(
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="" />
                <span>ViChat</span>
                </div>
            <nav>
            <ul>
                <li><a id="active" href="#">Home</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav> 
        </div>
    )
}
export default Header;