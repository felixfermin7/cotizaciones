var db = require('../conexionbd'); //reference of dbconnection.js

var vendedor = {

    getAllvendedores: function (callback) {

        return db.query("Select * from vendedor", callback);

    },
    getvendedorById: function (id, callback) {

        return db.query("select * from vendedor where codigo=?", [id], callback);
    },
    addvendedor: function (vendedor, callback) {
        return db.query("Insert into vendedor(cedrif, nombre, telefono1, telefono2, direccion, clave) values(?,?,?,?,?,?)", [vendedor.cedrif, vendedor.nombre, vendedor.telefono1, vendedor.telefono2, vendedor.direccion, vendedor.clave], callback);
    },
    deletevendedor: function (id, callback) {
        return db.query("delete from vendedor where codigo=?", [id], callback);
    },
    updatevendedor: function (id, vendedor, callback) {
        return db.query("update vendedor set cedrif=?,nombre=?, telefono1=?, telefono2=?, direccion=?, clave=? where codigo=?", [vendedor.cedrif, vendedor.nombre, vendedor.telefono1, vendedor.telefono2, vendedor.direccion, vendedor.clave, id], callback);
    }

};
module.exports = vendedor;