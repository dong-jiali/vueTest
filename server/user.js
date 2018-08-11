// graphql.js

// const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
	userid: String,
	password: String
});

exports.user = mongoose.model('users', userSchema)

// const graphqlHTTP = require('express-graphql')

const product = require('./src/product.js')

// const { buildSchema } = require('graphql')

const app = express()

app.get('/', (req, res) => {
	const time = new Data().getTime()
	res.send('hello world', time)
})

app.use('/product', product)

const server = app.listen(8888, () => {
	const host = server.address().host
	const port = server.address().port

	console.log('listen port:', host, port)
})