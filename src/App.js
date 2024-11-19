import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './components/loginPage';
import UserListPage from './pages/userListPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user-list" element={<UserListPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
