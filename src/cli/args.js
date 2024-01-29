const parseArgs = () => {

    const res = [];
    for (let i = 0; i < process.argv.length - 1; i++) {
        if (process.argv[i].startsWith('--')) {
            res.push(process.argv[i].substring(2) + ' is ' + process.argv[i + 1]);
        }
    }
    console.log(res.join(', '));
};

parseArgs();