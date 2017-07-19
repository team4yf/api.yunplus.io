import _ from 'lodash'

let _fpm = undefined
const generate = (upstream, type) => {
  return async (message, data) => {
    let project = data.url_data
    try {
      switch(upstream){
        case 'github':
          result = await _fpm.doCommand('yfcode pull -' + type + ' ' + project)
          break;
        case 'coding':
          result = await _fpm.doCommand('yfcode pull -' + type + ' ' + project)
          break;
        default:
          result = 'unknow upstream'
      }
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
}
export default (fpm) => {
  _fpm = fpm
  fpm.subscribe('github/p', generate('github', 'p'))
  fpm.subscribe('github/w', generate('github', 'w'))
  fpm.subscribe('coding/p', generate('coding', 'p'))
  fpm.subscribe('coding/w', generate('coding', 'w'))
}