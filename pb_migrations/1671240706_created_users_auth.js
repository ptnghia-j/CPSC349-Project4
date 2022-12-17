migrate((db) => {
  const collection = new Collection({
    "id": "5nkut57oqlxx8d4",
    "created": "2022-12-17 01:31:46.921Z",
    "updated": "2022-12-17 01:31:46.921Z",
    "name": "users_auth",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5nkut57oqlxx8d4");

  return dao.deleteCollection(collection);
})
