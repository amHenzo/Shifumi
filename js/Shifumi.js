let buttons = document.querySelectorAll("button")
let result = document.getElementsByClassName("resultat")

    for (let index = 0; index < buttons.length; index++) {
        

        buttons[index].addEventListener('click',()=>{
            alert("button clicked! ")
            const bot = Math.random(0,buttons.length);
            console.log(bot)
            

            if( index == bot)
            {
                result.textContent = "égalité";
            }
            else 
            
            result.textContent = "hello world !";

            
            


        })
        
    };
    //reecrire dans le dom
