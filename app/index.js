const app = require("express")();
const appid = process.env.APPID;
const port = 9999;

app.get("/", (req, res)=>{
    res.send(`appid: ${appid} home page: say hello!!`);
});

app.get("/app1", (req, res)=>{
    res.send(`appid: ${appid} app1 page: say hello!!`);
});

app.get("/app2", (req, res)=>{
    res.send(`appid: ${appid} app2 page: say hello!!`);
});

app.get("/admin", (req, res)=>{
    res.send(`appid: ${appid} admin page: say hello!!`);
});

app.listen(appid,()=> console.log(`${appid} is listen ${appid}`))