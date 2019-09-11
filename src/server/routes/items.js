var express = require("express");
var router = express.Router();
// var request = require("request");
// var https = require("https");

/**
 * Retorna la lista de productos en base a los query params recibidos
 * Lee el archivo data.json y devuelve el json con los filtros aplicados
 */
router.get("/", function(req, res, next) {
  //;
  const fs = require("fs");
  let dataFromJson;

  const pathjson = require("path").resolve(__dirname, "data.json");

  fs.readFile(pathjson, "utf8", function(err, data) {
    if (err) throw err;
    dataFromJson = JSON.parse(data);
    let filter = "";
    let filterStars = "";
    if (req.query.q !== undefined) {
      filter = req.query.q.trim();
    }
    if (req.query.s !== undefined) {
      filterStars = req.query.s.trim();
      console.log("Entro");
    }
    if (filter == "" && filterStars == "") {
      console.log("Entro 2");
    } else {
      console.log("Entro 3");
      dataFromJson = filterJson(dataFromJson, filter, filterStars);
    }

    res.json(dataFromJson);
  });

  function filterJson(obj, filter, stars) {
    console.log("params:----------------------------");
    console.log(filter);
    console.log(stars);
    let items = [];
    let counter = 0;

    for (var i = 0; i < obj.length; i++) {
      let name = obj[i].name.toUpperCase();
      let starsNum = obj[i].stars;
      let filterUpper = filter.toUpperCase();
      if (filter != "" && stars !== "") {
        if (name.indexOf(filterUpper) !== -1 && starsNum == stars) {
          items.push(obj[i]);
        }
      } else if (filter != "") {
        if (name.indexOf(filterUpper) !== -1) {
          items.push(obj[i]);
        }
      } else {
        if (starsNum == stars) {
          items.push(obj[i]);
        }
      }
    }
    return items;
  }
});
module.exports = router;
