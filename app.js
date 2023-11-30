const app = require('./bin/app');
const {port} = require('./config');
const router = require('./routes');

app.use('/', router);
app.listen(port);
