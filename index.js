var ArrOutput = []


document.getElementById('btn-add').onclick = function (){

    var arrIn = +document.getElementById('array-input').value;
    ArrOutput.push(arrIn)

    document.getElementById('arrDiv').innerHTML = ArrOutput;
}

document.getElementById('array-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn-add').click();
    }
});

//b1

document.getElementById('btn-sum').onclick = function (){

    var indexSum = 0;

    for (let index = 0; index < ArrOutput.length; index++) {
        if (ArrOutput[index] >= 0) {
            indexSum += ArrOutput[index];
        }
    }
    document.getElementById('positiveSum').innerHTML = indexSum;

}

//B2


document.querySelector("#btn-count-pos").onclick = function() {

    var countPositive = 0;
    
    for (let index = 0; index < ArrOutput.length; index++) {
        if (ArrOutput[index] >= 0) {
            countPositive++;
        }
    }
    document.querySelector("#positiveCount").innerHTML = countPositive;

}


//b3

document.querySelector('#btn-pos-min').onclick = function (){

    var indexMin = -1;
    var min = ArrOutput[0];
    indexMin = 0;

    for (let index = 0; index < ArrOutput.length; index++) {
        if (ArrOutput[index]< min) {
            min = ArrOutput[index]
            indexMin = index;
        }        
    }

    var minNumber = ArrOutput[indexMin];

    document.querySelector('#positiveMin').innerHTML = minNumber;
}
