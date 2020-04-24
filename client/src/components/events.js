import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ChangePlaces extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/target' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Redirect</button>
            </div>
        )
    }
}