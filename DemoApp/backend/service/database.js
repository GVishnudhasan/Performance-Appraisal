

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'my_db1'
});



class mDb {
    constructor() {}

    async getData(mQuery){
        return new Promise (async (resolve, rejects)=>{
            try{
                await pool.query(mQuery,  (error, results, fields) => {
                    if (error) {
                        throw new Error(error.message);
                    };
                    console.log('The solution is: ', results[0].solution);
                    resolve(true);
                  });
                }catch(e){
                    console.log(e);
                    rejects(false);
                }
        });

    }

}

// module.exports = mDb;


(async () =>{
    const nDB = new mDb;

    var f1 = await nDB.getData('SELECT 1 + 1 AS solution');
    console.log("Q1 >>", f1);
})();


 
