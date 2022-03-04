const { UserDetails } = require("../Schema_Modal");

const GetUserDetail = async (req, res) => {
  try {
    const Data = await UserDetails.find();
    return res.status(200).json(Data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const PostUserDetail = async (req, res) => {
  const {id,Name,Email,Discription}=req.body;
  const NewPost = new UserDetails({id,Name,Email,Discription});
  if(NewPost){
    await NewPost.save();
   return res.json(NewPost);
  }else if (NewPost){
    return  res.status(409).json({ message: error.message });
  }
};

module.exports = { GetUserDetail, PostUserDetail };
