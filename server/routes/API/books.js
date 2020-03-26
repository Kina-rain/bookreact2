const router = require('express').Router();
const controller = require('../../controllers')

router.route('/')
    .get(controller.Book.findAll)
    .post(controller.Book.create);

router.route('/search/:name')
    .get(controller.Google.gSearch);

router.route('/:id')
    .get(controller.Book.findById)
    .put(controller.Book.update)
    .delete(controller.Book.remove);

module.exports = router;