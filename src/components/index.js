import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUsers } from '../actions'

class UsersPage extends Component{
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
  }
  update(){
    let user = {
      userId: 'FCE4B150-5FD5-4E80-988D-3E1A5A184FC8'
    }
    this.props.getUsers(user)
  }
  componentWillMount(){
    this.update()
  }
  render() {
    console.log(this.props)
    return (
      <div>当前用户数{this.props.users.length}</div>
    )
  }
}

UsersPage.propTypes = {
  getUsers: PropTypes.func.isRequired
}

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = dispatch  => bindActionCreators(
  { getUsers },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)