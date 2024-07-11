const { processNumber, getFiles } = require('../services/processService');

const handleProcessNumber = (req, res) => {
    const number = req.body.number;

    if (typeof number !== 'number' || number < 1 || number > 25) {
        return res.status(400).json({ error: 'Invalid number. Please enter a number between 1 and 25.' });
    }

    const isComplete = processNumber(number);

    if (isComplete) {
        return res.status(200).json({ message: 'Process complete. No more numbers can be entered.' });
    }

    res.status(200).json({ message: 'Number processed !!' });
};

const handleGetFiles = (req, res) => {
    res.status(200).json(getFiles());
};

module.exports = {
    handleProcessNumber,
    handleGetFiles
};
