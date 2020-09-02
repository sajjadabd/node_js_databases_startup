const mongoose = require('mongoose');

let kittenArray = [];

const catSchema = new mongoose.Schema({ 
    id : Number,
    name: String 
});

mongoose.connect(
    'mongodb://localhost:27017/test', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const Cat = mongoose.model('Cat', catSchema );

saveCat = async (name) => {
    let newKitten = { id : kittenArray.length+1 , name };
    const kitty = new Cat(newKitten);
    const result = await kitty.save();
    kittenArray.push(result);
    //console.log(kittenArray);
}


searchAll = async () => {
    const query = await Cat.find({});
    console.log(query);
}

deleteAll = async () => {
    const query = await Cat.deleteMany({});
    console.log(query);
}

initKittenArray = async () => {
    const query = await Cat.find({});
    kittenArray = query;
}


doTheJob = async () => {
    // await deleteAll();

    await initKittenArray();
    await saveCat('Oliver');
    await searchAll();
}


doTheJob();