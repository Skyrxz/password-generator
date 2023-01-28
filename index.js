const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const charactersWithoutSymbols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];

const charactersWithoutNumbers = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const charactersWithoutNumbersAndSybols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

let pass = '';
let pass2 = '';
let pass1El = document.querySelector("#pass1El");
let pass2El = document.querySelector("#pass2El");
let noSymbols = document.querySelector("#no-symbols-el")
let noNumbers = document.querySelector("#no-numbers-el")



function passwordGenerator(){
    let pass = '';
    let pass2 = '';
    
    if(noNumbers.checked === true && noSymbols.checked === false){
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbers.length );
            pass += charactersWithoutNumbers[randomIndex];
        }
        
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbers.length );
            pass2 += charactersWithoutNumbers[randomIndex];
        }
        
    } else if(noNumbers.checked === false && noSymbols.checked === true){
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutSymbols.length );
            pass += charactersWithoutSymbols[randomIndex];
        }
        
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutSymbols.length );
            pass2 += charactersWithoutSymbols[randomIndex];
        }
    } else if(noNumbers.checked === true && noSymbols.checked === true){
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbersAndSybols.length );
            pass += charactersWithoutNumbersAndSybols[randomIndex];
        }
        
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbersAndSybols.length );
            pass2 += charactersWithoutNumbersAndSybols[randomIndex];
        }
    } else {
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * characters.length );
            pass2 += characters[randomIndex];
        }
        
        for(i = 15; i != 0; i--){
            let randomIndex = Math.floor( Math.random() * characters.length );
            pass += characters[randomIndex];
        }
    }
    
    pass1El.textContent = pass;
    pass2El.textContent = pass2;
    
}
