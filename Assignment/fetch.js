const username = "rahulrai19";

const url = `https://api.github.com/users/${username}`;

const pr = fetch(url);
pr.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

pr.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

pr.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
