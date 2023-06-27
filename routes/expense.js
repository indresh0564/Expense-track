const Express = require('express');
const expense_Controller = require('../controller/expense');
const router = Express.Router();

router.get('/getExpense', expense_Controller.getExpenses);

router.post('/postExpense', expense_Controller.addExpenses);

router.delete('/deleteExpense/:id', expense_Controller.deleteExpenses);

module.exports = router;