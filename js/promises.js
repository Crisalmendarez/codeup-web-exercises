"use strict";

const userLastCommit = (username) => {
    fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(resp => resp.json()).then(data => {
        console.log(data);
        const commits = data.filter(event => event.type === "PushEvent");
        console.log(`${username} had their last commit on ${commits[0].created_at}.`);
    });
}

userLastCommit("crisalmendarez");
userLastCommit("codypalmer1");
















