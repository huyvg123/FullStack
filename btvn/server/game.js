function error(error) {
    const response = {
      status: 0,
      message: error
    };
    return JSON.stringify(response, null, 4);
  }
  
  function success(data) {
    const response = {
      status: 1,
      data: data
    };
    return JSON.stringify(response, null, 4);
  }
  
  module.exports = {
    error,
    success
  }