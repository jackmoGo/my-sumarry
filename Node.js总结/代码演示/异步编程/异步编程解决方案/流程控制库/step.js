var Step = require('step');
var fs = require('fs');

// Step(
//     function readFile1(){
//         fs.readFile('file1.txt', 'utf-8', this);
//     },
//     function readFile2(err, content){
//         console.log(content);
//         fs.readFile('file2.txt', 'utf-8', this);
//     },
//     function done(err, content){
//         console.log(content);
//     }
// )

// Step(
//     function readFile1(){
//         fs.readFile('file1.txt', 'utf-8', this.parallel());
//         fs.readFile('file2.txt', 'utf-8', this.parallel());
//     },
//     function done(err, content1, content2){
//         if (err){
//             throw err;
//         }
//         console.log(content1);
//         console.log(content2);
//         console.log(arguments);
//     }
// )

Step(
    function readDir(){
        fs.readdir(__dirname, this);
    },
    function readFiles(err, results){
        if (err) throw err;

        var group = this.group();
        results.forEach(function (filename){
            if (/\.js$/.test(filename)){
                fs.readFile(__dirname + "/" + filename, 'utf8', group());
            }
        })
    },
    function showAll(err, files){
        if (err) throw err;
        console.log(files.length);
        console.dir(files[0]);
    }
)