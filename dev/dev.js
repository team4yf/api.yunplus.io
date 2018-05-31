'use strict';
import { Fpm } from 'yf-fpm-server'
import biz from './biz'

const fpm = new Fpm()
fpm.addBizModules(biz(fpm))

fpm.run()
    .then(() => {
        console.info('ready to go')
    })

