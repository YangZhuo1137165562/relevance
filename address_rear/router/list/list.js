const router=require("koa-router")()
const query=require("../../db/query")

// router.get("/alluser",async ctx=>{
//     let res=await query('select * from usermsg')
//     console.log(res);
//     // if(res.length>0){
//     //     ctx.body={
//     //         code:1,
//     //         msg:"已查找到全部用户",
//     //         data:res
//     //     }
//     // }
// })


router.get("/alluser", async ctx => {//查找全部用户信息
    let res = await query('select * from usermsg')
    if (res.length > 0) {
        ctx.body = {
            code: 1,
            mes: "已成功获取全部数据",
            data: res
        }
    } else {
        ctx.body = {
            code: 0,
            mes: "无法获取全部数据"
        }
    }
})
module.exports=router;