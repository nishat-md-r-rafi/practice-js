const express = require('express');




const PORT = 5000 || process.env.PORT 
const app = express();

app.get('/', (req, res) => {
    res.send("hello backend")
})


app.listen(PORT, ()=>{
    console.log("listening on port", PORT)
})