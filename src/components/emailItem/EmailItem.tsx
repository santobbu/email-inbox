
import * as React from 'react'
import { List, Avatar  } from 'antd';
import { EmailItem as EmailItemTypes } from '../../types/Emails';
import './EmailItem.scss';

interface Props extends EmailItemTypes {
    isSelected: boolean;
    index: number;
    onItemClick: (event: React.MouseEvent<HTMLInputElement>, index: number) => void;
    color: string;
}

const EmailItem: React.FC<Props> = React.memo(props => {

    const onDeleteClicked = () => {};
    const onOpenClicked = () => {};
    const onMarkClicked = () => {};
    const onPinClicked = () => {};

    const renderEmailAction = () => {
        if (!props.isSelected) return null;

        return (
            <div className="EmailItem__Action">
                <i className="ficon icofont-bin" onClick={onDeleteClicked} />
                <i className="ficon icofont-envelope" onClick={onOpenClicked} />
                <i className="ficon icofont-flag" onClick={onMarkClicked} />
                <i className="ficon icofont-tack-pin" onClick={onPinClicked} />
            </div>
        );
    ;}
    
    const renderItemContent = () => {
        return (
            <div className="EmailItem__Content">
                <div className="EmailItem__Name">{props.from.name}</div>
                {renderEmailAction()}
                <div className="EmailItem__Subject">{props.subject}</div>
                <div className="EmailItem__Time">{props.time}</div>
                <div className="EmailItem__Body">{props.body}</div>
            </div>
        );
    };

    const onItemClick = (event: React.MouseEvent<HTMLInputElement>) => {
        props.onItemClick(event, props.index);
    }

    const getAvatar = () => {
        if (props.isSelected) {
            return <i className="icofont-check-circled"></i>;
        }

        var matches = props.from.name.match(/\b(\w)/g);
        var acronym = matches && matches.join('').slice(0, 2);

        return (
            <div>{acronym}</div>
        );
    }

    const avatarClass = `ant-avatar--${props.color}`;
    const selectedAvatar = props.isSelected ? 'ant-avatar--selected' : '';

    return (
        <List.Item className={`EmailItem ${props.isSelected ? 'EmailItem--selected' : ''}`} onClick={onItemClick}>
            <List.Item.Meta
                avatar={
                    <Avatar children={getAvatar()} className={`${avatarClass} ${selectedAvatar}`}/>
                }
                description={renderItemContent()}
            />
        </List.Item>
    );
})

EmailItem.displayName = 'EmailItem'
export default EmailItem