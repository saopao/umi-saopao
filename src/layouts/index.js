import React , { Component } from 'react'
import UserLayout from './UserLayout'
import BasicLayout from './BasicLayout'

class Index extends Component{
  render(){
    if(this.props.location.pathname === '/login'){
      return (
        <UserLayout>
          {this.props.children}
        </UserLayout>
      )
    }
    return(
      <BasicLayout>
        {this.props.children}
      </BasicLayout>
    )
  }
}
export default Index