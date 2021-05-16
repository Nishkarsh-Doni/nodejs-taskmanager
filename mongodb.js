//CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id) // Print new id to the console 

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 25
    //    }).then((result) => {
    //     console.log(result)
    //    }).catch((error) => {
    //     console.log(error)
    //    })

       db.collection('tasks').deleteOne({
        description: "Clean the house"
       }).then((result) => {
        console.log(result)
       }).catch((error) => {
        console.log(error)
       })

})











//CREATE

    // db.collection('users').insertOne({
    //     name: 'Nishkarsh',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 22
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, 
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

//READ

// db.collection('tasks').findOne({_id: new ObjectID("5e81c0e6c4ac1630fc9d896f")},(error,task)=>{
//     console.log(task)
// })

// db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
//     console.log(tasks)
// })

//UPDATE

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e81be9504e94a450805e1ae")
    // }, {
    //     // $set: {
    //     //     name: 'Amy'
    //     // }
    //     $inc:{
    //         age : 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })