import React, { Component } from 'react'
import { Button, Icon, Segment, Container, Header } from 'semantic-ui-react'

import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import Avatar from "./Avatar"
import Stats from "./Stats"
import Notes from "./Notes"

class Dashboard extends Component {

  constructor() {
    super();
  }

  render() {
    const { user } = this.props.auth
    console.log(user)
    return (
      <Container textAlign='center'>
        <Segment placeholder>
          <Header icon>
            <Avatar src={user.photoURL} />
          </Header>
          Hi {user.displayName} how are you feeling today?
          <Segment.Inline>
            <Stats />
          </Segment.Inline>
        </Segment>
        <Notes />
      </Container>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { })(withRouter(Dashboard))
