function makeRed() {
    document.body.style.backgroundColor = "red";
    
}



const blueButton = document.getElementById("blue-button");

        blueButton.onclick = makeBlue;

        function makeBlue() {
    document.body.style.backgroundColor = "blue";
    
}


const greenButton = document.getElementById("green-button");
        greenButton.onclick = function (){
            document.body.style.backgroundColor = 'green';
        }


const goldenRodButton = document.getElementById("goldenrod-button");
        goldenRodButton.addEventListener('click',makeGoldenRod); 
        function makeGoldenRod (){
            document.body.style.backgroundColor = 'goldenrod';
        }


const hotPinkButton = document.getElementById("hotpink-button");
        hotPinkButton.addEventListener('click',function (){
            document.body.style.backgroundColor = 'hotpink';
        }); 
        