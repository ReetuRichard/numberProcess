const express = require('express');
const bodyParser = require('body-parser');
const processRoutes = require('./routes/processRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', processRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
