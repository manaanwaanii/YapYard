export const sendMessage = async (req, res) => {
   try{
    const {message} = req.body;
    const {id} = req.params;
    const senderId = req.user._Id
   }
   catch (error) {
    console.log("Error in Controller:", error.message)
    res.status(500).json({Error:"Internal Server Error"});
   }
};