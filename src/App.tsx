import React from 'react';
import './App.scss';
import "antd/dist/antd.css";
import './icofont.min.css';

import EmailInbox from './components/emailInbox/EmailInbox';


const App: React.FC = () => {
  return (
    <EmailInbox mode={1} />
  );
}

export default App;
