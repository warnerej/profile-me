import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text min-h-screen flex">
        {/* Main Content Container */}
        <div className="flex-1 p-4">{children}</div>

        {/* Floating Sidebar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-scrollbar p-4 rounded-lg shadow-lg">
          <nav className="space-y-4">
            <a href="#experience" className="block text-white hover:text-hovertext">Experience</a>
            <a href="#projects" className="block text-white hover:text-hovertext">Projects</a>
            <a href="#schooling" className="block text-white hover:text-hovertext">Schooling</a>
            <a href="#extras" className="block text-white hover:text-hovertext">Extras</a>
            <a href="#contacts" className="block text-white hover:text-hovertext">Contacts</a>
          </nav>
        </div>
      </body>
    </html>
  );
}
