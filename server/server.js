const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.get('/messeges', (req,res) => {
    
    const messeges = ["hello", "hi","Vue Love you"];

    res.send(messeges);

});

app.listen(port, () => console.log(`server is working ${port}`));