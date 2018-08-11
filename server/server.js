// graphql.js

const express = require('express')

// const graphqlHTTP = require('express-graphql')

// const router = require('./router.js')
// const router = express.Router()

// const { buildSchema } = require('graphql')

const app = express()
// console.log(router)
// app.use(router)
app.get('/', (req, res) => {
	const time = new Date().getTime()
	res.send('hello world' + time)
})

app.get('/graphql', (req, res) => {
	const time = new Date().getTime()
	res.send('hello world graphql=' + time)
})

app.get('/test', (req, res) => {
	const time = new Date().getTime()
	console.log(res)
	const reString = res.toString() + '|||||||' + time
	res.send(reString)
	// res.render('test', {
	// 	title: 'test',
	// 	Date: time
	// })
})

const server = app.listen(8888, () => {
	const host = server.address().host
	const port = server.address().port

	console.log('listen port:', host, port)
})