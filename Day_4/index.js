import http from 'http';
import fs from 'fs';

const PORT = 7080;

const server = http.createServer((req, res) => {

    if (req.url === '/notes') {
        req.on('data', (chunk) => {
            fs.writeFile('./notes.txt', chunk, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });

        res.end('Zannati...');
    } 
    
    else if (req.url === '/allData') {
        fs.readFile('./notes.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            res.end(data);
        });
    } 
    
    else {
        res.end('please select this routes [notes, allData]');
    }

    
    fs.appendFile('./note.txt', '\nHello Nishad', (err) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Data appended successfully");
        }
    });

}); 

server.listen(PORT, () => {
    console.log(`Port has been start on ${PORT}`);
});