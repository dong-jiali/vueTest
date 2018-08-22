// graphql.js

// const express = require('express')

// const graphqlHTTP = require('express-graphql')

// const { buildSchema } = require('graphql')

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017'

// MongoClient.connect(url, (err, db) => {
// 	if(err) throw err
// 		// console.log('graphql created!')
// 	console.log('mongodb connected!')

// 	const dbo = db.db('graphql')
// 	const obj = {name: 'graphql_name', age: 5}
// 	dbo.collection('test').insertOne(obj, (err, res) => {
// 		if(err) throw err
// 			console.log('insert successful!')

// 		db.close()
// 	})
// 	db.close()
// })

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect error!'))

db.once('open', () => {
	console.log('connected!')
})

const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
	date: String
})

const PersonModel = db.model('Person', personSchema)
const time = new Date().getTime().toString()
const personEntity = new PersonModel({ name: 'test112', age: 1033, date: time})

// personSchema.methos.speak = function () {
// 	console.log('this data is=', this.name)
// }
// personEntity.speak()

personEntity.save()