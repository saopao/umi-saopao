import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import styles from './index.css'
import logoImg from '../assets/smlieFace.png'
import Link from 'umi/link'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Index extends Component {

  state = {
    collapsed: false
  };
  //侧边栏搜索框
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //侧边栏数据
  menuArr = [
    {
      title:"用户权限",
      icon:"user",
      arr:["用户管理","角色管理","权限管理","隐私管理"]
    },{
      title:"操作轨迹",
      icon:"line-chart",
      arr:["用户操作轨迹"]
    },{
      title:"数据统计",
      icon:"pie-chart",
      arr:["基础表统计","协助诊疗患者统计"]
    },{
      title:"数据管理",
      icon:"dashboard",
      arr:["数据主题","数据模板"]
    },{
      title:"数据查询",
      icon:"bar-chart",
      arr:["患者列表","患者信息查询"]
    }
  ]

  render() {
    return (
      <Layout style={{minHeight:'100vh'}}>
        <Sider className={styles.sider} trigger={null} theme="light" width="260" collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}>
            <img src={logoImg} alt="logo" />
            <h1>This Is SaoPao</h1>
          </div>
          <Menu
            style={{border:'none'}}
            theme="light" 
            defaultOpenKeys={[`${this.menuArr[0].title}`]} 
            defaultSelectedKeys={[`${this.menuArr[0].arr[0]}`]} 
            mode="inline">
            {
              this.menuArr.map((item) => {
                return (
                  <SubMenu
                    key={item.title}
                    title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                  >
                    {item.arr.map((e) => {
                      return(
                        <Menu.Item key={e}>
                          <Link to="/login">{e}</Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className={styles.layout} style={this.state.collapsed ? {marginLeft:"80px"} : {marginLeft:"260px"}}>
          <Header className={styles.header} style={this.state.collapsed ? {paddingLeft: "80px"} : {paddingLeft: "260px"}}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles.content}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            This Is SaoPao
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Index