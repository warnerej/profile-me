export default function HomePage() {
  return (
    <div className="space-y-32 p-8">
      {/* Work Experience Section */}
      <section
        id="experience"
        className="h-screen flex items-center justify-center"
      >
        <div className="flex w-full max-w-6xl h-[80%]">
          {/* Image Section */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/lcsimage.jpg"
              alt="Work Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-1/2 flex flex-col justify-center pl-10">
            <h1 className="text-4xl font-bold mb-4">London Computer Systems</h1>
            <p className="text-xl text-gray-600">
              - Did some pretty cool stuff I guess
              <br />
              - Worked on a team of 17 to effectively do something
              <br />- Probably something else that I did that will be added
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>

      {/* Schooling Section */}
      <section
        id="schooling"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Schooling</h1>
      </section>

      {/* Extras Section */}
      <section
        id="extras"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Extras</h1>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Contacts</h1>
      </section>
    </div>
  );
}
