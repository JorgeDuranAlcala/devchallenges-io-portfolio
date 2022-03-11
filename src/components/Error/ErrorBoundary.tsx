import React, { Component, ErrorInfo } from 'react'

type Props = {}

type State = {
  hasError: boolean,
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(Date.now(), error, "\n", JSON.stringify(errorInfo, null, 2), "\n")
    this.setState({ error })
  }

  render() {

    if (this.state.hasError) {
      
      return (
      <div>
        <h1 className="font-bold">Something went wrong</h1>
        <p>
          Message: {this.state.error?.message}
          <br/>
          Stack: {this.state.error?.stack}
        </p>
      </div>
      )
    }

    return  this.props.children
  }
}