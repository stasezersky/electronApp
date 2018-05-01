module.exports = function countdown(tick) {
    let counter = 10;

    let timer = setInterval(() => {
        tick(counter--);
        // console.log('counter:', counter);
        
        if(counter === 0){
            clearInterval(timer);
        }
    },1000)
}