# Books Warehouse

---

# What is it?

Collection of handlers to add/list/search etc books in our books warehouse.

# How to set up?

0. Make sure you've got the right NodeJS version and serverless being installed
1. Export gcloud keys to your computer using this tuto: https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys
1. Move the file into `~/.gcloud/qltr_keyfile.json`

# How to deploy?

1. Change to `books` directory
2. Ensure you enter the right project into `serverless.yml` file
3. Launch `serverless deploy`

# Bibliography

- https://github.com/serverless/serverless#quick-start
- https://medium.com/@alfianlosari/serverless-node-js-rest-api-with-google-cloud-function-firestore-d7b422f58511
- https://firebase.google.com/docs/admin/setup#add-sdk
