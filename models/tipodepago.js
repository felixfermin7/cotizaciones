var db = require('../conexionbd'); //reference of dbconnection.js

var tipopago = {

    getAlltipopago: function (callback) {

        return db.query("Select * from tipo_pago", callback);

    },
    gettipopagoById: function (id, callback) {

        return db.query("select * from tipo_pago where Id=?", [id], callback);
    },
    addtipopago: function (tipopago, callback) {
        return db.query("Insert into tipo_pago (descripcion) values(?)", [tipopago.descripcion], callback);
    },
    deletetipopago: function (id, callback) {
        return db.query("delete from tipo_pago where Id=?", [id], callback);
    },
    updateproducto: function (id, tipopago, callback) {
        return db.query("update tipo_pago set descripcion=? where Id=?", [tipopago.descripcion, id], callback);
    }

};
module.exports = tipopago;