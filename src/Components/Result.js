import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={8}
      transitionLeaveTimeout={5}
      transitionAppear
      transitionAppearTimeout={5}
    >
      <div>
        You got most of the questions <strong>{props.quizResult}</strong>!
      </div>
    </ReactCSSTransitionGroup>
  );

}


Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
