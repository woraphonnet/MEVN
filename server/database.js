const url = 'mongodb+srv://employee_user:cLMeHnc1aoiuY20X@cluster0-emm94.mongodb.net/saenruk?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const mongoose = require('mongoose');

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("Connected successfully to server");
});

require('./models/employee')