import React from 'react';

export default class ScrollSpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    if (this.ref.getBoundingClientReact().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMout() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef}></div>;
  }
}
