import axios from 'axios'
import { sessionUrl } from './urlConfig.js'

export default {
 	getFeedback(data) {
 		console.log(data + 'data-----')
 		return axios.get('/robotfeedback', {
 				params: {
 					info: data 				}
 			}).then(function(response) {
 				console.log(response.data)
 				return response.data
 			})
 		}
}