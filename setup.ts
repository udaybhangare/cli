const createFile = require("./functions/createFile")
const deleteFile = require("./functions/deleteFile")
const useCommands = require("./functions/useCommands")

const fs = require('fs-extra')
const path = require('path')

const indexContent = `console.log(\"Setup done using Uday's CLI!\");`

interface Requirements {
    projectName: string | undefined;
    useSrc: boolean;    
    useTs: boolean;     
    useAxios: boolean;
}
const setup = async (requirements:Requirements):Promise<void>=>{
    const { projectName, useSrc, useTs, useAxios } = requirements;
    let projectDir
    let srcDir

    if(projectName !== undefined){
        projectDir = path.join(process.cwd(),projectName)
        fs.ensureDirSync(projectDir)
    }else{
        projectDir = process.cwd()
    }

    useCommands("bun init",projectDir)

    if(!useTs){
        if(useSrc === true){
            srcDir= fs.ensureDirSync(path.join(projectDir,"src"))
            createFile(path.join(srcDir,"index.js"),indexContent)
            deleteFile(path.join(projectDir,"index.ts"))
        }else{
            createFile(path.join(projectDir,"index.js"),indexContent)
            deleteFile(path.join(projectDir,"index.ts"))
        }
    }else{
        if(useSrc === true){
            srcDir= fs.ensureDirSync(path.join(projectDir,"src"))
            createFile(path.join(srcDir,"index.ts"),indexContent)
            deleteFile(path.join(projectDir,"index.ts"))
        }
    }

    if(useAxios === true){
        useCommands("bun add axios",projectDir)
    }
}

export default setup