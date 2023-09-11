let buttons = document.querySelectorAll("button")
let result = document.querySelector(".resultat")
const resulttxt = ["Joueur :","robot :","resultat :"]
const resultType = ["pierre","feuille","ciseaux"]

console.log(result)


for(let x=0;x< resulttxt.length;x++)
    {
        let resulttab = document.createElement("p");
        resulttab.innerText = resulttxt[x];
        result.appendChild(resulttab);
            
    }

let   nodevalue = document.querySelectorAll("p")

//const resulttab = result.createElement("p");
    for (let index = 0; index < buttons.length; index++) {
        



        buttons[index].addEventListener('click',()=>{
            //alert("button clicked! "+ index)
            console.log("j :" + index)
            const bot = Math.floor(Math.random(0,buttons.length)*3);
            console.log(bot);
            nodevalue[0].innerText = resulttxt[0]+  resultType[index];
            nodevalue[1].innerText = resulttxt[1]+  resultType[bot];

            nodevalue[2].innerText = resulttxt[2]+  getresultat(index,bot);

            
                //resulttab[3].innerText = resulttxt[index] + ""+index;

                //nodevalue[2].innerText = resulttxt[1]+""+( index - bot);
                


        })
        
        
    };

    function getresultat(index,bot)
    {
        result = (bot - index ) % 3 ;

        console.log(bot + " j = "+ index+" modulo "+ result);
        if (result == 0 )//si eégalité
        {
            return "égualité "
        }

        else if (result == 1 || result == 2 )
        {

            return "bot gagne"
        }

        else
        {
            return " vous gagnez"

        }
    }
    //reecrire dans le dom
