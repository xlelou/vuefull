import axios from 'axios'
import { sessionUrl } from './urlConfig.js'

export default {
 	getFeedback(data) {
 		return axios.get('/robotfeedback', {
 				params: {
 					info: data 				}
 			}).then(function(response) {
 				return response.data
 			})
 		}
}