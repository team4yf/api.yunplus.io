import _ from 'lodash'
import os from 'os'
import fs from 'fs'
import bluebird from 'bluebird'
import path from 'path'

const readFileAsync = bluebird.promisify(fs.readFile)
export default {
	show: async function(args){
		let data = {};
		try{
			let info = JSON.parse(await readFileAsync(path.join(__dirname, '../package.json'), 'utf-8'))
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
				startTime: global.__startTime,
			}
		}catch(e){
		}
		return new Promise( (resolve, reject) => {
			if(_.isEmpty(data)){
				reject({errno: -9998})
			}else{

				resolve({data: data})
			}
		});
	}
}
