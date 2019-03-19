const _ = require('lodash')
const os = require('os')
const path = require('path')
const debug = require('debug')('system');

module.exports = (fpm) =>{
	return {
		doCommand: async(args) => {
			return fpm.doCommand(args.command)
		},
		show: async (args) => {
			try{
				const info = require(path.join(__dirname, '../../package.json'))
				const data = {
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
					counter: fpm._counter,
					startTime: fpm._start_time,
        }
        
        return { data };
			}catch(e){
        debug('%o', e);
        return Promise.reject({ errno: -9998, error: e })
			}
		}
	}

}
