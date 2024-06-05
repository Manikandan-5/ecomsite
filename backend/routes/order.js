const { createord } = require('../controles/ordercontrol');

const router=require('express').Router();


router.route('/order').post(createord)
module.exports=router;