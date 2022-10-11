var todo_mdl = require("../models/todo_model")

exports.get = async function(req,res,next) {
    const result = await todo_mdl.get(req)

    res.json({
        statusCode : result ? 200 : 500,
        devMessage : result
    })
}

exports.create = async function(req,res,next) {
    const result = await todo_mdl.create(req)

    res.json({
        statusCode : result ? 200 : 500,
        devMessage : result
    })
}

exports.update = async function(req,res,next) {
    const result = await todo_mdl.update(req)

    res.json({
        statusCode : result ? 200 : 500,
        devMessage : result
    })
}
exports.remove = async function(req,res,next) {
    const result = await todo_mdl.remove(req)

    res.json({
        statusCode : result ? 200 : 500,
        devMessage : result
    })
}


