// enahced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("jfspeed", 43, "CO", 1));