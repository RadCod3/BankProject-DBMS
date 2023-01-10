import axios from 'axios';
import { HOST } from './config';

// get all fd accounts of a given customer id
export async function getCustomerOnlineLoans() {
  try {
    const response = await axios.get(`${HOST}/onlineLoans/customer`);
    return response.data;
  } catch (err) {
    // console.log(err);
    return await Promise.reject('Failed to get online deposits list!');
  }
}

// gets installmetns for a givwen loan ID
export async function getOnlineLoanInstallment(accountID) {
  try {
    const response = await axios.get(
      `${HOST}/onlineLoans/onlineLoanInstallment/${accountID}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get installment list!');
  }
}
