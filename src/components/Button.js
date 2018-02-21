import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      active,
      children,
      onClick,
      ...rest
    } = this.props;

    const className = 'button' + (active) ? ' active' : '';

    return (
      <button {...rest} className={className} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button;
