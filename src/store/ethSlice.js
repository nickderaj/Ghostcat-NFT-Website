import { createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

const ethSlice = createSlice({
  name: 'wallet',
  initialState: { account: null, error: null, balance: null },
  reducers: {
    setAccount(state, action) {
      state.account = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const { setAccount, setError, setBalance } = ethSlice.actions;
export default ethSlice.reducer;

export const connectWalletHandler = () => {
  return async (dispatch) => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const accountInfo = await window.ethereum.request({ method: 'eth_requestAccounts' });
        dispatch(setAccount(accountInfo[0]));
        dispatch(setBalance('Loading...'));

        const balanceReq = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accountInfo[0], 'latest'],
        });
        const balance = +ethers.utils.formatEther(balanceReq);
        dispatch(setBalance(balance.toFixed(3)));
      } catch (error) {
        dispatch(setError(error.message));
      }
    } else {
      console.log('Need to install MetaMask');
      dispatch(setError('Please install MetaMask to mint'));
    }
  };
};
