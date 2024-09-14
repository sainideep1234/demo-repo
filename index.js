// to install package.json file we run comand * npm init -y*

const express = require("express"); // this express library is on internett to important this librarry from internet to our system we run a comand on our terminal  *npm install express*

const port = 3001;

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  // res.send("hi there");

  let n =  parseInt(req.query.n);
  let ans = calculateSum(n);
  res.send(`"hi there your ans is", ${ans}`);
});

app.listen(port);
