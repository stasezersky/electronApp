const electron = require('electron');
const path = require('path');
const { app, Tray, Menu } = electron;

app.on('ready', x => {
    const tray = new Tray(path.join('src/pics', 'GymMatterials1.jpg'));
    const menu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click: x => {
                console.log('WOWOWOWOWOW');
            }
        },
        {
            label: 'Awesome',
            click: x => {
                console.log('Awesomeeeeee!!!!!');
            }
        }
    ]);
    tray.setContextMenu(menu);
    tray.setToolTip('This is my awesome tray menu');
});
