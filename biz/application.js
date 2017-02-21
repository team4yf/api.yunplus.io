import _ from 'lodash'

export default function(fpm){
	return {
		checkVersion: async function(args){
	    let arg = {
	     table: "cm_version",
	     condition: "delflag = 0 and app = '" + args.app + "'",
	     fields: "id,version,download"
	    }
			let data = await fpm.M.firstAsync(arg);
			return new Promise( (resolve, reject) => {
				if(_.isEmpty(data)){
					reject({errno: -9998})
				}else{
					resolve({data: data})
				}
			});
		}
	}
}
