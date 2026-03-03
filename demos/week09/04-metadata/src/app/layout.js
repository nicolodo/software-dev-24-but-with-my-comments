import "./globals.css";
// when you have a static route, to set meta data all you need to do is export a const called metadata
export const metadata = {
  title: "Userz!!",
  description: "Userz is the best social media app around! Not even vibe coded",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
