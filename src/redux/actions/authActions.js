import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await axios.post('https://reqres.in/api/login', {
      email,
      password,
    });
    const token = response.data.token;

    // Save token securely
    localStorage.setItem('authToken', token);

    dispatch({ type: 'LOGIN_SUCCESS', payload: token });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.error });
  }
};
