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
		},
		// 注册设备
		register: async (args) => {
			let arg = {
	     table: "fpm_reg_code",
	     condition: "delflag = 0 and status = 0 and code = '" + args.code + "'",
			 row:{ status: 1, bind_id: args.bind_id}
	    }
			let count = await fpm.M.countAsync(arg)
			if (count === 1) {
				// 绑定数据
				await fpm.M.updateAsync(arg)
				// fpm.M
			}

		}
	}
}
