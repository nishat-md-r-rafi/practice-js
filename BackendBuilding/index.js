const express = require('express');
const mongoose = require('mongoose');
const posts = require('./routes/posts');

console.log(sum(1,3))


const app = express();
const dummy = require('./routes/dummy');
mongoose.set('strictQuery', true);

const PORT = 5000 || process.env.PORT 
const url = "mongodb://0.0.0.0:27017/practice";

mongoose.connect(url)
.then(()=> console.log('Connected to MongoDb'))
.catch(err => console.error(err))

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
// app.use('/api/posts', posts )

app.get('/', (req, res) => {
    res.send("hello backend")
})

app.use('/api/dummy', dummy)


app.listen(PORT, ()=>{
    console.log("listening on port", PORT)
})