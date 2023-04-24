// const express = require('express');
// const cors = require('cors');
// const Vehicle = require('./uploadvehicle');
// const mongoose = require('mongoose');
// const connectDb = require('./connectDb')

// const app = express();

// app.use(express.json());
// app.use(cors());
// let PORT = 5000
// connectDb();
// app.get('/', (req, res) => {
//     res.send("API is running...")
// });

// app.post('/vehicles', async (req, res) => {
//   const vehicleName = req.body.vehicleName
//   const vehicleNum = req.body.vehicleNum
//   const contactNum = req.body.contactNum
//   try {
//     const newVehicle = new Vehicle({
//       vehicleName,
//       vehicleNum,
//       contactNum,
//     });

//     await newVehicle.save();

//     res.status(200).json({ success: true, message: "Vehicle information saved successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Error saving vehicle information" });
//   }
// });

// app.listen(PORT, console.log(`Server started at ${PORT}`));


// const express = require('express');
// const mysql = require('mysql');
// const port = 3000;
// const fs = require('fs');
// const path = require('path');
// const app = express();

// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : "",
//   database : 'onthego'
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname)));
// // app.use(Session({ resave: true ,secret: 'sus' , saveUninitialized: true}));

// db.connect((err) => {
//   if(err){
//       throw err;
//   }
//   console.log('Database connected');
// }); 

// app.get('/upload',(req,res)=>{
//   var vehiclename = req.query.vehiclename;
//     var vehiclenumber = req.query.vehiclenum;
//     var contactnumber = req.query.number;
//     console.log(vehiclename)
//     var values3 = [
//         [vehiclename, vehiclenumber, contactnumber]
//     ]
//     db.query("INSERT INTO vehicles(vehiclename,vehiclenumber,contactnumber) VALUES ?", [values3], function(err,result){
//         if (err){ 
//           console.log(err)
//         }
//         else{
//         console.log('record inserted');
//         res.redirect('/upload');
//         }
//     })
// })

const solc = require("solc");
const fs = require("fs");
const Web3=require("web3")
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync('./demo.sol').toString();
console.log(fileContent);

var input = {
  language: "Solidity",
  sources: {
    "demo.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log("Output: ", output);

var ABI = output.contracts["demo.sol"]["demo"].abi;
var bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;
console.log("Bytecode: ", bytecode);
console.log("ABI: ", ABI);

var contract = new web3.eth.Contract(ABI);
let defaultAccount;
web3.eth.getAccounts().then((accounts) => {
  console.log("Accounts:", accounts); //it will show all the ganache accounts

  defaultAccount = accounts[0];
  console.log("Default Account:", defaultAccount);  //to deploy the contract from default Account
  contract
    .deploy({ data: bytecode })
    .send({ from: defaultAccount, gas: 470000 })
    .on("receipt", (receipt) => { //event,transactions,contract address will be returned by blockchain
      console.log("Contract Address:", receipt.contractAddress);
    })
    .then((demoContract) => {
      demoContract.methods.x().call((err, data) => {
        console.log("Initial Value:", data);
      });
    });
});

