migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('5nkut57oqlxx8d4')

  collection.options = {
    allowEmailAuth: true,
    allowOAuth2Auth: true,
    allowUsernameAuth: true,
    exceptEmailDomains: null,
    manageRule: null,
    minPasswordLength: 5,
    onlyEmailDomains: null,
    requireEmail: false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('5nkut57oqlxx8d4')

  collection.options = {
    allowEmailAuth: true,
    allowOAuth2Auth: true,
    allowUsernameAuth: true,
    exceptEmailDomains: null,
    manageRule: null,
    minPasswordLength: 8,
    onlyEmailDomains: null,
    requireEmail: false
  }

  return dao.saveCollection(collection)
})
