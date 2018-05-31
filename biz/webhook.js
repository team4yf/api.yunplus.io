import _ from 'lodash'
import path from 'path'

let shellFilePath
const generate = (upstream, type, _fpm) => {
  return async (message, data) => {
    let project = data.url_data
    try {
      let result = 'undefined'
      switch(upstream){
        case 'github':
          console.info(shellFilePath, ['pull', '-' + type, project])
          result = await _fpm.execShell(shellFilePath, ['pull', '-' + type, project])
          break;
        case 'coding':
          result = await _fpm.execShell(shellFilePath, ['pull', '-' + type, project])
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
  shellFilePath = path.join(fpm.get('CWD'), 'shell', 'codepull.sh')
  fpm.subscribe('github/p', generate('github', 'p', fpm))
  fpm.subscribe('github/w', generate('github', 'w', fpm))
  fpm.subscribe('coding/p', generate('coding', 'p', fpm))
  fpm.subscribe('coding/w', generate('coding', 'w', fpm))
}