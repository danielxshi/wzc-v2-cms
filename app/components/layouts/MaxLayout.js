import React, { Component } from 'react';

class MaxLayout extends Component {
  render() {
    let section = null,
      className = '';

    if (this.props.className !== undefined) {
      className = this.props.className;
    }

    section = (
      <section className={className + ' max--layout grid--container'}>
        {this.props.children}
      </section>
    );

    return section;
  }
}

export default MaxLayout;