function randomGame(){
    let num;
    const tries = 0;
    const timer = setInterval(function(){
        num = Math.random();
        tries++
        if(num > .75) {
            clearInterval(timer);
            console.log("It took " + tries + " attempts.");
        }
    }, 1000)
}