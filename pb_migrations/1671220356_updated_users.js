migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdnqweu6sc3kuxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kw5aflo",
    "name": "username",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdnqweu6sc3kuxr")

  // remove
  collection.schema.removeField("4kw5aflo")

  return dao.saveCollection(collection)
})
