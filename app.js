const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// mongoose.connect("mongodb://localhost:27017/todolistDB")
// const itemsSchema={
//     name:String,
     
// };
// const Item=mongoose.model("Item",itemsSchema);
// const item1=new Item({
//     name: "Welcome to your todolist!"
// });
// const item2=new Item({
//     name: "Hit the + button to add a new item"
// });
// const item3=new Item({
//     name: "Hit this to delete an item"
// });
// const defaultItems=[item1,item2,item3];
// Item.insertMany(defaultItems,function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved defult items to DB");
//     }
// })

app.set('view engine', 'ejs');
let items=[  ];
let workItems=[];
app.get("/",function(req,res){
    let day=date.getDate();

    
    res.render("list",{listTitle:day,newListItem:items});
});
 app.post("/",function(req,res){
    let item=req.body.newItem;
    console.log(req.body.list);
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
     items.push(item);
    res.redirect("/");
    }
 })
 app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItem:workItems});
 })
 app.get("/about",function(req,res){
    res.render("about");
 })
app.listen(3000,function(){
    console.log("Server started at port 3000");
});