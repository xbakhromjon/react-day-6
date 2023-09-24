import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <h1>Home</h1>
            <Link to={"/projects"}>My Projects</Link>
            <br/>
            <Link to={"/about"}>About</Link>
        </>
    )
}

export default Home