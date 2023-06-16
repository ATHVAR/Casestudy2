const mongoose = require('mongoose')

mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('Mongo DB connection established successfully')
})
.catch(err => console.log('Error connecting', err.message))