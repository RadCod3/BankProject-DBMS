const FDModel = require('../models/fd.model');

exports.createFD = (req, res) => {
  // TODO check whether savings account exists before creating FD
  console.log(req.body);
  const fd = req.body.fd;
  FDModel.create(fd, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating customers.',
      });
    else res.send(data);
  });
};

//
exports.getCustomerFD = (req, res) => {
  console.log(req.params);
  const customerID = req.params.customerID;
  FDModel.getAll(customerID, (err, data) => {
    if (err.kind === 'not_found') {
      res.status(404).send({
        message: `No fixed deposits found for customer ${customerID}.`,
      });
    } else if (err.kind != 'success') {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving accounts.',
      });
    } else res.send(data);
  });
};