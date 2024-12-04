// Function to apply the operations and return results
function processNumbers() {
    let results = [];

   
    for (let i = 0; i <= 100; i++) {
        let originalNumber = i;
        
       
        if (i % 2 === 0) {
            console.log ("no is ",originalNumber);
            i = i * 5;
          
        }
        
       
        if (i % 3 === 0) {
            console.log ("no is ",originalNumber)
            i = i / 3;
        }

      
        if (originalNumber !== i) {
            results.push(`Original: ${originalNumber}, Final: ${i}`);
        }
    }

   
    return results;
}


let modifiedNumbers = processNumbers();
console.log(modifiedNumbers);
