import _ from 'lodash'
import moment from 'moment'
import { baidu } from 'yf-website-tool'

export default function(fpm){
	return {
    check: async () => {
      // for(let i = 0; i < config.baidu.sites.length; i++){
      //   let site = config.baidu.sites[i]
      //   let data = {domain: site.domain}
      try{
        let sites = await fpm.M.findAsync({
          table: 'fpm_baidu_site',
          condition: 'delflag = 0'
        });
        sites = _.map(sites, site => {
					site.result = JSON.parse(site.result)
					site.keywords = JSON.parse(site.keywords)
					site.urls = false
					return site;
        })
				for(let i = 0; i < sites.length; i++){
					let site = sites[i]
					let data = {}
					data.domain = site.domain
					data.site = await baidu.spider.checkSite(site.domain)
          data.keywords = await baidu.spider.checkKeywords(site)
          data.push = await baidu.pusher.pushUrls(site)
					///*
          let mailData = {
            templateId: 2,
            to: site.result.to,
            subject: site.domain + '@' + moment().format('MM/DD HH:mm'),
            data: data,
          }
          data = await fpm.execute('system.sendMail', mailData, '0.0.1')
					console.log(data)
					//*/
				}

      }catch(e){
        console.log(e)
      }
      return {
        data: 1
      }
    }
  }
}
