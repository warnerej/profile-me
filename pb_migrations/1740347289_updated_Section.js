/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1939684505")

  // update collection data
  unmarshal({
    "name": "Sections"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1939684505")

  // update collection data
  unmarshal({
    "name": "Section"
  }, collection)

  return app.save(collection)
})
