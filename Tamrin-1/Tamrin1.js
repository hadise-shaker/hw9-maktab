const fs = require("fs");
//1-Read files
/* const read = fs.readFile("./Tamrin-1.txt"); */

/* 2-methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile() */

///fs.appendFile
//اگر فایل وجود نداشته باشد فایل را می سازد
/* fs.appendFile(
  "./Tamrin-1.txt",
  "\n" + "This Is A New File",
  function (err, data) {
    if (data) console.log("Saved!");
  }
); */

////fs.open()
//اگر فایل وجود نداشته باشد یک فایل خالی به همان نام میسازد اما اگر وجود داشته باشد تمام محتوای فایل را خالی میکند
/* fs.open("./Tamrin-1.txt", "w", function (err, data) {
  if (data);
  console.log("Changed :)");
}); */

///fs.writeFile()
// اگر ادرس فایل داده شده وجود نداشته باشد یک فایل جدید به همان نام داده شده و محتوای داده شده میسازد
/* fs.writeFile("./Tamrin-2.txt", "Sahar Shaker", function (data) {
  if (data);
  console.log("Saved!");
}); */
////////////////////////////////////////////////

/* 3-methods for updating files:

fs.appendFile()
fs.writeFile() 
*/
/* fs.appendFile(
  "./Tamrin-1.txt",
  "\n" + "This Is A New File",
  function (err, data) {
    if (data) console.log("Saved!");
  }
); */

///fs.writeFile()
/* fs.writeFile("./Tamrin-1.txt", "Sahar Shaker", function (data) {
  if (data);
  console.log("Saved!");
}); */

////////////////////////////////////////////////

// 4-Delete Files

/* fs.unlink("./Tamrin-2.txt", function (data) {
  if (data);
  console.log("File deleted!");
});
 */
////////////////////////////////////////////////

// 5-Rename Files
/* fs.rename("./Tamrin-1.txt", "renamed.txt", function (data) {
  if (data) console.log("File Renamed!");
}); */
