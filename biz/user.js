import _ from 'lodash'
import M from '../M.js'

export default {
	login: function(args){
		return new Promise( (resolve, reject) => {
			resolve({
				data:{
					device: '12312312312312',
					domain: 'http://www.hchome.net'
				}
			})
		})
	},
	logout: function(args){
		return new Promise( (resolve, reject) => {
			reject({ errno: 1003} )
		})
	}

}
