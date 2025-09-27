import {Link} from "react-router-dom";

function Home(){
    return (
    <div>
    <h2>Home Page</h2>
    <Link to="/Login">Go To Login</Link>
    </div>
    );
}
export default Home;

