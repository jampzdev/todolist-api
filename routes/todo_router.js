var express = require("express")
var router = express.Router()

var todo_ctrl = require("../controllers/todo_controller")

router.post("/get",function (req,res,next){
    todo_ctrl.get(req,res,next)
})

router.post("/create",function (req,res,next){
    todo_ctrl.create(req,res,next)
})

router.post("/update",function (req,res,next){
    todo_ctrl.update(req,res,next)
})

router.post("/remove",function (req,res,next){
    todo_ctrl.remove(req,res,next)
})


module.exports = router