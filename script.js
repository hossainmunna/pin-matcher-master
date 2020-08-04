document.getElementById('pinGeneratorBtn').addEventListener('click',function(){
     let generateRandomNumber = Math.floor(1000 + Math.random() * 9000); document.getElementById('randomPinInput').value = generateRandomNumber; 
});


// document.getElementById('pinGeneratorBtn').addEventListener('click',function(){
//      let randomPinInput = document.getElementById ('randomPinInput');
//      //let randomPinInputValue = parseInt (randomPinInput.value);
 
//      let plyRandom = Math.floor (1000 + Math.random() *9000 ) ;
//      //let randomOutput = Math.round (plyRandom)
//      randomPinInput.value = plyRandom;   
// })


document.getElementById('submitBtn').addEventListener('click',function(){
     let randomPinInput = document.getElementById('randomPinInput').value;
     let  randomPinInputValue = parseInt(randomPinInput);
     let keyInput = document.getElementById('keyInput').value;
     let keyInputValue = parseInt(keyInput);
    
     if ( randomPinInputValue  ==keyInputValue) {
          document.getElementById('matched').style.display = 'block';
          document.getElementById('notMatched').style.display = 'none';
     }   
       
     else{
           randomPinInputValue  !== keyInputValue  
              document.getElementById('matched').style.display = 'none';
              document.getElementById('notMatched').style.display = 'block'; 
         }

});
     // else{
     //       if (randomPinInputValue  !== keyInputValue) { 
     //           document.getElementById('matched').style.display = 'none';
     //           document.getElementById('notMatched').style.display = 'block'; }
     //      }
           
          
     
    