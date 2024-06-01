"use client"
import React, { Component } from 'react';

class LargeLayout extends Component {
  render() {
    let section = null,
      className = '';

    if (this.props.className !== undefined) {
      className = this.props.className;
    }

    section = (
      <section className={className + ' large--layout grid--container'}>
        {this.props.children}
      </section>
    );

    return section;
  }
}

export default LargeLayout;