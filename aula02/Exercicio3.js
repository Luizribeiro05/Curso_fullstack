const carreira = "Dev FullStack";

function objetivoDaCarreiraFunc (carreira) {
    console.log(`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

const objetivoDaCarreiraArrow = (carreira) =>{
    console.log(`Meu objetivo de carreira é me tornar um ${carreira}.`); 
}

objetivoDaCarreiraFunc(carreira);
objetivoDaCarreiraArrow(carreira);