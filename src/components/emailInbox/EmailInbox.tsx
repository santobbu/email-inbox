import * as React from 'react'
import EmailList from '../emailList/EmailList';
import { EmailItem as EmailItemTypes } from '../../types/Emails';
import { Layout, Menu, Icon } from 'antd';
import './EmailInbox.scss';

const { Content, Sider } = Layout;

interface Props {
    mode?: number;
}

interface State {
    data: EmailItemTypes[];
}

class EmailInbox extends React.Component<Props, State> {
    static displayName = 'EmailInbox';

    constructor(props: Props) {
        super(props);

        this.state = { 
            data: [], 
        };
    } 

    componentDidMount = () => {
        fetch("/api/email")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                data: result.data,
              });
            },
            (error) => {
              this.setState({
                data: []
              });
            }
          )
      }
    

    public render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['sub1']}>
                        <Menu.SubMenu key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    Santobbu@gmail.com
                                </span>
                            }
                        >
                            <Menu.Item key="1">Inbox</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="EmailList__Container">
                        <EmailList data={this.state.data} />
                    </Content>
                </Layout>
            </Layout>  
        );
    }
}

export default EmailInbox
