const fetch = require('node-fetch');

function checkResult(res) {
    if (res.ok) {
        return 'The result was OK';
    } else {
        console.log(res)
        return 'The result was FAILUR';
    }
}

async function testConnect() {
    // tests the home page
    try {
        const getHomePage = await fetch('http://localhost:3000', { method: 'GET' });
        console.log('Tests the home page with GET method. ' + checkResult(getHomePage));
    } catch (err) {
        console.log(err.message);
    }

    //tests the signup
    try {
        const random_username = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        const bodySignUp = {fullname: random_username, email: random_username + "@gmail.com", password: "123456"};
        
        let signup = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST', body: JSON.stringify(bodySignUp)
        })
        console.log('Tests the sign up page with POST method and random user. ' + checkResult(signup));
        console.log('The user ' + random_username + ' has been created successfully')
    } catch (err) {
        console.log(err.message);
    }

    // //tests the signin
    try{
        const bodySignIn = {
            email: random_username + "@gmail.com",
            password: "123456",
            isRemembered: "false",
        };
        let signIn = await fetch('http://localhost:3000/api/auth/signin', {
            method: 'POST', body: JSON.stringify(bodySignIn)
        })
        console.log('Tests the sign in page with POST method. ' + checkResult(signIn));
    } catch (err) {
        console.log(err.message);
    }    
}
testConnect().then(res => { });
