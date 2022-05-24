var promise = new Promise(function(resolve, reject) {
    const x = "kathish";
    const y = "kathish"
    if(x === y) {
    resolve();
    } else {
    reject();
    }
});

promise.then(function () {
    console.log('Success, You are a kathish');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });