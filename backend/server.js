const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let criminals = [];

app.get("/",(req,res)=>{

res.send("🦇 BATCOM Backend Online — Gotham Protected");

});

// Get criminals

app.get("/criminals",(req,res)=>{

res.json(criminals);

});


// Add criminal

app.post("/criminals",(req,res)=>{

criminals.push({

name:req.body.name,
captured:false

});

res.json({message:"Criminal Added"});

});


// Toggle captured

app.put("/criminals/:id",(req,res)=>{

criminals[req.params.id].captured =
!criminals[req.params.id].captured;

res.json({message:"Status Updated"});

});


// Threat eliminated (delete)

app.delete("/criminals/:id",(req,res)=>{

criminals.splice(req.params.id,1);

res.json({message:"Threat Eliminated"});

});

app.listen(5000,()=>{

console.log("🦇 Gotham Server Running in port 5000");

});
