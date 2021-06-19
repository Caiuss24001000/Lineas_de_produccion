let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerRuido();
        licuadora.classList.add("active");
        /* console.log("me prendiste 7u7"); */
    }else{
        estadoLicuadora = "apagada";
        hacerRuido();
        licuadora.classList.remove("active");
        /* console.log("Me apagaste u.u"); */
    }
}

async function hacerRuido(){
    if(sonidoLicuadora.paused){
        sonidoLicuadora.play();
        await delay(0.5);
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }else{
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}