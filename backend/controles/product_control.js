const ProductModel=require('../models/productmodel')



//Get Products API='/api/v1/products
exports.getproduct = async(req, res, next) => {
  let query = req.query.keyword?{category: {
    $regex:req.query.keyword,
    $options:'i'
  }}:{}
 const products= await ProductModel.find(query)

  res.json({
    success: true,
    products
  });
}
//Get SingleProducts API='/api/v1/products/:id

exports.getsingleproduct = async(req,res, next) => {
  try {
    const products= await ProductModel.findById(req.params.id)

    res.json({
        success: true,
        products
      });
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
  }

}