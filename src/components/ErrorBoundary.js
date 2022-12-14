import React, { Component } from "react";
// import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="error-header">Something Went Wrong!!</h1>
          <div className="error-btn">
            <button className="btn" onClick={refreshPage}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
