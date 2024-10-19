const fs = require('fs-extra')

const createFile = (filename:string):void=>{
    fs.unlink(filename)
}

export default createFile