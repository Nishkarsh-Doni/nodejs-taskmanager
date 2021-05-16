const mongoose = require('mongoose')

//Run Database
// f:/1698659/mongodb/bin/mongod.exe --dbpath=f:/1698659/mongodb-data

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
