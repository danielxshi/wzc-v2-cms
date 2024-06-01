import React, { Component } from 'react'

class SmallLayout extends Component {

  render() {

    let section = null,
        className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }

    section = (
      <section className={className + " small--layout grid--container"}>
        {this.props.children}
      </section>
    )

    return (
      section
    );
  }
};

export default SmallLayout;