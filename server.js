let RootFolder = GetResourcePath(GetCurrentResourceName());
let resourceName = GetCurrentResourceName();
cfxModData = require('./data/data.json');
cfxModLogs = require('./data/logs.json');

ConnectionIdentifiers = [];
OnlinePlayers = [];

class GetPlayerIds {
    constructor(player) {
        this.name = GetPlayerName(player);
        const numPlayerIdentifiers = GetNumPlayerIdentifiers(player);
        this.identifiers = [];
        for (let i = 0; i < numPlayerIdentifiers; i++) {
            let identifier = GetPlayerIdentifier(player, i);
            let cmd = identifier.split(':');
            if(cmd[0]=='license'){this.license=identifier}
            this.identifiers.push(identifier);
        }        
    }
}
class cfxMod {
    Log(type, msg){
        return new Promise((resolve, reject)=>{
            if(cfxModData.settings.log){
                let dt = new Date(Date.now());
                if(cfxModData.settings.debug){
                    console.log(type, msg)
                }
                cfxModLogs.data.push(`${dt} [${type}]: ${msg}`)
            }
            resolve(true)
        })
    }
    findUser(Identifiers){
        return new Promise((resolve, reject)=>{
            
            resolve(true)
        })
    }
    saveUser(Identifiers){
        return new Promise((resolve, reject)=>{
            
            resolve(true)
        })
    }
}
on('onResourceStart', async (rName)=>{
    if (resourceName != rName) { return; }
    else {
        cfxMod.Log('onResourceStart',`|| Script  ${resourceName} Started ||`)
    }
});
on('onResourceStop', async (rName)=>{
    if (resourceName != rName) { return; }
    else { 
        cfxMod.Log('onResourceStop',`|| Script  ${resourceName} Stopped ||`)
    }
});
on('playerConnecting', async(name, setKickReason, deferrals)=>{
    cfxMod.Log('playerConnecting', `[${global.source}] ${GetPlayerName(player)}`)
    let Identifiers = new GetPlayerIds(global.source);
})
on('playerDropped', async (reason)=>{
    cfxMod.Log('playerDropped', `[${global.source}] ${GetPlayerName(player)}`)
    let Identifiers = new GetPlayerIds(global.source);
    let removeIndex = ConnectionIdentifiers.map(function(id) { return id.license; }).indexOf(Identifiers.license); 
    ConnectionIdentifiers.splice(removeIndex, 1);
});
onNet("cfxGameState:MAPSTART", async ()=>{
    cfxMod.Log('MAPSTART', `[${global.source}] ${GetPlayerName(player)}`)
})
onNet("cfxGameState:PSPAWN", async ()=>{
    cfxMod.Log('PSPAWN', `[${global.source}] ${GetPlayerName(player)}`)
})
onNet("cfxGameState:NISS", async ()=>{
    cfxMod.Log('NISS', `[${global.source}] ${GetPlayerName(player)}`)
})
onNet("cfxGameState:CGTS", async ()=>{
    cfxMod.Log('CGTS', `[${global.source}] ${GetPlayerName(player)}`)
    let Identifiers = new GetPlayerIds(global.source);
    ConnectionIdentifiers.push(Identifiers)
})
let ServerTick = setTick(async() => {
    
})