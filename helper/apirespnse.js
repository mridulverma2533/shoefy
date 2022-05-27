exports.successResponseWithData = function (res, msg, data) {
    var resData = {
      // status: true,
      status: 101,
      message: msg,
      data: data,
    };
    return res.status(200).json(resData);
    // res.send(resData)
  };
  
  exports.ErrorResponse = function (res, msg) {
    var data = {
      status: false,
      responseCode:400,
      message: msg,
    };
    return res.status(400).json(data);
  };
  exports.invalidresponse = function (res, msg, data) {
    var resData = {
      // status: true,
      status: 104,
      message: msg,
      data: data,
    };
    return res.status(200).json(resData);
    // res.send(resData)
  };