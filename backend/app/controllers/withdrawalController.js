const WithdrawalModel = require('../models/withdrawal.model');

exports.findAll = (req, res) => {
  console.log(req.body);
  WithdrawalModel.getAll(null, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving withdrawals.',
      });
    else res.send(data);
  });
};

exports.findByAccountID = (req, res) => {
  console.log(req.body);
  const id = req.params.AccountID;
  WithdrawalModel.findByAccountId(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving withdrawals.',
      });
    else res.send(data);
  });
};


exports.create = (req, res) => {
  
  if (!req.body) {
    res.status(400).send({
      message: 'Invalid Content!',
    });
  }

  const withdrawal = {
    accountID: req.body.AccountID,
    amount: req.body.amount,
  };

  WithdrawalModel.create(withdrawal, (err, data) => {
    if (err){
      res.status(500).send({
        message: err.message || 'Some error occurred while creating withdrawal.',
      });
    }else res.send(data);
  });
};
