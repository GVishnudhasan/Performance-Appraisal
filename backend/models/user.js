const db = require('../util/database');

module.exports = class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    static save(user) {
        return db.execute(
            'INSERT INTO users (id, password) VALUES (?, ?)' , 
            [user.name, user.password]
        );
    }
};