

// const fs = require("fs")
// fs.writeFileSync("data1.txt" , "shrouk hamdy")
// console.log(fs.readFileSync("data1.txt").toString())

const yargs = require("yargs")



////////////////////////////////////////////////////////////////////////////////

// const x = require ("./allData")
// console.log(x.fname)
// ////////////////////////////////////////////////////

// var validator = require('validator');
// console.log(validator.isEmail("ahmad@gmail.com"))

// ////////////////////////////////////////////////////////////////////////

// const yargs = require("yargs")
const data10 = require("./data10")

yargs.command({
  command:"add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the first name description in add command",
      demandOption: true,
      type: "string"
    },
    lname: {
      describe: "this is the last name description in add command",
      demandOption: true,
      type: "string"
    }
  },
  handler: (x) =>{
    // console.log("you have already an item")
    // console.log(x.id, x.fname, x.lname, x.age, x.city)
    data10.addPerson(x.id, x.fname, x.lname, x.age, x.city)
  }
})

// console.log(yargs.argv)
yargs.parse()
/////////////////////////////////////////////////////////////////////
// yargs.command({
//   command:"delete",
//   describe: "to delete an item",
//   handler: () =>{
//     console.log("you have already deleted an item")
//   }
// })

// console.log(yargs.argv)


// ///////////////////////////////////////////////////////////////////////////

yargs.command({
    command:"delete",
    describe: "to delete an item",
    handler: (x) =>{
      data10.deleteData(x.id)
    }
  })

  yargs.parse()

  // ///////////////////////////////////////////////////////////////////

  yargs.command({
    command:"list",
    describe: "to list data",
    handler: () =>{
      data10.listData()
    }
  })

  yargs.parse()