  /* var db = new pouchDB('kartofan'); */

  var db = new PouchDB('http://localhost:5984/kartofan');
  db.info().then(function (info) {
    console.log(info);
  });