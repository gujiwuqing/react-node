module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/react-backstage', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error',function (err) {
        console.log(err);
    });
    db.once('open', function() {
        // we're connected!
        console.log('连接成功');
    });
}