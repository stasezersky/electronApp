const electron = require('electron')
const { app, Tray, Menu, clipboard } = electron
const path = require('path')

const STACK_SIZE = 3

function addToStack(item, stack) {
    return [item].concat(stack.length >= STACK_SIZE ? stack.slice(0, stack.length -1) : stack );
}

function checkClipboardForChange(clipboard, onChange) {
    // cache step before check 
    let cache = clipboard.readText()  
    let latest
    setInterval(() => {
        // latest step after check
        latest = clipboard.readText()
        if (latest !== cache) {
            cache = latest
            onChange(cache)
        }
    }, 1000)
}

app.on('ready', x => {
    let stack =[]
    const tray = new Tray(path.join('src/pics', 'GymMatterials1.jpg'))
    tray.setContextMenu(Menu.buildFromTemplate([{ label: '<Empty>', enabled: false }]))

    checkClipboardForChange(clipboard, text => {
        stack = addToStack(text, stack)
        console.log("stack", stack)
    })
})