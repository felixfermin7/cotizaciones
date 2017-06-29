var express = require('express');
var router = express.Router();
var tipopago = require('../models/tipodepago');

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    tipopago.gettipopagoById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    tipopago.getAlltipopago(function (err, rows) {

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

  tipopago.addtipopago(req.body, function (err, count) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});
router.delete('/:id', function (req, res, next) {

  tipopago.deletetipopago(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});
router.put('/:id', function (req, res, next) {

  tipopago.updatetipopago(req.params.id, req.body, function (err, rows) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;