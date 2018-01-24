const ResponseHandler = (req, res, status, success, message, payload, payloadName) => {
  const responseData = {
    success,
    message,
  };
  if (payloadName) {
    responseData[payloadName] = payload;
  }
  res.status(status).send(responseData);
};

export default ResponseHandler;
