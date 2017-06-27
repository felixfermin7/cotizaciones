var db=require('../conexionbd'); //reference of dbconnection.js
 
var detcotizacion={
 
getAlldetcotizacion:function(callback){
 
return db.query("Select * from det_cotizacion",callback);
 
},
 getdetcotizacionById:function(id,callback){
 
return db.query("select * from det_cotizacion where Id=?",[id],callback);
 },
 adddetcotizacion:function(detcotizacion,callback){
 return db.query("Insert into det_cotizacion(cod_cotizacion, id_producto, cantidad, precio, unidad_medida, peso) values(?,?,?,?,?,?)",[detcotizacion.cod_cotizacion, detcotizacion.id_producto, detcotizacion.cantidad, detcotizacion.precio, detcotizacion.unidad_medida, detcotizacion.peso],callback);
 },
 deletedetcotizacion:function(id,callback){
  return db.query("delete from det_cotizacion where Id=?",[id],callback);
 },
 updatedetcotizacion:function(id,detcotizacion,callback){
  return db.query("update det_cotizacion set cod_cotizacion=?, id_producto=?, cantidad=?, precio=?, unidad_medida=?, peso=? where Id=?",[detcotizacion.cod_cotizacion, detcotizacion.id_producto, detcotizacion.cantidad, detcotizacion.precio, detcotizacion.unidad_medida, detcotizacion.peso,id],callback);
 }
 
};
 module.exports=detcotizacion;