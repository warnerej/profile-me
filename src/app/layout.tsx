import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-blue-500 text-white p-4">
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/about">About</a>
        </nav>

        {/* Main Content (takes up remaining space) */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer (stays at bottom) */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 My Website
        </footer>
      </body>
    </html>
  );
}
