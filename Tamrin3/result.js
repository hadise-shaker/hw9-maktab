const fs = require("fs");
fs.readFile("./names.txt", "utf-8", function (err, data) {
  fs.readFile("./number.txt", "utf-8", function (err2, data2) {
    var arr1 = data.split("\r\n");
    let arr2 = data2.split("\r\n");

    for (let i = 0; i <= arr1.length; i++) {
      let arr3 = arr1[i].split("-");
      console.log("arr3 is :", arr3);
    }

    /*     console.log(arr1);
    console.log(arr2); */
    /*     console.log(arr3); */

    for (let i = 0; i < arr1.length; i++) {
      str.push(`${arr1[i]} number is: ${arr2[i]} \n `);
    }
    console.log(str);
    fs.appendFile("./result.txt", str.join(""), function () {});
  });
});
