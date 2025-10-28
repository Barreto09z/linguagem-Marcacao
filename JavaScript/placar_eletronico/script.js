function ponto1(){
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerHTML);
    pt1++
    placar.innerHTML = pt1
}

function ponto2(){
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerHTML);
    pt2++
    placar.innerHTML = pt2
}

function zerar(){
      var placar1 = document.querySelector('#pt1');
    var placar2 = document.querySelector('#pt2');
    if(placar1) placar1.innerHTML = '0';
    if(placar2) placar2.innerHTML = '0';

}

function pontom1(){
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerHTML);
    if(pt1 > 0){
      pt1--
    }
    placar.innerHTML = pt1
}

function pontom2(){
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerHTML);
    if(pt2 > 0){
      pt2--
    }
    placar.innerHTML = pt2
}


//Basquete

function ponto1b(ponto){
    var placar = document.querySelector("#pt1b");
    var pt1 = Number(placar.innerHTML);
    pt1++
    placar.innerHTML = pt1
}

function ponto12(ponto){
    var placar = document.querySelector("#pt1b");
    var pt1 = Number(placar.innerHTML);
    pt1 += ponto;
    placar.innerHTML = pt1
}

function ponto13(ponto){
    var placar = document.querySelector("#pt1b");
    var pt1 = Number(placar.innerHTML);
    pt1 += ponto;
    placar.innerHTML = pt1
}



function ponto2b(ponto){
    var placar = document.querySelector("#pt2b");
    var pt2 = Number(placar.innerHTML);
    pt2++
    placar.innerHTML = pt2
}

function ponto22(ponto){
    var placar = document.querySelector("#pt2b");
    var pt2 = Number(placar.innerHTML);
    pt2 += ponto;
    placar.innerHTML = pt2
}

function ponto23(ponto){
    var placar = document.querySelector("#pt2b");
    var pt2 = Number(placar.innerHTML);
    pt2 += ponto;
    placar.innerHTML = pt2
}

function zerarb(){
      var placar1 = document.querySelector('#pt1b');
    var placar2 = document.querySelector('#pt2b');
    if(placar1) placar1.innerHTML = '0';
    if(placar2) placar2.innerHTML = '0';

}



function pontom1(){
    var placar = document.querySelector("#pt1b");
    var pt1 = Number(placar.innerHTML);
    if(pt1 > 0){
      pt1--
    }
    placar.innerHTML = pt1
}


function pontom2(){
    var placar = document.querySelector("#pt2b");
    var pt2 = Number(placar.innerHTML);
    if(pt2 > 0){
      pt2--
    }
    placar.innerHTML = pt2
}