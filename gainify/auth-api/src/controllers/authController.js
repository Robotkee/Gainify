const { User } = require('../models/user');

class AuthController {
    async registerUser(req, res) {
        const { name, surname, email, password } = req.body;
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const newUser = await User.create({ name, surname, email, password });
            return res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            return res.status(500).json({ message: 'Error registering user', error });
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            return res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            return res.status(500).json({ message: 'Error logging in', error });
        }
    }
}

module.exports = AuthController;