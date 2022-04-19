// var fs = require('fs')


// fs.read('message.txt', (err, data) => {
//     if (err) {
//         throw err
//     } else {
//         console.log('Content :' + data)
//     }
// })

// var fs = require('fs');

// var content = "We are writing this file synchronously using node.js";

// fs.writeFileSync('content.txt', content);
// console.log("File Written Successfully");

// var fs = require('fs')

// var content = 'Adding content asynchronously'

// fs.writeFile('content.txt', content, (err) => {
//     if (err) {
//         throw err
//     } else {
//         console.log('it is saved')
//     }
// })
// console.log('okkk');

// var fs = require('fs')

// var data = 'Appending data sample'

// fs.appendFile('input.txt', data, (err) => {
//     if (err) {
//         throw err
//     } else {
//         console.log('Worked')
//     }
// })

// console.log('Yayy')

// var fs = require('fs')

// var data1 = 'Appending data sample synchronously'

// fs.appendFileSync('inputSync.txt', data1)

// console.log('Yayy')

// var fs = require('fs')

// var filename = 'app.css'

// fs.unlinkSync(filename)

// console.log('confirm op')

var fs = require('fs')

var conta = 'Ladies and gentlemen, HER'

fs.writeFile('inputSynfc.txt', conta, (err) => {
    if (err) {
        throw err
    } else {
        console.log('working')
    }
})
