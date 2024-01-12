

const fs=require("fs");
// fs.writeFile("messageIndex.txt","Hello World", (err) =>{
// if (err) throw err;
// console.log("The File has been saved");
// })


fs.readFile('./message1.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// const fs = require("fs");

// fs.writeFile("message1.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// // fs.readFile("message.txt", "utf8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// // });
