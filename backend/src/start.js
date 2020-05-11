const app = require('./app');
require('dotenv').config();

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
