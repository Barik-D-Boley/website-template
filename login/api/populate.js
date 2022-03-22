const connectDB = require('./connectDB'),
    UserModel = require('./userModel'),
    usersJSON = require('../../users.json')

const populateUsers = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await UserModel.deleteMany();
        await UserModel.create(usersJSON);
        console.log('Users populated successfully');
    } catch (error) { console.error(error) }
}

module.exports = populateUsers;