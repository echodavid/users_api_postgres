const models = require('../database/models');

const createUser = async (req, res) => {
    try {
        const user = await models.User.create(req.body);
        return res.status(201).json({
        user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await models.User.findAll({
        include: [
        ],
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await models.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(req.body);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await models.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await models.User.findByPk(id, {
            include: [
            ],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
};