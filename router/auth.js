const router = require("express").Router();

router.get("/", (req, res)=> {
  res.send("its auth user root");
});

module.exports = router;