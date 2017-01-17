import request from 'superagent'
import { sessionUrl } from './urlConfig.js'

export default {
 	getFeedback(data) {
 		console.log('api')
 		return new Promise((resolve, reject) => {
 			console.log('api promise=' + sessionUrl)
 			request.get('/robotfeedback').query({info: '你好'}).end((err, res) => {
 				console.log(JSON.stringify(res.body) + '--------' + err)
 				if (err) { reject(err) }
 				resolve(res.body)
 			})
 		})
 	}
}