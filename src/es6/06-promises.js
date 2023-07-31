const anotherFuntion = () => {
    return new Promise((resolve, reject)=> {
        if (false) {
            resolve('hey!!');
        } else {
            reject('whooooops!');
        }         
    })
}

anotherFuntion()
  .then(response => console.log(response))
  .catch(err => console.log(err));