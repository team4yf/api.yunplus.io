const axios = require('axios');

axios.post('http://api.yunplus.io/webhook/github/p/vr.yunplus.io', {})
    .then(data => {
        console.info(data.data)
    })
    .catch(err => {
        console.error(err)
    })