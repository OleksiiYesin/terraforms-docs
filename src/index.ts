import simpleGit from 'simple-git';

const gitRepo = 'git@github.com:OleksiiYesin/terraforms-docs.git';
const tempFolder = 'bla-bla';

const git = simpleGit()


const options = ['--depth', '1'];
const callback = () => {
    console.log('Done cloning!');      
    // Now change some code in the cloned code 
    // and commit && push 
};

// Cloning ...
git.outputHandler((command, stdout, stderr) => {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr)

    stdout.on('src/index.ts', (data) => {
        // Print data
        console.log(data.toString('utf8'));})
    })
    .clone(gitRepo, tempFolder, options, callback);

git.add('.')
git.status()