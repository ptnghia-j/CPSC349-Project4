migrate((db) => {
  const collection = new Collection({
    id: 'qvlyblqfzgwx7aj',
    created: '2022-12-17 03:56:20.954Z',
    updated: '2022-12-17 03:56:20.954Z',
    name: 'posts',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'kwdnoz49',
        name: 'username',
        type: 'text',
        required: true,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: 'fwqajtjj',
        name: 'content',
        type: 'text',
        required: true,
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
  const collection = dao.findCollectionByNameOrId('qvlyblqfzgwx7aj')

  return dao.deleteCollection(collection)
})
