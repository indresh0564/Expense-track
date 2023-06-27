const user_model = require('../model/expense');

exports.addExpenses = async (req,res,next)=>{
    try{
        const expenses = req.body.expense;
        const description = req.body.description;
        const category = req.body.category;
        const data = await user_model.create({expenses:expenses,description:description,category:category});
        res.status(201).json({newExpense:data});
    }
    catch(err){
 console.log("somthing went wrong in conroller");
 res.status(500).json({err:err});
    }
}

exports.getExpenses = (req,res,next)=>{
user_model.findAll()
.then((response)=>{
    res.status(202).json(response);
})
.catch((err)=>
{
    console.log(err)
    res.status(501).json({err:err});
});
}

exports.deleteExpenses= async (req,res,next)=>{
    const Id = req.params.id;
    await user_model.destroy({where:{id:Id}});
    res.status(203).json({deletedUser:Id});
}



