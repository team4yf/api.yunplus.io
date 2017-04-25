import _ from 'lodash'

export default function(fpm){
	return {
    // DROP TABLE 
    drop: async (args)=>{
      const name = args.name
      let dropSql = `drop table if exists ${args.name}`
      let data = await fpm.M.commandAsync({ sql: dropSql });
			return new Promise( (resolve, reject) => {
				if(_.isEmpty(data)){
					reject({errno: -9998})
				}else{
					resolve({data: data})
				}
			})
    },
    //创建表
    // name: table's name
    // cols: {name: '', type: '', isNull: false, default: '', comment: ''}
		create: async function(args){
      const name = args.name
      // let column = `ALTER TABLE test_table ADD name VARCHAR(200) NOT NULL DEFAULT 'untitled' COMMENT 'name'`
      let colsSql = _.map(args.cols, (col) => {
        let s_isNull = col.isNull === false? ' NOT NULL' : ' NULL'
        let s_default = _.isEmpty(col.default)? '': ` DEFAULT '${col.default}'`
        let s_comment = _.isEmpty(col.comment)? '': ` COMMENT '${col.comment}'`
        return `${ col.name } ${ col.type }${ s_isNull }${s_default}${ s_comment },\n`
      }).join('')
	    let command =
        `CREATE TABLE ${name} 
        ( id INT NOT NULL AUTO_INCREMENT COMMENT 'id', 
        ${ colsSql }
        delflag TINYINT NOT NULL DEFAULT '0' COMMENT 'delete flag', 
        createAt BIGINT NOT NULL COMMENT 'create time', 
        updateAt BIGINT NOT NULL COMMENT 'update time', 
        PRIMARY KEY (id) ) 
        ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 
        COMMENT = '${name}'`
			let data = await fpm.M.commandAsync({ sql: command });
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
