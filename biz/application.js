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
			return new Promise( (resolve, reject) => {
				console.log(count)
				if (count !== 1) {
					console.log('errno')
					reject({errno: -9997, message: 'No Reg Code'})
					return
				}
				// 绑定数据
				fpm.M.transation(function(err, atom){
					let _now = _.now()
					atom.update({
							table: "fpm_reg_code",
							condition: "delflag = 0 and status = 0 and code = '" + args.code + "'",
							row: { status: 1, bind_id: args.bind_id, updateAt: _now}
						}, function(err, result1){
						if(err){
							atom.rollback();
							reject(err)
							return 
						}
						obj = {
						　table: "fpm_device",
							row:{ bin: args.bind_id, createAt: _now, updateAt: _now, domain: 'game-plugin', activeAt: _now, activeflag: 1}
						}
						atom.create(obj, function(err, result2){
							if(err){
								atom.rollback(function(){
									reject(err)
								});
							}else{
								atom.commit(function(err){
									resolve({errno: 0})
								});
							}
						});
					});
				});
			
			})
			

		}
	}
}
