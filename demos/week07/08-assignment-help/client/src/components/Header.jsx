import { Link } from "react-router";

export default function Header() {
    return (
        <div>
            <h2 className="text-2xl font-mono text-amber-300">Animals App</h2>
            <nav className="flex flex-row gap-5">
                <Link to='/'>Home</Link>
                <Link to='/animals'>Animals</Link>
                <Link to='/new-animal'>Add a new animal</Link>
            </nav>
        </div>
    )
}