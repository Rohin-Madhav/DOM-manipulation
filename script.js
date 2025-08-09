function subscribe(){
            const buttenElement = document.querySelector(".btn")

            if(buttenElement.innerText === "subscribe"){
                buttenElement.innerHTML = "subscribed"
            }else{
                buttenElement.innerHTML = "subscribe"
            }
        }