var conn = require("../services/mysql/mysql_service")

const get = async function(req){
    let e = req.body
    let page = e.page 
    let row  = e.row
    let offset = (page-1) * row

    let qry = "SELECT * FROM todo_list_table LIMIT ? OFFSET ?"
    const resQry = await conn.getQuery(qry,[parseInt(row),offset]).then((res)=>res);
    if(resQry){
        return resQry
    }
    else {
        return false
    }
}

const create = async function(req){
    let e = req.body

    let qry = "INSERT INTO todo_list_table(title,description)VALUES(?,?)"
    const resQry = await conn.executeQuery(qry,[e.title,e.description]).then((res)=>res);
    if(resQry){
        return true
    }
    else {
        return false
    }
}

const update = async function(req){
    let e = req.body

    let qry = "UPDATE todo_list_table SET title = ?,description = ? WHERE id = ?"
    const resQry = await conn.executeQuery(qry,[e.title,e.description,e.id]).then((res)=>res);
    if(resQry){
        return true
    }
    else {
        return false
    }
}

const remove = async function(req){
    let e = req.body

    let qry = "DELETE FROM todo_list_table WHERE id = ?"
    const resQry = await conn.executeQuery(qry,[e.id]).then((res)=>res);
    if(resQry){
        return true
    }
    else {
        return false
    }
}


module.exports = {
    get,
    create,
    update,
    remove
}