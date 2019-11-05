var mongoose = require('mongoose');
var db = "myapp";
mongoose.connect('mongodb://localhost:27017/' + db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true

    }, function (error) {
        if (error) {
            console.log("error" + error);
        } else {
            console.log("Database Connected to " + db)
        }

    });
