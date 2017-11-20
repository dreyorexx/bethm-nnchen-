import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Icon, Grid } from 'semantic-ui-react';

import './test.css';
import $ from 'jquery';

export default class Test extends React.Component {

  constructor(){
    super()
    this.state={
      show:true
    }
  }

  operation(){
    this.setState({
    showMe:false
    })
  }

  render() {
    return (

        <div>
          <h2>Test</h2>
          {
            this.state.showMe?
            <div>
              Hide Me
            </div>
            :null
          }

          <button onClick={()=>this.operation()}>Click Me</button>
        </div>

    );
  }
}


ReactDOM.render(
<Test />, document.getElementById('root')
);
