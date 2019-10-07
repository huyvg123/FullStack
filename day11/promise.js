let newPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Ngoc');
    }, 3000);
});

let newPromise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1);
    }, 1000);
});

let newPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(2);
    }, 2000);
});

let newPromise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(3);
    }, 3000);
});

async function getResult() {
    let result = await Promise.all([newPromise1, newPromise2, newPromise3]);
    return result;
}

getResult().then(function(data) {
    console.log(data);
})