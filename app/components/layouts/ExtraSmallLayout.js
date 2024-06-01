import React, { Component } from 'react'

class ExtraSmallLayout extends Component {

  render() {

    let section = null,
        className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }

    section = (
      <section className={className + " xs--layout grid--container"}>
        {this.props.children}
      </section>
    )

    return (
      section
    );
  }
};

export default ExtraSmallLayout;