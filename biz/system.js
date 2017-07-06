import _ from 'lodash'
import os from 'os'
import fs from 'fs'
import bluebird from 'bluebird'
import path from 'path'
import fetch from 'node-fetch'
const readFileAsync = bluebird.promisify(fs.readFile)

/**
 * StiStrap module
 * @module StiStrap
 * @namespace StiStrap
 * @desc 提供Bootstrap的Vue实现
 */
export default (fpm) => {
const mailSend = bluebird.promisify(fpm.emailer.send)
	return {
		sendMail: async (args) => {
			//get the template
			let arg = {
	     table: "fpm_template",
	     id: args.templateId,
		 	}
			let data, error
			try{
				data = await fpm.M.getAsync(arg)
				args.template = data.content
				data = await mailSend(args)
			}catch(e){
				error = e
			}
			return new Promise( (rs, rj) => {
				if(error){
					rj(error)
				}else{
					rs({ data: data })
				}
			})
		},
		/**
		 * Represents a book.
		 * @param {tpl_id} tpl_id - The title of the book.
		 * @param {tpl_value} tpl_value - The author of the book.
		 */
		sms: async (args) => {
			const APPKEY = '1a6c0e78e6ce02680e1d92b40181d3dc'
			let tpl_id = args.tpl_id || false
			let tpl_value = args.tpl_value || {}
			let mobiles = args.mobiles
			tpl_value = _.map(tpl_value, (v, k)=>{
				return '#' + k + '#=' + v
			}).join('&')
			tpl_value = encodeURIComponent(tpl_value)
			let body = _.map({
					tpl_id: tpl_id,
					key: APPKEY,
					mobile: mobiles,
					tpl_value: tpl_value
				}, (v, k)=>{
					return k + '=' + v
				}).join('&')
			let result = await fetch('http://v.juhe.cn/sms/send?' + body)
				.then(function(res) {
						return res.json();
				})
			return new Promise( (resolve, reject) => {
				resolve({data: result})
				
			})
		},
		show: async (args) => {
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
					startTime: fpm._start_time,
				}
			}catch(e){
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
