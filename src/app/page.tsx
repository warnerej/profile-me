async function getSection(){
  const res = await fetch('http://127.0.0.1:8090/api/collections/sections/records?page=1&perPage=10')
  const data = await res.json() 
  return data?.items as any[]
}

export default async function HomePage() {
  const sections = await getSection()

    return (
      <div>
        <div>
          {sections?.map((section) => {
            return <Section key={section.id} section={section} />
          })}
        </div>
      </div>
    );
  }

  function Section({ section }: any) {
    const {id, title, content, created } = section || {}

    return (
      <div>
        <section
          id={title}
          className="h-screen flex items-center justify-center"
        >
            <div className="w-1/2 flex flex-col justify-center pl-10">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-gray-600">
                {content}
              </p>
            </div>
        </section>
      </div>
    )
}
