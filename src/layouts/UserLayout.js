import React, { Component } from 'react'
import { connect } from 'dva'
import { Button } from 'antd'

class UserLayout extends Component {
  render() {
    const { key } = this.props.global
    return (
      <>
        <h1>{key}</h1>
        <Button onClick={() => {
          this.props.dispatch({
            type: "global/getKey",
            payload: {
              key: 'saopao'
            }
          })
        }}>点击</Button>
      </>
    )
  }
}

export default connect(({ global }) => ({
  global
}))(UserLayout)