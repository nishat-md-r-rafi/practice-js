const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('play', (name)=>{
    console.log(`playing with her ${name}`);
})

emitter.emit('play', 'paisa');