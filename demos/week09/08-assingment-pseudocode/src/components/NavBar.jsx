import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href={'/books'}>Books</Link>
            <Link href='/users/something'>Your profile</Link>
        </nav>
    )
}