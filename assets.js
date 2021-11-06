const setResponse = (res,code,msg,data)=>{
    switch(code){
      case 200 : {
        return res.status(200).json({
          success : true ,
          msg,
          apiData : data
        })
      }
      case 400 : {
        return res.status(400).json({
          success : false ,
          msg
        })
      }
      case 500 : {
        return res.status(500).json({
          success : false ,
          msg
        })
      }
    }
  }
  
  module.exports = {setResponse}