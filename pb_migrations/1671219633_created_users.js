migrate((db) => {
  const collection = new Collection({
    id: 'vdnqweu6sc3kuxr',
    created: '2022-12-16 19:40:33.271Z',
    updated: '2022-12-16 19:40:33.271Z',
    name: 'users',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'pwx8vat0',
        name: 'email',
        type: 'text',
        required: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: 'yk3z06xm',
        name: 'password',
        type: 'text',
        required: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      }
    ],
    listRule: null,
    viewRule: null,
    createRule: null,
    updateRule: null,
    deleteRule: null,
    options: {}
  })

  return Dao(db).saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('vdnqweu6sc3kuxr')

  return dao.deleteCollection(collection)
})
