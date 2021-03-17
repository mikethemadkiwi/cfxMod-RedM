cfxGameState = {
    NISS:false,
    MAPSTART:false,
    CGTS:false,
    PSPAWN:false
};
on('onClientMapStart', ()=>{
    emitNet('cfxGameState:MAPSTART', true)
    cfxGameState.MAPSTART = true;
})
on('onClientGameTypeStart', ()=>{
    emitNet('cfxGameState:CGTS', true)
    cfxGameState.CGTS = true;
})
on('playerSpawned', ()=>{
    emitNet('cfxGameState:PSPAWN', true)
    cfxGameState.PSPAWN = true;
});
let nisstimer = setTick(async() => {
    if( NetworkIsSessionStarted() ){
        emitNet('cfxGameState:NISS', true)
        cfxGameState.NISS = true;
        clearTick(nisstimer);
    }
})