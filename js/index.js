let minItem = document.querySelector('#min'),
    secItem = document.querySelector('#sec');

let countDown = () => {
    let futureDate = new Date (2021, 09,27, 18, 0, 0);
    let currentDate = new Date ();
    let myDate = futureDate - currentDate;
    
    let min = Math.floor(myDate/1000/60)%60;
    let sec = Math.floor(myDate/1000)%60;

    if(myDate>=0){
        minItem.innerHTML = min;
        secItem.innerHTML = sec;
    } else {
        minItem.innerHTML = 0;
        secItem.innerHTML = 0;
    }
    
}

countDown();

setInterval(countDown, 1000);