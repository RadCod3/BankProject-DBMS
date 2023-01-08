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
