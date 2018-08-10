// graphql.js

// const express = require('express')

// const graphqlHTTP = require('express-graphql')

// const { buildSchema } = require('graphql')

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, db) => {
	if(err) throw err
		// console.log('graphql created!')
	console.log('mongodb connected!')

	const dbo = db.db('graphql')
	const obj = {name: 'graphql_name', age: 5}
	dbo.collection('test').insertOne(obj, (err, res) => {
		if(err) throw err
			console.log('insert successful!')

		db.close()
	})
	db.close()
})