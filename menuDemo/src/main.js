const electron  = require('electron');
const Menu = electron.Menu;

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', x =>{
    new BrowserWindow();
    const name = electron.app.getName();

    const template = [
        {
            label: name,
            submenu: [{
                label: `About ${name}`,
                click: x => {
                    console.log("clicked!");
                    
                },
                role: 'about'
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                click: x => { 
                    app.quit()
                },
                accelerator: 'Cmd+Q'
            }]
        }
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    
})
