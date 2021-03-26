const sqlite3 = require('sqlite3').verbose();

class Service {

   db;

    constructor() {
        this.db = new sqlite3.Database('./iot.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
        });

        this.db.run(`CREATE TABLE IF NOT EXISTS luminosites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            value INTEGER
            )`)
    }

    power(value) {
        let resultat;
        
        if (value === "LOW") {
            resultat = "HIGH"
        } else if(value === "HIGH") {
            resultat = "LOW"
        } else {
            resultat = ""
        }
        return resultat;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.db.all("select * from luminosites", [], async (err, rows) => {
                if(err) {
                    console.error(err.message)
                    reject(err.message)
                }
                resolve(rows)
          });
        });
    }
    create(value) {
        this.db.run("Insert into luminosites(value) values(?)",value,  function(err) {
            if (err) {
              return console.log(err.message);
            }
        })
    }
    delete() {
        this.db.run("delete from luminosites", function(err) {
            if (err) {
              return console.log(err.message);
            }
        })
    }
}


module.exports = Service;
