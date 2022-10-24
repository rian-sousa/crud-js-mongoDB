const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://riansousa:P14159265@crud-node.v7ggx7a.mongodb.net/://localhost:3000'

app.use(bodyParser.urlencoded({ extended: true}))

MongoClient.connect(uri,{ useNewUrlParser: true}, (err, client) =>{
    if(err) return console.log(err)
    db = client.db('crud-node')

    app.listen(3000, () =>  {
        console.log("Servidor ligado na porta 3000")
    })
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let cursor = db.collection('data').find()
})



app.post('/show', (req, res) => {
    db.collection('data').insertOne(req.body, (err, result) => {
        if(err) return console.log(err)

        console.log('salvo no db')
        res.redirect('/')
        db.collection('data').find().toArray((err, results) => {
            console.log(results)
        })
    })
})