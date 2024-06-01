import React, { Component } from "react";

class MediumLayout extends Component {
  render() {
    let section = null,
      className = "";

    if (this.props.className !== undefined) {
      className = this.props.className;
    }

    section = (
      <section
        className={
          className +
          " medium--layout " +
          this.props.className2
        }
      >
        {this.props.children}
      </section>
    );

    return section;
  }
}

export default MediumLayout;
