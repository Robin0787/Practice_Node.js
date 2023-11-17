const EventEmitter = require('events');
const myEmitter = new EventEmitter();


myEmitter.on('amni', (text) => {
    console.log('Hello', text);
})

myEmitter.on('amni', (text) => {
    console.log('Welcome', text);
})

myEmitter.emit('amni', 'Robin');