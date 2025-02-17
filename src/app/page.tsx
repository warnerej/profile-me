export default function HomePage() {
  return (
    <div className="space-y-32 p-8">
      {/* Work Experience Section */}
      <section id="experience" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Work Experience</h1>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>

      {/* Schooling Section */}
      <section id="schooling" className="h-screen flex items-center justify-center bg-gray-600">
        <h1 className="text-4xl font-bold">Schooling</h1>
      </section>
    </div>
  );
}
