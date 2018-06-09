import _ from 'lodash'
import os from 'os'
import path from 'path'

export default (fpm) => {
	return {
		doCommand: async(args) => {
			return fpm.doCommand(args.command)
		},
		show: async (args) => {
			let data = {};
			try{
				let info = require(path.join(__dirname, '../package.json'))
				data = {
					arch: os.arch(),
					cpus: os.cpus(),
					hostname: os.hostname(),
					platform: os.platform(),
					type: os.type(),
					release: os.release(),
					freemem: Math.ceil(os.freemem() / 1024 / 1024),
					totalmem: Math.ceil(os.totalmem() / 1024 / 1024),
					uptime: os.uptime(),
					server: info,
					startTime: fpm._start_time,
				}
			}catch(e){
				fpm.logger.error(e)
			}
			return new Promise( (resolve, reject) => {
				if(_.isEmpty(data)){
					reject({errno: -9998})
				}else{

					resolve({data: data})
				}
			})
		}
	}

}
