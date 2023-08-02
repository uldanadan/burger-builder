import React, { Component } from "react";



class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (err, stack) => {
        this.setState({hasError: true, errorMessage: err.message})
    }

    render(){
        if (this.state.hasError) {
            return this.props.errorComp
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary