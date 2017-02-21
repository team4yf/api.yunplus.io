import _ from 'lodash'

export default (fpm) =>{
	let functions = {}
	_.forEach(fpm.M, (fun, key) => {
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
	return functions
}
