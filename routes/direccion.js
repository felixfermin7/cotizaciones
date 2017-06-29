var express = require('express');
var router = express.Router();
var direccion = require('../models/direccion');

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    direccion.getdireccionById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    direccion.getAlldirecciones(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});
router.post('/', function (req, res, next) {

  direccion.adddireccion(req.body, function (err, count) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});
router.delete('/:id', function (req, res, next) {

  direccion.deletedireccion(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});
router.put('/:id', function (req, res, next) {

  direccion.updatedireccion(req.params.id, req.body, function (err, rows) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;