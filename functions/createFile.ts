const fs = require('fs-extra')

const createFile = (filename:string, content:string):void=>{
    fs.writeFileSync(filename, content)
}

export default createFile