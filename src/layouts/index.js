import React , { Component } from 'react'
import UserLayout from './UserLayout'
import BasicLayout from './BasicLayout'
import { connect } from 'dva';

class Index extends Component{
  render(){
    if(this.props.location.pathname === '/login'){
      return (
        <UserLayout />
      )
    }
    return(
      <BasicLayout {...this.props} />
    )
  }
}

export default connect(({ global }) => ({
  global
}))(Index);