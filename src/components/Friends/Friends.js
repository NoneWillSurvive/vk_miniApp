import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28MessagesOutline from '@vkontakte/icons/dist/28/messages_outline';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";

const Scroll = require('react-scroll');
const Element = Scroll.Element;
const scroller = Scroll.animateScroll;


const osName = platform();

let Friends = (props) => {

    let friendsArray = props.friends.map((element, index) => {
        // обработка скролинга до последнего элемента предыдущей загрузки
        let cickleCount = props.friendsCount / props.offset;


        return <Cell before={<Avatar size={40} src={element.photo_200}/>} after={<Icon28MessagesOutline/>}>
            {`${element.first_name} ${element.last_name}`}
        </Cell>

    });

    let onClickAdd = () => {
        if (props.offset < props.numberOfFriends) {
            props.getFriends(props.friendsCount, props.offset, props.numberOfFriends);
            // 48 размер Cell
            scroller.scrollTo(48 * (props.offset - 1), {});
        }
    };

    return <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="homeView">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Друзья
        </PanelHeader>
        {friendsArray}
        { props.offset<props.numberOfFriends?
            <CellButton before={<Icon24Add/>} onClick={onClickAdd}>Показать еще</CellButton>
            : <CellButton mode="danger" before={<Icon24Back/>} onClick={props.go} data-to="homeView">Вернуться назад</CellButton>
        }
    </Panel>

};

export default Friends;
