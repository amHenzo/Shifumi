let buttons = document.querySelectorAll("button")


    buttons.forEach(button => {

        button.addEventListener('click',()=>{
            const bot = Math.random(0,buttons.length);
            let result = document.getElementsByClassName("resultat")
            result.textContent = "hello world !";

            


        })
        
    });
    //reecrire dans le dom
