import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Oops! Something went wrong.</h1>

          <p>
            An unexpected error occurred while loading this page. Please refresh
            the page or contact me if the issue persists.
          </p>

          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>

          <a href="mailto:bishalbudhathoki004@gmail.com">
            Contact Me
          </a>

          <details>
            <summary>Developer Details</summary>
            <pre>{this.state.error?.toString()}</pre>
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;