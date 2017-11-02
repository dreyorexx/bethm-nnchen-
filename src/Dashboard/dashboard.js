import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
<Dashboard />, document.getElementById('root')
);
