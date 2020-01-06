const router=require("koa-router")()

const list=require("./list/list.js")

router.use(list.routes(),list.allowedMethods())

module.exports=router;