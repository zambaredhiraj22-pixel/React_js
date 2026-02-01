import { Link } from "react-router";

export default function NavBar() {
    return <div>
<div>
    <Link className="link"><h2>Logo</h2></Link>
</div>
<div>
    <ul>
        <li>
            <Link className="link" to="/">Home</Link>
        </li>
    </ul>
</div>
           </div>
          
}