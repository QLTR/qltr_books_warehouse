"use strict";
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

exports.httpget = (request, response) => {
  response.status(200).send("Hello World!");
};

exports.createBook = (req, res) => {
  let db = admin.firestore();
  const firestoreID = req.body.isbn;
  let docRef = db.collection("books").doc(firestoreID);

  return docRef.set(req.body).then(() => res.status(200).send("Success"));
};
