const express = require('express')

const router = express.Router();

const commonUtil = require('./commonUtil')

// https://blog.csdn.net/sinat_29843547/article/details/61929004

// 路由使用的中间件
router.use((req, res, next) => {
	console.log('time==>', Date.now());
	next()
})

router.all('/', (req, res) => {
	res.send('welcome to my world!')
})

router.all('/addOrModify', (req, res) => {
	const data = getChannelData(req, res)[0];
	const channel = getChannelData(req, res)[1];
	for(key in req.query) {
		data[key] = req.query[key]
	}
	commonUtil.readFile(channel)
	commonUtil.writeFile(channel, data)
	res.send(commonUtil.buildSucJson(data))
})

router.all('/delete', (req, res) => {
	const data = getChannelData(req, res)[0];
	const channel = getChannelData(req, res)[1];
	/* 校验delKey不为空*/

	if (!req.query['delKey']) {
		res.send(commonUtil.buildErrJson('', 'delKey is must!'))

	}
	for(key in data) {
		if(key === req.query['delKey']) {
			delete data[key]
		}
	}
	commonUtil.writeFile(channel, data)
	res.send(data)
})

router.all('/select', (req, res) => {
	const data = getChannelData(req, res)[0];
	const channel = getChannelData(req, res)[1];
	res.send(data)
})

const getChannelData = (req, res) => {
	console.log(typeof(req.query['channel']))
	if(typeof(req.query['channel']) == 'undefined') {
		res.send(commonUtil.buildErrJson('', '请配置渠道'))
	}
	const channel = req.query['channel']

	try{
		let data = require('../data/' + channel)
	}
	catch(err) {
		res.send(commonUtil.buildErrJson('', '没有对应的渠道'))
	}
	if(typeof(data) == 'undefined') {
		data = {}
	}
	console.log('请求的参数：', req.query)
	return [data, channel]
}	
module.exports = router