migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5nkut57oqlxx8d4")

  // remove
  collection.schema.removeField("ut8dm5ig")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5nkut57oqlxx8d4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ut8dm5ig",
    "name": "password1",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
