import Link from "next/link";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <h2>This is my website!!!</h2>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/dogs'>Dogs</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
