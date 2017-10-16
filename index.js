const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-body')();
const Router = require('koa-router');
const router = new Router();



var infos = [
    {
        fName:"sunil",
        lName:"pariyar",
        email:"sunil@hotmail.com"
    },
    {
        fName:"prakash",
        lName:"kandel",
        email:"prakash@hotmail.com"
    }

];


app.use(bodyParser);
app.use(cors());
app.use(router.routes());



router.delete("/:id", async (ctx) => {
    ctx.body = "" ;
    infos.splice(ctx.params.id, 1);
})

router.get("/", async (ctx) => {
    ctx.body = infos;
})

router.post("/", async (ctx) => {
    ctx.body = "";
    infos.push(ctx.request.body);
})
  
  
app.use(async ctx => {
    // if (ctx.method === 'GET') {
    //     ctx.body = infos;
    // }

    // if (ctx.method === 'POST') {
    //     ctx.body = "you made a post request"
    //     // console.log(ctx.request.body.email);
    //     infos.push(ctx.request.body)
    // }

    // if(ctx.method === 'DELETE'){
    //     ctx.body = "you made a delete request"
    //     console.log(ctx.body)
    //     var data = ctx.request.body.email;
    //     // var index = infos.indexOf(ctx.request.body);
    //     // infos.splice(index,1);

    //     let index = null;
    //     infos.forEach((info, i) => {
    //         if (info.email === data) {
    //             index = idx;
    //             return;
    //         }
    //     });
    //     if (index != null) {
    //         infos.splice(index, 1);
    //     }

    // }
});


app.listen((8000), () => 
console.log("Server started at port 8000"));