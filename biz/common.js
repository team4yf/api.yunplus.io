import _ from 'lodash'
import M from '../M.js'
let functions = {}
_.forEach(M, (fun, key) => {
	if(!_.isFunction(fun)){
		return
	}
	if(_.endsWith(key, 'Async')){
		return
	}
	functions[key] = async (args) => {
		var data;
		try{
			data = await M[key + 'Async'](args)
			return new Promise( (resolve, reject) => {
				resolve ( {data: data } )
			})
		}catch(e){
			return new Promise( (resolve, reject) => {
				reject( e )
			})
		}
	}
})
export default functions
