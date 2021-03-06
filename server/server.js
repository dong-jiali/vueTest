// graphql.js

const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
// const apolloClient = require('apollo-client')
// const gtag = require('graphql-tag')
// const { buildSchema } = require('graphql')
// const apollo = require('apollo-server-express')
// const graphiqlExpress = apollo.graphiqlExpress()
// const graphqlExpress = apollo.graphqlExpress()
// const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
// import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
const { makeExecutableSchema } = require('graphql-tools')
// import { makeExecutableSchema } from 'graphql-tools'
// const router = require('./router.js')
// const router = express.Router()
const mongoose = require('mongoose')
const { buildSchema } = require('graphql')
const users = require('./user.js')
mongoose.connect('mongodb://127.0.0.1:27017/chengdu')

// const db = mongoose.connection;

/*

	name: String,
	age: Number,
	userid: String,
	pass: String,
	status: Boolean,
	description: String
*/

const user = users.user

const app = express()
// console.log(router)
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
// app.use(router)

app.get('/', (req, res) => {
	const time = new Date().getTime()
	res.send('hello world' + time)
})



// app.use('/graphiql', graphiqlExpress({
// 	endpointURL: '/graphql'
// }))

app.get('/api/user/:id', urlencodedParser, (req, res) => {
	const id = req.params.id
	// console.log(id)
	user.find({_id: id}, (req, user) => {
		const data = user[0]
		res.send(data)
	})
	// res.send('dataid===>' + id)
})
const root = {
	user: {
		_id: '5c6ef1d908ec991ac0209192',
		name: 'brian',
		sex: '男',
		pass: '666666',
		userid: 'IT界大佬，世界十大隐式福布斯富豪1',
		status: 'false',
		description: 'this is a description'
	}
}

function getData() {
	const dataList =  {}
	// user.aggregate({}, (req, count) => {
		user.find({}, (req, result) => {
			// console.log('user====111111111>', result)
			dataList.user = result
			// res.send(data)
			return dataList
		})
	// })
	// console.log('222222===>', dataList)
	// return dataList
}
const typeDefs = `
	type User {
		_id: String,
		name: String,
		age: String,
		userid: String,
		pass: String,
		status: String,
		description: String
	}
	type Query{
		user(_id: String): User
	}
	schema {query: Query}
`

const schema = buildSchema(`
	type User {
		_id: String,
		name: String,
		age: String,
		userid: String,
		pass: String,
		status: String,
		description: String
	}
	type Query{
		user(_id: String): User
	}
`)

const resolvers = {
	Query: { user({ id }) {
		console.log('user11111111111111====', id)
		return http.get(`/api/user/${id}`)
	}}
}

const modelSchema = makeExecutableSchema({
	typeDefs,
	resolvers
})
app.use('/api/graphql', graphqlHTTP({ modelSchema }))
app.use('/api/userGraphql', graphqlHTTP({
		schema: typeDefs,
		// rootValue: root,
		rootValue: getData(),
		graphql: true
	})
)


app.get('/api/user', urlencodedParser, (req, res) => {
	
	// console.log(data)
	user.count({}, (req, count) => {
		user.find({}, null, {skip: 1, limit: 5}, (req, user) => {
			const data = user
			res.send(data)
		})
	})
})

app.post('/api/testForm', jsonParser, (req, res) => {
	const time = new Date().getTime()
	// res.send('hello world graphql=' + time)
	// console.log(req)
	console.log(req.body)
	const query_data = req.body;
	(() => {
		// user.count(query_data, (err, doc) => {
		if (query_data.userid && query_data.pass) {
				// const data = query_data.userid + ': login successful in ' + time
				// console.log(data)
				// const 
				const userEntity = new user(query_data)
				userEntity.save()
				res.send(query_data)
			} else {
				const data = query_data.userid + ': login failed in ' + time
				console.log(data)
				res.send(data)
			}
		// })
	})(query_data)

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