const parseEnv = () => {

    const res = [];
    for (let variable in process.env) {
        if (variable.startsWith('RSS_'))
            res.push(`${variable}=${process.env[variable]}`);
    }
    console.log(res.join('; '));
};

parseEnv()