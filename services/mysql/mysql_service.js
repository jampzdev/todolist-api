const mysql   = require('mysql')
const config  = require('../../config/config')

const conn = mysql.createPool({
    host        : config.Mysql.Host,
    user        : config.Mysql.User,
    password    : config.Mysql.Password,
    database    : config.Mysql.Database,
    charset     : config.Mysql.Charset
})

exports.getQuery = async function(sql, params){
    return new Promise((resolve, reject) => {
        conn.query(sql,params, function(err, results) {
          if (err) {
            resolve(false)
          }
          resolve(results);
        });
    })
}

exports.executeQuery = async function(sql, params){
  return new Promise((resolve, reject) => {
      conn.query(sql,params, function(err, results) {
        if (err) {
          resolve(false)
        }
        resolve(results);
      });
  })
}

exports.findFirst = async function(sql, params){
    return new Promise((resolve, reject) => {
        conn.query(sql,params, function(err, results) {
          if (err) {
            resolve(false)
          }
          if(results.length !=0){
            resolve(results[0]);
          }
          else{
            resolve({});
          }
        });
    })
}