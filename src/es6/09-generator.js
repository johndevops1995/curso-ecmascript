
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['John', 'david', 'ana', 'jenifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);