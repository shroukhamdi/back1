const fs = require("fs")
const addPerson = (id , fname, lname, age, city) =>{
    const allData= loadInfo()

    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city

    })

    savealldata(allData)
}

// //////////////////////////////////////////////////////////////

const loadInfo = () =>{
    try{ const dataJson= fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
}
catch{
    return[]
}
    
   

}

// ///////////////////////////////////////////////////////////

const savealldata = (allData) =>{
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , saveallDataJson)
}

// /////////////////////////////////////////////////
const deleteData= (id) =>{
    const allData= loadInfo()
    const datatokeep= allData.filter((obj) =>{
        return obj.id != id
    })
    savealldata(datatokeep)
}

// ////////////////////////////////////////////////////////////

const listData= () =>{
    const allData= loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.age, obj.city)
    });
}



module.exports={
    addPerson,
    deleteData,
    listData
}
