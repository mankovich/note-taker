const router = require('express').Router();

//import modular routers for notes.html and index.html
const notesRouter = require('./notes');
const indexRouter = require('./index');

router.use('/notes', notesRouter);
router.use('/index', indexRouter);


module.exports = router;