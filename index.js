const { ipcRenderer } = require('electron');

document.getElementById("browsebtn").addEventListener("click",function(){
    ipcRenderer.send("browse");
    ipcRenderer.on('browseresult', (event, arg) => {
        document.getElementById("pathfield").value = arg.filePaths[0];
    });
})