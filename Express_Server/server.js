const express = require('express');
const cors = require('cors'); 
const app = express(); 
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{ res.send("I am from Server") });

const user = [
    {
      name: "Bilal",
      age : 21
    },
    {
      name: "Sagar",
      age : 25
    },
  ]

app.post("/", (req, res)=>{ 
    
    user.push(req.body);
    res.json("Welcome"+req.body.name);

});

app.listen( port,()=>{ console.log(`Server is running on port ${port}`)  } );
