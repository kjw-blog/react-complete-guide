import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidMount() {
    console.log('e-b');
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something Error!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
