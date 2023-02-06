Promise.resolve().then(()=>{console.log('console the promise')})
process.nextTick(()=>{console.log('console the next tick')})