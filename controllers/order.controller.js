export function fetchOrder(req,res){
    res.status(200).json({success : true, id : req.params.id, message : 'order fetched successfully'})
}