let count2 = 0, count5 = 0, count7 = 0;
let result =[];
for (let i = 1; i <= 100; i++) {
        
        if (i % 2 === 0 && count2 < 5) {
            result.push(i);
            count2++;
        }

       
        if (i % 5 === 0 && count5 < 5) {
            result.push(i);
            count5++;
        }

        
        if (i % 7 === 0 && count7 < 5) {
            result.push(i);
            count7++;
            break;
        }
    console.log(result);
}