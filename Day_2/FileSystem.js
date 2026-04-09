const fs = require('fs');

// let readFileSync = fs.readFileSync('./even.js', {
//     encoding: 'utf-8'
// });
// console.log('🚀 ~ FileSystem.js ~ readFileSync:', readFileSync);

// CRUD

const dataValue = fs.writeFileSync('./note.txt', ' Iram zannati');

/* append method */

fs.appendFile('./note.txt', '\nHello Nishad', (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Data appended successfully");
    }
});

// fs.readFile('./even.js', { encoding: 'utf-8'}, (err,data) => {
    
//     if (data) {
//        console.log('🚀 ~ FileSystem.js ~ data:', data);
//     } else {
//         console.log(err);
//     }
// });


// fs.writeFile = fs.writeFileSync('./note.txt', 'hello', (err) => {
    
//     if (err) {
//        console.log('🚀 ~ FileSystem.js ~ err:', err);
//     }
// });


/* edit the text */

fs.readFile('./note.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }

    const value = data.split(' ');
    console.log('🚀 ~ FileSystem.js ~ value:', value);

    const UpdateValue = data.replace(
        value.splice(
            value.findIndex((el) => el === 'world'),
            1
        ),
        ''
    );
    console.log('🚀 ~ FileSystem.js ~ UpdateValue:', UpdateValue);
    
    


fs.writeFile('./note.txt', UpdateValue.trim(), (errs, data1) => {
    if (errs) console.log(errs)

        console.log(data1);
});

});