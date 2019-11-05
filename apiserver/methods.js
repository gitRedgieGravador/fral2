var findDocsByCond = (model, cond) => {
    model.findOne(cond, function (err, result) {
        if (err) return err;
        console.log("get it " + result)
        return result;
    });
}

async function saveToDB(docs) {
    docs.save(function (err, doc) {
        if (err) { return err } else {
            console.log("this is call " + doc)
            return true
        }
    })
}

function exixts(model, cond){
    model.find(cond, function(err, doc){
        if (err) return err;
        if(doc.length == 0){
            return false
        }return true
    })
}

module.exports = {
    findDocsByCond,
    saveToDB
}