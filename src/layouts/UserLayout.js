import React, { Component } from 'react'
import styles from './index.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Input, Icon, Form, Button, notification, Spin } from 'antd';
import { JSEncrypt } from 'jsencrypt'
import { connect } from 'dva';
import router from 'umi/router';

const encrypt = new JSEncrypt();

@connect(({ global, loading }) => ({
  global,
  loadingLogin: loading.effects['global/login'],
  loadingAll: loading.effects['global/getPublicKey']
}))
class UserLayout extends Component {

  //表单提交
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, global } = this.props
    if (!global.publicKey) {
      notification['error']({
        message: '请求错误',
        description: '未获取到登录秘钥，请刷新后重试!',
      });
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //加密
        encrypt.setPublicKey(global.publicKey);
        let code = encrypt.encrypt(values.code);
        let password = encrypt.encrypt(values.password);
        dispatch({
          type: "global/login",
          payload: { code, password }
        }).then((res) => {
          const { result, message } = res
          const type = result === 200 ? "success" : "error"
          notification[type]({
            message: message
          });
          if (result === 200) {
            console.log(res)
            // router.push('/');
          }
        }).catch((error => {
          notification['error']({
            message: '服务器错误!'
          });
        }))
      }
    });
  };

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: "global/getPublicKey"
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={this.props.loadingAll} size="large" tip="Loading..." >
        <div className={styles.container}>
          <div className={styles.contents}>
            <div>
              <Header />
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('code', {
                    rules: [{ required: true, message: '账号不能为空!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入账号!"
                      size="large"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '密码不能为空!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="请输入密码!"
                      size="large"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button loading={this.props.loadingLogin} type="primary" htmlType="submit" block size="large">登录</Button>
                </Form.Item>
              </Form>
            </div>
            <Footer />
          </div>
        </div>
      </Spin>
    )
  }
}

export default Form.create()(UserLayout)