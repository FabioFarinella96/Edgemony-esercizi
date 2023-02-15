const { MongoClient } = require("mongodb");

const main = async () => {
  const url =
    "mongodb+srv://fabio96:database96@cluster0.nc1cf7s.mongodb.net/test?retryWrites=true";

  const client = new MongoClient(url);

  try {
    await client.connect();
    await updateRecord(client, "Fabio", { nome: "Maria" });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

// funzione per creare una collezione e/o i documenti al suo interno (query: insertOne(), insertMany())
const createCollection = async (client, newRecord) => {
  const result = await client
    .db("school")
    .collection("students")
    .insertMany(newRecord);
  console.log(
    `New records created with the following id: ${result.insertedId}`
  );
};

// funzione per trovare un dato all'interno di un documento
const findRecord = async (client, findRecord) => {
  const result = await client
    .db("school")
    .collection("students")
    .findOne({ nome: findRecord });

  if (result) {
    console.log(`This is the record you are looking for: ${findRecord}`);
  } else {
    console.log(`${findRecord} doesn't exists`);
  }
};

// funzione per eliminare uno o più documenti all'interno di una collezione (query: deleteOne(), deleteMany())
const deleteRecord = async (client, recordToDelete) => {
  const result = await client
    .db("school")
    .collection("students")
    .deleteOne({ nome: recordToDelete });
  console.log(`The record ${result.recordToDelete} was deleted`);
};

// funzione per modificare uno o più documenti (query: updateOne(), updateMany())
const updateRecord = async (client, recordToUpdate, recordToAdd) => {
  const result = await client
    .db("school")
    .collection("students")
    .updateOne({ nome: recordToUpdate }, { $set: recordToAdd });
  console.log(
    `The record ${recordToUpdate} was changed with ${result.recordToAdd}`
  );
};

// lista dei database presenti
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
