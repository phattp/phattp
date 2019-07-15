import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../actions/profile";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderProfile() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }

    return this.props.profile.map(me => {
      return <h1 key={me.id}>{me.first_name}</h1>;
    });
  }

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
