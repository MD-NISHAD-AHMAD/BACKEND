const mongoose = require('mongoose');

const main = async () => {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/Zannati');

        console.log('DB is connected');

        let userData = new mainModel({
            name: 'nishad',
            age: 22,
            married: false,
        });

        await userData.save();
        console.log('data has been successfully added');

        await mongoose.disconnect();

        console.log('DB is Disconnected');

    } catch (error) {
        console.log('DB Connection Failed');
        console.log('🚀 ~ error:', error);
    }
};

const mainModel = mongoose.model(
    'data',
    new mongoose.Schema(
        {
            name: String,
            age: Number,
            married: Boolean,
        },
        {
            versionKey: false,
        }
    )
);


main();