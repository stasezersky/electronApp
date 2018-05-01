const electron = require('electron');

const app  = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require('./countdown');
const ipc = electron.ipcMain;

let mainWin;
app.on('ready', x => {
    mainWin = new BrowserWindow({
        width: 400,
        height: 400
    });
    // mainWin.loadURL("https://www.google.com");
    mainWin.loadURL(`file://${__dirname}/countdown.html`);
    mainWin.on('closed', x => {
        console.log('closed!');
        mainWin = null;

    })
    
    
});



console.log("hello world!");

ipc.on('countdown-start', x => {
    countdown(count => {
        mainWin.webContents.send('countdown', count);
    })

})