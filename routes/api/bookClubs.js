const router = require("express").Router();
const bookClubsController = require("../../controllers/bookClubsController");
const db = require("../../models");

// Matches with "/api/books"
router
  .route("/")
  .get(bookClubsController.findAll)
  .post(bookClubsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookClubsController.findById)
  .put(bookClubsController.update)
  .delete(bookClubsController.remove);

router.post("/searchall", function(req, res) {
  // console.log(req.body.searchByBookNameByBook, "This is the search object");

  db.Club.find({ _id: req.body.clubid }).then(result => {
    // console.log(result);
    res.send(result);
  });
});

router.post("/searchall2", function(req, res) {
  // console.log(req.body.searchByBookNameByBook, "This is the search object");

  db.Club.find({  }).then(result => {
    console.log(result);
    res.send(result);
  });
});


router.post("/search", function(req, res) {
  // console.log(req.body.searchByBookNameByBook, "This is the search object");

  db.Club.find({ bookName: req.body.searchByBookNameByBook }).then(result => {
    // console.log(result);
    res.send(result);
  });
});

router.post("/search2", function(req, res) {
  // console.log(req.body.searchClubName, "This is the search object in bookclub.js");

  db.Club.find({ clubName: req.body.searchClubName }).then(result => {
    // console.log( "line 34", result);
    res.send(result);
  });
});

router.post("/addClub", function(req, res) {
  // console.log(req.body.searchClubName, "This is the search object in bookclub.js *%%*&%^E*^E");
  // console.log(req.body, "This is the search object in bookclub.js in line 40 bookclub.js");
  db.Club.findOneAndUpdate(
    { _id: req.body.clubid },
    { $push: { clubMembers: req.body.useradd } }
  )
  .then(result => {
    // console.log( "line 34", result);
    res.send(result);
  });
});

router.post("/discussionadd", function(req, res) {
  db.Club.findOneAndUpdate(
    { _id: req.body.clubid },
    { $push: { discussions: req.body.discussionadd } }
  )
  .then(result => {
    // console.log( "line 34", result);
    res.send(result);
  });
});

module.exports = router;
