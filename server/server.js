const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


let messeges = ["hello", "hi","Vue Love you"];

app.get('/messeges', (req,res) => {
    

    res.send(messeges);

});



app.post('/messeges', (req,res) => {
    let msg = req.body;
    console.log(msg);
    messeges.push(msg.message);
  })

app.listen(port, () => console.log(`server is working ${port}`));