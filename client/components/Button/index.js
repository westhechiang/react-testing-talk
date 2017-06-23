import React from 'react';
import PropTypes from 'prop-types';
import s from './style.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    const { buttonContent } = this.props;

    return (
      <div
        className={s.button}
        onClick={this.handleClick}
        role="button"
        tabIndex={0}
      >
        { buttonContent }
      </div>
    );
  }
}

Button.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
