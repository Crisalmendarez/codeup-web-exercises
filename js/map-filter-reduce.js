const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//1.
const jacksOfAllTrades = users.filter(user => user.languages.length >= 3);

console.log(jacksOfAllTrades);

//2.
const emails = users.map(({email}) => email);

console.log(emails)

//3.
const yearsOfExp = users.reduce((total , user) => {
   return total + user.yearsOfExperience
}, 0);

const averageYearsOfExp = yearsOfExp / users.length;
console.log(`Years of experience ${yearsOfExp}`);
console.log(`Average years of experience ${averageYearsOfExp}`);

//4.
const longestEmail = users.reduce((email, user) => (email.length > user.email.length) ? email : user.email, "")
console.log(`Longest email ${longestEmail}`);

//5.


const instructIntro = users.reduce((names, user, index) => {
    if (index != users.length - 1) {
        return `${names}${user.name}, `;
    } else {
        return `${names}and ${user.name}.`
    }
}, "Your instructors are: ");
console.log(instructIntro);
