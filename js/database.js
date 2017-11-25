  var db = new pouchDB('kartofan');
  db.info().then(function (info) {
    console.log(info);
  });