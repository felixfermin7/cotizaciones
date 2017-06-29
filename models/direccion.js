var db = require('../conexionbd'); //reference of dbconnection.js

var direccion = {

    getAlldirecciones: function (callback) {

        return db.query("Select * from direccion", callback);

    },
    getdireccionById: function (id, callback) {

        return db.query("select * from direccion where codigo=?", [id], callback);
    },
    adddireccion: function (direccion, callback) {
        return db.query("Insert into direccion(cod_cliente, descripcion) values(?,?)", [direccion.cod_cliente, direccion.descripcion], callback);
    },
    deletedireccion: function (id, callback) {
        return db.query("delete from direccion where codigo=?", [id], callback);
    },
    updatedireccion: function (id, direccion, callback) {
        return db.query("update direccion set descripcion=? where codigo=?", [direccion.descripcion, id], callback);
    }

};
module.exports = direccion;