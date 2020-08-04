// document.getElementById('pinGeneratorBtn').addEventListener('click',function(){
//      let generateRandomNumber = Math.floor(1000 + Math.random() * 9999); document.getElementById('randomPinInput').value = generateRandomNumber; });


document.getElementById('pinGeneratorBtn').addEventListener('click',function(){
     let randomPinInput = document.getElementById ('randomPinInput');
     //let randomPinInputValue = parseInt (randomPinInput.value);
 
     let plyRandom = Math.floor (1000 + Math.random() *9000 ) ;
     //let randomOutput = Math.round (plyRandom)
     randomPinInput.value = plyRandom;   
})


