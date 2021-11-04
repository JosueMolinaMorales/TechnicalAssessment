function myfun(){
    return "hello";
}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/test' ,(req, res) => {
    res.send(myfun())
})

app.listen(port, () =>{
    console.log(`Example app listening at localhost${port}`)
})

