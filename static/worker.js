console.log('web worker loaded=====>')

this.addEventListener('message', e => {
	console.log('addEventListener===>', e)
	this.postMessage(e.data)
}, false)