//Problem: 1
function anaToVori(ana){
    if(typeof(ana)=="number") //input verification
    {
        if(ana>=0) //I assume that 0 is a valid input in that case.
        {   
            let vori = ana/16;
            return vori;
        }
        else{
            return "Ana Value Should be greater than or Equal to 0";
        }
    }
    else{
        return "Enter Ana Value as an Number";
    }
}


//Problem: 2
function pandaCost(singaraQty, somuchaQty, jilipiQty){
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilipuPrice = 15;

    if(typeof(singaraQty)=="number" && typeof(somuchaQty)=="number" && typeof(jilipiQty)=="number") // inpuit verification
    {     
        if(singaraQty>=0 && somuchaQty>=0 && jilipiQty>=0) //I assume that 0 is a valid input in that case.
        {
            costOfSingara = singaraQty*singaraPrice;
            costOfSomucha = somuchaQty*somuchaPrice;
            costOfJilipi = jilipiQty*jilipuPrice;

            let totalCost = costOfSingara+costOfSomucha+costOfJilipi;
            return totalCost;
        }
        else{
            return "Singara Somucha and Jilipi quantity should be greater than or equal to 0";
        }

    }
    else{
        return "Input Should be Integer";
    }
}


//Problem: 3
function picnicBudget(person) {
    let budget = 0; //used for total budget
    const first100 = 5000; // for 0 to 100
    const second100 = 4000; //for 101 to 200
    const thirdslot = 3000; //for 201+

    if(typeof(person)=="number") //input verification
    {
        if(person >=0) //I assume that 0 is a valid input in that case.
        {
            if(person<=100){
                budget = first100*person;
                return budget;
            }
            else if(person>100 && person<=200){
                budget = (first100*100) + (second100*(person-100));
                return budget;
            }
            else{
                budget = (first100*100) + (second100*100)+(thirdslot*(person-200));
                return budget;
            }
        }
        else{
            return "Input must be grteater than or equal to 0";
        }        
    }
    else{
        return "Input must be an Integer";
    }
}


//Problem: 4
function oddFriend(friendNames) 
{
    let isString = 0; //used for input verfication
    let oddFriendName; //used to return
    
    if(Array.isArray(friendNames)) // input verification, if input is an array or not
    {
        if(friendNames.length>0) //checking if array length is greater than 0 or not.
        {
            //checking all inputs are string or not
            for(let i=0; i<friendNames.length; i++){
                if(typeof(friendNames[i])=="string"){
                    isString +=1;
                }
                else{
                    return "All The names must be String";
                }
            }
    
            if(isString == friendNames.length) // this part will execute if all inputs in array are strings
            {
                let oddCOunter = 0; //used for counting the number of odd names
                for(let i=0; i<friendNames.length;i++)
                {   //checking if array has any odd name or not
                    if(friendNames[i].length % 2 != 0){
                        oddCOunter +=1;
                    }

                    else{
                        continue;
                    }
                    
                }

                if(oddCOunter !=0) //if the array has any odd name then this code will execute.
                { 
                    for(let i=0; i<friendNames.length;i++){
                        if(friendNames[i].length % 2 != 0){
                            oddFriendName= friendNames[i];
                            return oddFriendName;
                        }
                        else{
                            continue;
                        }
                    }
                }
                else{
                    return "There is no name with Odd number of characters";
                }
            }
        }
        else{
            return "Input array size must be greater than 0";
        }

    }
    else{
        return "Input must be an array";
    }

}

