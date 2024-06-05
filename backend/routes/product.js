const { getproduct, getsingleproduct } = require('../controles/product_control');

const router=require('express').Router();


router.route('/products').get(getproduct)
router.route('/product/:id').get(getsingleproduct)


module.exports=router;
