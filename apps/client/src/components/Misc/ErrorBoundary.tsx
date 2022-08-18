import React, { Component, ErrorInfo, ReactNode } from "react";

import { Error } from "@/views";

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) <Error />;

    return this.props.children;
  }
}

export default ErrorBoundary;
