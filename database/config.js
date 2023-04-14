const mongoose = require('mongoose');

const dbConexion = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log('Conexion con la base de datos establecida');
    } catch (error) {
        console.log(error);
        throw new Error('Conexion con la base de datos fallida');
    }
}


module.exports = {
    dbConexion
}