migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdnqweu6sc3kuxr")

  collection.viewRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vdnqweu6sc3kuxr")

  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
