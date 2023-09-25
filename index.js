var ArrOutput = []

document.getElementById('btn-add').onclick = function (){
    var arrIn = +document.getElementById('array-input').value;
    ArrOutput.push(arrIn)

    document.getElementById('arrDiv').innerHTML = ArrOutput;
}

document.getElementById('btn-sum').onclick = function (){

    var indexSum = 0;

    for (let index = 0; index < ArrOutput.length; index++) {
        indexSum += ArrOutput[index];
    }
    document.getElementById('positiveSum').innerHTML = indexSum;

}