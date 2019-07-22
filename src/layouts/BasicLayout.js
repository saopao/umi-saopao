import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import logoImg from '../assets/smlieFace.png'
import Link from 'umi/link'
import styles from './index.css'

//侧边栏数据
const menuArr = [
  {
    title:"用户权限",
    icon:"user",
    arr:[
      {name:'用户管理',link:'/'},
      {name:'角色管理',link:'/roleManage'},
      {name:'权限管理',link:'/permisManage'},
      {name:'隐私管理',link:'/privacyManage'},
    ],
  },{
    title:'操作轨迹',
    icon:'line-chart',
    arr:[
      {name:'用户操作轨迹',link:'/trajectory'}
    ]
  },{
    title:'数据统计',
    icon:'pie-chart',
    arr:[
      {name:'基础表统计',link:'/basisStat'},
      {name:'协助诊疗患者统计',link:'/assistStat'},
    ],
  },{
    title:"数据管理",
    icon:"dashboard",
    arr:[
      {name:"数据主题",link:"/dataTheme"},
      {name:"数据模板",link:"/dataTemplate"}
    ]
  },{
    title:"数据查询",
    icon:"bar-chart",
    arr:[
      {name:"患者列表",link:"/patientsList"},
      {name:"患者信息查询",link:"/patientsInfoQuery"}
    ]
  }
]

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Index extends Component {

  state = {
    collapsed: false,
    openKeys: [`${menuArr[0].title}`],
  };
  
  // 侧边栏开关
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    // eslint-disable-next-line no-cond-assign
    if (menuArr.filter(title => title.title === latestOpenKey).length = 0) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  //侧边栏收缩框
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    console.log(this.props.global)
  }

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
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            // defaultOpenKeys={[`${menuArr[0].title}`]} 
            // defaultSelectedKeys={[`${menuArr[0].arr[0].name}`]} 
            mode="inline">
            {
              menuArr.map((item) => {
                return (
                  <SubMenu
                    key={item.title}
                    title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                  >
                    {item.arr.map((e) => {
                      return(
                        <Menu.Item key={e.name}>
                          <Link to={e.link}>{e.name}</Link>
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
          <div className={styles.row}>
            <Content className={styles.content}>
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              This Is SaoPao
            </Footer>
          </div>
        </Layout>
      </Layout>
    )
  }
}
export default Index