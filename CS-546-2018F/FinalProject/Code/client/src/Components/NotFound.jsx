import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

class NotFound extends Component {
    render() {
        return (
            <Message>
                <Message.Header>Wrong URL</Message.Header>
                <p>Page Not Found, you can redirect using the navigation bar.</p>
            </Message>
        )
    }
}

export default NotFound;