//selecting some needed items first
let inpbase=document.querySelector('#inpbase');
let inpto=document.querySelector('#inpto');
let pin=document.querySelector('#in');
let pout=document.querySelector('#out');

//declaring to boolean variables to use to which input area user is writing "base" or "to" amount 
let baseIsEntered=false;
let toIsEntered=false;

//implementing getDataFrom and setDataTo functions to change values of input panels dynamically
function getDataFrom(source){
    return source.value;
}
function setDataTo(target,newValue){
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
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
                .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
                .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
                .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[to]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
                .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pin.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    
                fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
                .then(response=>response.json())
                .then(data=>pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`)
                .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
            }
        })
    }
}

//selecting RUB and USD as default for the first time,when page is loaded
btnsBase[0].style.background='#833AE0';
btnsTo[1].style.background='#833AE0';
base=btnsBase[0].textContent;
to=btnsTo[1].textContent;

fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
.then(response=>response.json())
.then(data=>{pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
.catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
.then(response=>response.json())
.then(data=>{pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
.catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

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
        .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
        .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
        
        fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
        .then(response=>response.json())
        .then(data=>{pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
        .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    }
    //addEventToToFrom();
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
            .then(data=>{setDataTo(inpto,getDataFrom(inpbase)*data.rates[to]);pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
            
            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${base}`)
            .then(response=>response.json())
            .then(data=>{pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
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
        .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
        .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
        
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
        .then(response=>response.json())
        .then(data=>{pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
        .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error

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
            .then(data=>{setDataTo(inpbase,getDataFrom(inpto)*data.rates[base]);pout.textContent=`1 ${to} = ${data.rates[base]} ${base}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
            
            fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${to}`)
            .then(response=>response.json())
            .then(data=>{pin.textContent=`1 ${base} = ${data.rates[to]} ${to}`})
            .catch(error=>{console.log(`Something went wrong! ${error.message}`)})//catching error
    
        addEventFromToTo();
    })
}

//changing background of each input panel on focus
let panels=[];
for(let i=0;i<document.querySelectorAll('input');i++){
    //panels.push(document.querySelectorAll('input')[i]);
    document.querySelectorAll('input')[i].addEventListener("focusin",function(){
        document.querySelectorAll('input')[i].style.background='#833AE0';
    })
}

//app function
function app(){
    addEventFromToTo();
    addEventToToFrom();
    addListener_inpbase();
    addListener_inpto();
}
//changing backgrount on focus events
for(let i=0;i<document.querySelectorAll('.amount').length;i++){
    document.querySelectorAll('.amount')[i].addEventListener('focusin',function(){
        document.querySelectorAll('.amount')[i].style.background='#E5E5E5';
        document.querySelectorAll('input')[i].style.background='#E5E5E5';
    })

    document.querySelectorAll('.amount')[i].addEventListener('focusout',function(){
        document.querySelectorAll('.amount')[i].style.background='transparent';
        document.querySelectorAll('input')[i].style.background='transparent';
    })
}
//starting app
app();