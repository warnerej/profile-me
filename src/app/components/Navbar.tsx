const Navbar = () => {
  return (
    <nav>
      {/* Floating Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-scrollbar p-4 rounded-lg shadow-lg">
        <nav className="space-y-4">
          <a href="#Experience" className="block text-white hover:text-hovertext">Experience</a>
          <a href="#Projects" className="block text-white hover:text-hovertext">Projects</a>
          <a href="#Contact" className="block text-white hover:text-hovertext">Contacts</a>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;