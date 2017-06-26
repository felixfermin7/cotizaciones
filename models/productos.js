var db=require('../conexionbd'); //reference of dbconnection.js
 
var producto={
 
getAllproductos:function(callback){
 
return db.query("Select * from productos",callback);
 
},
 getproductoById:function(id,callback){
 
return db.query("select * from productos where Id=?",[id],callback);
 },
 addproducto:function(producto,callback){
 return db.query("Insert into productos values(?,?,?,?,?,?,?)",[producto.codigo, producto.descripcion, producto.unidad_medida, producto.peso, producto.empaque, producto.precio, producto.existencia],callback);
 },
 deleteproducto:function(id,callback){
  return db.query("delete from productos where Id=?",[id],callback);
 },
 updateproducto:function(id,producto,callback){
  return db.query("update productos set descripcion=?,precio=? where Id=?",[produco.descripcion,producto.precio,id],callback);
 }
 
};
 module.exports=producto;