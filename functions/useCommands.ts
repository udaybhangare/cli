const { execSync } = require('child_process');

const useCommands = (commands: string, projectDir: string): void=> {
    execSync(commands, { stdio: 'inherit', cwd: projectDir });
}

export default useCommands