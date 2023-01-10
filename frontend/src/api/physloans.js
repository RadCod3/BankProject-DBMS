import axios from 'axios';
import { HOST } from './config';

// get all physical loan accounts of a given customer id
export async function getCustomerPhysicalLoans() {
  try {
    const response = await axios.get(`${HOST}/physicalLoans/customer`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to get physical loans list!');
  }
}

// create a new physical loan
export async function createPhysicalLoan(loan) {
  try {
    const response = await axios.post(`${HOST}/physicalLoans/create`, loan);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to create physical loan!');
  }
}

// get installments by loanID
export async function getPhysicalLoanInstallment(accountID) {
  try {
    const response = await axios.get(
      `${HOST}/physicalLoans/physicalLoanInstallment/${accountID}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get installment list!');
  }
}

export async function getLoansNeedingApproval() {
  try {
    const response = await axios.get(`${HOST}/physicalLoans/needApproval`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to get loans needing approval!');
  }
}

export async function approveLoan(loanID) {
  try {
    const response = await axios.put(`${HOST}/physicalLoans/approve/${loanID}`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to approve loan!');
  }
}

export async function getPhysicalLoanByID(loanID) {
  try {
    const response = await axios.get(`${HOST}/physicalLoans/${loanID}`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to get physical loan!');
  }
}

export async function rejectLoan(loanID) {
  try {
    const response = await axios.put(`${HOST}/physicalLoans/reject/${loanID}`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to reject loan!');
  }
}
