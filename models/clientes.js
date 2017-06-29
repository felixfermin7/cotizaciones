var db = require('../conexionbd'); //reference of dbconnection.js

var cliente = {

    getAllclientes: function (callback) {

        return db.query("Select * from clientes", callback);

    },
    getclienteById: function (id, callback) {

        return db.query("select * from clientes where codigo=?", [id], callback);
    },
    addcliente: function (cliente, callback) {
        return db.query("Insert into clientes(cedrif, nombre, telefono1, telefono2) values(?,?,?,?)", [cliente.cedrif, cliente.nombre, cliente.telefono1, cliente.telefono2], callback);
    },
    deletecliente: function (id, callback) {
        return db.query("delete from clientes where codigo=?", [id], callback);
    },
    updatecliente: function (id, cliente, callback) {
        return db.query("update clientes set cedrif=?,nombre=?, telefono1=?, telefono2=? where codigo=?", [cliente.cedrif, cliente.nombre, cliente.telefono1, cliente.telefono2, id], callback);
    }

};
module.exports = cliente;