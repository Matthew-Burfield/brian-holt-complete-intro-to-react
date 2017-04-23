import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
    render: function () {
      return (
        <div>
          <MyTitle title="props are the best" color="rebeccapurple" />
          <MyTitle title="Wow, okay" color="tomato" />
          <MyTitle title="JSX'ism" color="mediumaquamarine" />
          <MyTitle title="That is valid" color="peru" />
        </div>
      );
    },
  });

  ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));