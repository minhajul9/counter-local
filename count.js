
document.getElementById('btnCount').addEventListener('click', function(){
    const text = document.getElementById('counter');
    let num = text.innerText;
    num = parseInt(num) + 1;
    setNumber(num);
    setCounterToLocalStorage(num);
});

const setCounterToLocalStorage = num => {
    localStorage.setItem('num', num); 
}

const fetchNumberFromLocalStorage = () => {
    const localNumber = localStorage.getItem('num');
    if(localNumber){
        setNumber(localNumber);
    }
}

const setNumber = num => {
    const text = document.getElementById('counter');
    text.innerText = num;
}

fetchNumberFromLocalStorage();