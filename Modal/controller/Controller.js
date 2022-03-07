const { UserDetails } = require("../Schema_Modal");

const GetUserDetail = async (req, res) => {
  try {
    const Data = await UserDetails.find();
    return res.status(200).json(Data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const GetUserDetailById = async(req,res)=>{
  if(UserDetails) {
    const Dataa =  await UserDetails.find({_id:req.params._id});
    return res.status(200).json(Dataa);
  } else{
    return res.status(500).json(Dataa);
  }
}

const PostUserDetail = async (req, res) => {
  const {id,Name,Email,Discription,Mobile}=req.body;
  const NewPost = new UserDetails({id,Name,Email,Discription,Mobile});
  if(NewPost){
    await NewPost.save();
   return res.json(NewPost);
  }else if (NewPost){
    return  res.status(409).json({ message: error.message });
  }
};
 const DeleteUserDetail =async(req,res)=>{
   if(UserDetails){
       await UserDetails.findByIdAndDelete({_id:req.params._id})
       res.status(200).send("delete")
   }else {
    res.status(503).send("Not deleted");
  }
 }
 const PutUserDetail =async(req,res)=>{
  if (UserDetails) {
    await UserDetails.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $set: {
          _id: req.body._id,
          id: req.body.id,
          Email: req.body.Email,
          Mobile:req.body.Mobile,
          Name: req.body.Name,
          Discription: req.body.Discription,
        },
      },
      { new: true }
      );
      res.status(200).send({msg:"Is edited"})
    } else {
      console.log("not able to edit")
      res.status(503).send("Not albe to edit");
    }
 }

module.exports = { GetUserDetail, PostUserDetail,PutUserDetail,DeleteUserDetail,GetUserDetailById };