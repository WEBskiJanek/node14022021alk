const av_salary = 3500;

//      ---MOJE ROZWIAZANIE---
/* 
const mySalary = getElementById.slary();

if (mySalary < av_salary){
    return #result(`twoje wynagrodzenie jest mniejsze niż średnia krajowa`);
} else if(mySalary > av_salary){
    return #result(`twoje wynagrodzenie jest większe niż średnia krajowa`);
} else{
    #result(`twoje wynagrodzenie jest równe średniej krajowej`);
} 
*/

//  OD KAMILA BASAKA
/*window.onload=function(){​​​​​
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener("submit", logSubmit);
function logSubmit(event) {​​​​​
const salary = document.getElementById('salary').value;
if(salary<2000){​​​​​
log.textContent = `Jestes biedny`;
}​​​​​
else{​​​​​
log.textContent = `Jestes bogaty`;
}​​​​​
 
event.preventDefault();
}​​​​​
}​​​​​

// z tym ze ja dodałem p z id="log"
 */

//      --- ROZWIĄZANIE Z MARCINEM ---

document.getElementById("getSalary").addEventListener("click", zliczanie);

function zliczanie(e) {
    e.preventDefault(); //e - od event, preventDevault jest wbudowaną, standardową metodą do unikania wstawiania odgórnie jakiejś wartości; w tym przypadku znikanie resulta; jeśli dasz conloge.log(e) to w konsoli przeglądarki pojawi się MouseEvent, które możesz rozwinąć i sprawdzić wszystkie właściwości
    const mySalary = document.getElementById("salary").value;

    if (mySalary >= av_salary) {
        document.getElementById("result").innerText =
            "Twoja pensja jest większa lub równa średniej";
    } else {
        document.getElementById("result").innerText =
            "Zarabiasz mniej niż średnia krajowa";
    }
}