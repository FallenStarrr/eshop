const Router = require('express')
const brandController = require('../controllers/brandController')

const router = new Router()

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router