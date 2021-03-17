window.addEventListener("message", function(msgData){    
    let task = msgData.data;
});
window.addEventListener("keyup", event => {
    console.log('is ANYTHING not depreciated??????', event)
    // if (event.keyCode === 27) {

    //     // hide the UI and send this to unfocus                
    //     $.post("http://kiwiTools/ui-bus", JSON.stringify({
    //         hideUI: true
    //     })) 

    // }
});