import { Link } from "react-router"

export default function NotFound() {
    return(
        <div>
            <h1>Haj med dej</h1>
            <Link to="/"><h2>Tryk her for at komme tilbage</h2></Link>
        </div>
    )
}