var db=require('../conexionbd'); //reference of dbconnection.js
 
var cotizacion={
 
getAllcotizaciones:function(callback){
 
return db.query("Select * from cotizacion",callback);
 
},
 getcotizacionById:function(id,callback){
 
return db.query("select * from cotizacion where codigo=?",[id],callback);
 },
 addcotizacion:function(cotizacion,callback){
 return db.query("Insert into cotizacion(codigo ,fecha, cliente, dir_cliente, lugar_entrega, descuento, incremento, flete, tipo_pago, nota, vendedor, iva) values(?,?,?,?,?,?,?,?,?,?,?,?)",[cotizacion.codigo, cotizacion.fecha, cotizacion.cliente, cotizacion.dir_cliente, cotizacion.lugar_entrega, cotizacion.descuento, cotizacion.incremento, cotizacion.flete, cotizacion.tipo_pago, cotizacion.nota, cotizacion.vendedor, cotizacion.iva],callback);
 },
 deletecotizacion:function(id,callback){
  return db.query("delete from cotizacion where codigo=?",[id],callback);
 },
 updatecotizacion:function(id,cotizacion,callback){
  return db.query("update cotizacion set fecha=?,cliente=?, dir_cliente=?, lugar_entrega=?, descuento=?, incremento=?, flete=?, tipo_pago=?, nota=?, vendedor=?, iva=? where codigo=?",[cotizacion.fecha, cotizacion.cliente, cotizacion.dir_cliente, cotizacion.lugar_entrega, cotizacion.descuento, cotizacion.incremento, cotizacion.flete, cotizacion.tipo_pago, cotizacion.nota, cotizacion.vendedor, cotizacion.iva ,id],callback);
 }
 
 
};
 module.exports=cotizacion;