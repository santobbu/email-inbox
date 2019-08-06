
import * as React from 'react'
import { List } from 'antd';
import { EmailItem as EmailItemTypes } from '../../types/Emails';
import EmailItem from '../emailItem/EmailItem';
import './EmailList.scss';

interface Props {
    data: EmailItemTypes[];
}

interface State {
    selectedIndex: number;
}

class EmailList extends React.Component<Props, State> {
    static displayName = 'EmailList';
    private colorsList = ['blue', 'pink', 'green', 'brown', 'skyBlue'];

    constructor(props: Props) {
        super(props);
        this.state = { 
            selectedIndex: -1, 
        };
    } 

    private renderEmailHeader = () => {
        return (
            <div className="Inbox__Header">
                <div className="Inbox__LeftContent">Inbox</div>
                <div className="Inbox__RightContent">
                    Filter 
                    <i className="Inbox__Arrow Inbox__Arrow--down"></i>
                </div>
            </div>
        );
    }

    private renderEmailItem: any = () => {
        if (!this.props.data) return null;

        return (
            <List
                dataSource={this.props.data}
                renderItem={(item, index) => (
                    <EmailItem key={index} 
                        {...item}
                        index={index}
                        onItemClick={this.onItemClick}
                        isSelected={this.isSelectedItem(index)}
                        color={this.colorsList[index]}
                    /> 
                )}
            />
        );
    }

    private onItemClick = (event: React.MouseEvent<HTMLInputElement>, index: number): void => {
        this.setState({
            selectedIndex: index,
        });
    }
  
    private isSelectedItem = (index: number): boolean => {
        return this.state.selectedIndex === index;
    }

    public render() {
        return (
            <div className="demo-infinite-container">
                {this.renderEmailHeader()}
                {this.renderEmailItem()}
            </div>    
        );
    }
}

export default EmailList