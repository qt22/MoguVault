const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
console.log(Db)
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("PasswordManager");
        console.log("Successfully connected to MongoDB."); 

        // _db.createCollection("Register", function(err, res) {
        //   if (err) throw err;
        //   console.log("Collection created!");
        //   db.close();
        // });
        return callback(err);
      }
    });
  },
 
  getDb: () => {
    return _db;
  },
};