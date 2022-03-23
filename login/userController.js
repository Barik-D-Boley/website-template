const UserModel = require('./userModel')

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(201).json({users});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteAllUsers = async (req, res) => {
    try {
        const users = await UserModel.deleteMany({});
        res.status(201).json({users});
    } catch (error) { res.status(500).json({msg: error}) }
}

const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json({user});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).exec();
        res.status(201).json({user});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const newUser = req.body;
        await UserModel.findOneAndUpdate({_id: id}, newUser);
        res.status(201).json({newUser});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndRemove(req.params.id);
        res.status(201).json({user});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllUsers, deleteAllUsers, createUser, getUser, updateUser, deleteUser };