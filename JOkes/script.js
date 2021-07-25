


const jokeMaro = document.querySelector("#jokeMaro")
const joke = document.querySelector("#joke")

const funnyFun = async ()=>{
    
    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    const mainJoke = await fetch('https://icanhazdadjoke.com/',setHeader);
    const dataJoke = await mainJoke.json();
    joke.innerHTML = dataJoke.joke;
    }catch(error){
        console.log(`the error is there of ${error}`);
    }
}



jokeMaro.addEventListener('click',funnyFun)
funnyFun()