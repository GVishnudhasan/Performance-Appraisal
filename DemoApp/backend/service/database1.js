var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Vishnudhasan:abcd1234@cluster0.i6a9cer.mongodb.net/performanceAppraisal";

class mDB {
    constructor() {
        this.database_name = 'performanceAppraisal';
        this.collection_name = null;
    }

    async init(dbname, collection_list) {
        var res = await this.createDB(dbname);
        console.log("Database Status ->", dbname, res);
        for (let i in collection_list) {
            try {
                var res1 = await this.createCollection(collection_list[i]);
                console.log("Collection Status ->", collection_list[i], res1);
            } catch (error) {
                console.log("Error ->", error.message);
            }
        }
    }

    createDB(dbname) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    this.database_name = dbname;
                    console.log("Database name set succesfully!");
                    db.close();
                    resolve(true);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    createCollection(collection) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.createCollection(collection, (err, res) => {
                        if (err) {
                            reject(err);
                        };
                        console.log("Collection created!");
                        db.close();
                        resolve(true);
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }

    insertAnObject(collection, obj) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    console.log(this.database_name);
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).insertOne(obj, (err, res) => {
                        if (err) {
                            reject(err);
                        };
                        console.log(res, obj);
                        console.log("1 document inserted");
                        db.close();
                        resolve(true);
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }

    insertManyObjects(collection, obj) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).insertMany(obj, (err, res) => {
                        if (err) {
                            reject(err);
                        };
                        console.log("Number of documents inserted: " + res.insertedCount);
                        db.close();
                        resolve(true);
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }

    findFirst(collection) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).findOne({}, (err, result) => {
                        if (err) {
                            reject(err);
                        };
                        console.log(result.name);
                        db.close();
                        resolve(true);
                    });
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    Query(collection, query) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).find(query).toArray((err, result) => {
                        if (err) {
                            reject(err);
                        }
                        console.log(result);
                        db.close();
                        resolve(true);
                    });
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    deleteSingle(collection, query) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).deleteOne(query, ((err, obj) => {
                        if (err) {
                            reject(err);
                        }
                        console.log("1 document deleted");
                        db.close();
                        resolve(true);
                    }));
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    deleteMany(collection, query) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).deleteMany(query, ((err, obj) => {
                        if (err) {
                            reject(err);
                        }
                        console.log(obj.result.n + " document(s) deleted");
                        db.close();
                        resolve(true);
                    }));
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    drop(collection) {
        return new Promise(async (resolve, reject) => {
            // console.log(this.database_name, collection);
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).drop((err, delOK) => {

                        if (err) throw err;
                        if (delOK) console.log("Collection deleted");
                        db.close();
                        resolve(true);
                    });
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    updateOne(collection, query, newvalues) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).updateOne(query, newvalues, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        console.log("1 document updated");
                        db.close();
                        resolve(true);
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }

    updateMany(collection, query, newvalues) {
        return new Promise(async (resolve, reject) => {
            try {
                MongoClient.connect(url, (err, db) => {
                    if (err) {
                        reject(err);
                    }
                    var dbo = db.db(this.database_name);
                    dbo.collection(collection).updateMany(query, newvalues, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        console.log(res.result.nModified + " document(s) updated");
                        db.close();
                        resolve(true);
                    });
                });
            }
            catch(err){
                reject(err);
            }
        });
    }
}

// (async () => {
//     var db = new mDB();
//     // let dbname = 'db1';
//     // let collection_list = ['col1', 'col2', 'col3', 'col4', 'col5'];
//     // db.init(dbname, collection_list)
//     //db.createCollection('test');
//      let doc = { name: "Company ABC", address: "Highway 390" };
//     // let many = [
//     //     { name: 'John', address: 'Highway 71' },
//     //     { name: 'Peter', address: 'Lowstreet 4' },
//     //     { name: 'Amy', address: 'Apple st 652' },
//     //     { name: 'Hannah', address: 'Mountain 21' },
//     //     { name: 'Michael', address: 'Valley 345' },
//     //     { name: 'Sandy', address: 'Ocean blvd 2' },
//     //     { name: 'Betty', address: 'Green Grass 1' },
//     //     { name: 'Richard', address: 'Sky st 331' },
//     //     { name: 'Susan', address: 'One way 98' },
//     //     { name: 'Vicky', address: 'Yellow Garden 2' },
//     //     { name: 'Ben', address: 'Park Lane 38' },
//     //     { name: 'William', address: 'Central st 954' },
//     //     { name: 'Chuck', address: 'Main Road 989' },
//     //     { name: 'Viola', address: 'Sideway 1633' }
//     // ];
//     db.insertAnObject('test_demo', doc);
//     // db.insertManyObjects('test', many);
     //db.findFirst('test');
//     let query = { address: /^O/ };
//     // db.deleteSingle('test', query);
//     // db.drop('test');
//     var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//     // db.updateOne('test', query, newvalues);
// })();

(async() =>{
    var db = new mDB();
    db.database_name = "performanceAppraisal";
     let doc = { name: "Company ABC", address: "Highway 390" };
    // db.createCollection('test_col');
    // db.createCollection('login');
})();