//selecting some needed items first
let inpbase=document.querySelector('#inpbase');
let inpto=document.querySelector('#inpto');
let pin=document.querySelector('#in');
let pout=document.querySelector('#out');


let baseIsEntered=false;
let toIsEntered=false;
//implementing getDataFrom and setDataTo functions to change values of input panels dynamically
function getDataFrom(source){
    //return inpbase.value;
    return source.value;
}
function setDataTo(target,newValue){
    //inpto.value=newValue;
    target.value=newValue;
}


//implementing events for currency buttons
let base;
let to;
let btnsBase=document.querySelectorAll('.base');
let btnsTo=document.querySelectorAll('.to');
/*for input panel*/
function addEventFromToTo(){
for(let i=0;i<btnsBase.length;i++){
    //console.log(btns[i]);
    btnsBase[i].addEventListener('click',function(){
        for(let j=0;j<btnsBase.length;j++){
            btnsBase[j].style.background='transparent';
        }
        btnsBase[i].style.background='#833AE0';
        base=btnsBase[i].textContent;
        if(to!==undefined && baseIsEntered===true){//for the first time user can forget to choose output currency,so we should consider this
            fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`});

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
        }
    })


    btnsTo[i].addEventListener('click',function(){
        for(let j=0;j<btnsTo.length;j++){
            btnsTo[j].style.background='transparent';
        }
        btnsTo[i].style.background='#833AE0';
        to=btnsTo[i].textContent;
        if(base!==undefined && baseIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
            fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`});

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
        }
    })
}
}

function removeEventFromToTo(){
    for(let i=0;i<btnsBase.length;i++){
        //console.log(btns[i]);
        btnsBase[i].removeEventListener('click',function(){
            for(let j=0;j<btnsBase.length;j++){
                btnsBase[j].style.background='transparent';
            }
            btnsBase[i].style.background='#833AE0';
            base=btnsBase[i].textContent;
            if(to!==undefined && baseIsEntered===true){//for the first time user can forget to choose output currency,so we should consider this
                fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`});
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            }
        })

        btnsTo[i].addEventListener('click',function(){
            for(let j=0;j<btnsTo.length;j++){
                btnsTo[j].style.background='transparent';
            }
            btnsTo[i].style.background='#833AE0';
            to=btnsTo[i].textContent;
            if(base!==undefined && baseIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
                fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`});
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            }
        })
    }
}

/*for output panel*/
function addEventToToFrom(){
for(let i=0;i<btnsTo.length;i++){
    //console.log(btns[i]);
    btnsTo[i].addEventListener('click',function(){
        for(let j=0;j<btnsTo.length;j++){
            btnsTo[j].style.background='transparent';
        }
        btnsTo[i].style.background='#833AE0';
        to=btnsTo[i].textContent;
        if(base!==undefined && toIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`});

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
        }
    })

    btnsBase[i].addEventListener('click',function(){
        for(let j=0;j<btnsTo.length;j++){
            btnsBase[j].style.background='transparent';
        }
        btnsBase[i].style.background='#833AE0';
        base=btnsBase[i].textContent;
        if(base!==undefined && toIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`});

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
        }
    })
}
}

function removeEventToToFrom(){
    for(let i=0;i<btnsTo.length;i++){
        //console.log(btns[i]);
        btnsTo[i].removeEventListener('click',function(){
            for(let j=0;j<btnsTo.length;j++){
                btnsTo[j].style.background='transparent';
            }
            btnsTo[i].style.background='#833AE0';
            to=btnsTo[i].textContent;
            if(base!==undefined && toIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[to]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`});
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            }
        })

        btnsBase[i].addEventListener('click',function(){
            for(let j=0;j<btnsTo.length;j++){
                btnsBase[j].style.background='transparent';
            }
            btnsBase[i].style.background='#833AE0';
            base=btnsBase[i].textContent;
            if(base!==undefined && toIsEntered===true){//for the first time user can forget to choose input currency,so we should consider this
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`});
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            }
        })
    }
    }
/*btnsBase[0].style.background='#833AE0';
btnsTo[1].style.background='#833AE0';
base=btnsBase[0].textContent;
to=btnsTo[1].textContent;
inpbase.addEventListener('input',function(){
    fetch(`https://api.exchangerate.host/latest?base=${btnsBase[0].textContent}&symbols=${btnsTo[1].textContent}`)
    .then(response=>response.json())
    .then(data=>{setDataTo(getDataFrom()*data.rates[btnsTo[1].textContent]);pin.textContent=`1 ${btnsBase[0].textContent} = ${data.rates[btnsTo[1].textContent]} ${btnsTo[1].textContent}`});

    fetch(`https://api.exchangerate.host/latest?base=${btnsTo[1].textContent}&symbols=${btnsBase[0].textContent}`)
    .then(response=>response.json())
    .then(data=>pout.textContent=`1 ${btnsTo[1].textContent} = ${data.rates[btnsBase[0].textContent]} ${btnsBase[0].textContent}`)
})*/

/*adding input listener to input panel to make our application alive*/
function addListener_inpbase(){
inpbase.addEventListener('input',function(){
    toIsEntered=false;
    baseIsEntered=true;
    removeListener_inpto();
    removeEventToToFrom();//sag terefin sola vermesini legv etmek
    if(base!==undefined && to!==undefined){
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to])});
    }
    addEventToToFrom();
})
}
function removeListener_inpbase(){
    inpbase.removeEventListener('input',function(){
        toIsEntered=false;
        baseIsEntered=true;
        removeListener_inpto();
        removeEventToToFrom();
        if(base!==undefined && to!==undefined){
            fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to])});
        }
        addEventToToFrom();
    })
    }
function addListener_inpto(){
inpto.addEventListener('input',function(){
    baseIsEntered=false;
    toIsEntered=true;
    removeListener_inpbase();//en teze yazdim
    removeEventFromToTo();//sol terefin saga vermesini legv etmek
        fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base])});

    addEventFromToTo();
})
}
function removeListener_inpto(){
    inpto.removeEventListener('input',function(){
        baseIsEntered=false;
        toIsEntered=true;
        removeListener_inpbase();
        removeEventFromToTo();//sol terefin saga vermesini legv etmek
            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base])});
    
        addEventFromToTo();
    })
}

addEventFromToTo();
addEventToToFrom();
addListener_inpbase();
addListener_inpto();


/*meyarlarda,sag terfe eded daxil edilende solun saga uygun cevrilmesi ve error haqqinda melumat hissesini implement etmek*/

/* uje demek olar ki isleyir sadece ilkin halda RUB ve USD secilmesini implement etmek ve error/exception handling hissesini implement etmek lazimdir*/