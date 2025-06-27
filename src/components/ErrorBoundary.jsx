import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { console.error('ErrorBoundary', err, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Something went wrong.</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => location.reload()}>
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
