const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById('start').addEventListener('click', x => { 
    ipc.send('countdown-start'); 
});

ipc.on('countdown', (eve, count) => {
    document.getElementById('count').innerHTML = count; 
} )
