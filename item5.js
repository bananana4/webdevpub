function receipt(){

let quizCont = document.getElementsByClassName("quiz-container");

/*btn1 = document.getElementsById("ing");

btn1.addEventListener("click", function () {
  alert("Button is clicked");
});*/

/*var radios = document.querySelectorAll('input[type=radio][name="contact"]');
var radios2 = document.querySelectorAll('input[type=radio][name="contact"][id="apple"]');*/
function row1(){

  var badios = document.querySelector("button")
  

  let apple =  document.querySelector('input[id="apple"]');
  let apricots = document.getElementById("apricots");
  let strawberry = document.getElementById("strawberry");

  let vanilla = document.getElementById("vanilla");
  let flour = document.getElementById("flour");
  let milk = document.getElementById("milk");
  
  let egg = document.getElementById("egg");
  let cream = document.getElementById("cream");
  let sugar = document.getElementById("sugar");
  
  //fs
  let aplVal = parseInt(apple.value);
  let aprVal = parseInt(apricots.value);
  let strVal = parseInt(strawberry.value);

  let vanVal = parseInt(vanilla.value);
  let floVal = parseInt(flour.value);
  let milVal = parseInt(milk.value);

  let eggVal = parseInt(egg.value);
  let creVal = parseInt(cream.value);
  let sugVal = parseInt(sugar.value);
  //gs


  let ingr = []
  let topIngr = [apple,apricots, strawberry];
  let midIngr = [vanilla,flour,milk];
  let botIngr = [egg,cream,sugar];
  let huh = document.querySelector('h2');
  

  badios.addEventListener("click", function(){
    
    for (let i = 0; i < ingr.length; i++){
      
        if (document.querySelector('input[type="radio"]').checked == true){
        
      ingr.push(parseInt(document.querySelector('input[type="radio"]:checked').value));
      }}
    
    huh.innerText = parseInt(document.querySelector('input[id="vanilla"]:checked').value) + parseInt(document.querySelector('input[id="apple"]:checked').value);
  });

  

  //wow.forEach(radio => badios.addEventListener('click', () => alert(all)));
  //return (vanilla + apple)
  
}
row1();
/*let apple = document.querySelectorAll('[id="apple"]');
let vanilla = document.querySelectorAll('[id="vanilla"]');

var badios = document.querySelector("button")

document.querySelectorAll('input[type="radio"][name="contact1]')
    

    return (vanilla + apple)*/

}

receipt();