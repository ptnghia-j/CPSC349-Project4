migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('vdnqweu6sc3kuxr')

  collection.createRule = ''

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('vdnqweu6sc3kuxr')

  collection.createRule = null

  return dao.saveCollection(collection)
})
