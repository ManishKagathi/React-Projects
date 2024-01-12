function fizzBuzz(){
    var output=[];
    
        if(count % 3 ===0){
            if(count % 5 ===0){
                output.push("Buzz")
            }
            else{
                output.push("Fizz")
            }
        }
        else{
            output.push(count);
        }
    count++
    }
                console.log(output);

fizzBuzz();

