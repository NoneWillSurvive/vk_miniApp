import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Counter from "@vkontakte/vkui/dist/components/Counter/Counter";
import List from "@vkontakte/vkui/dist/components/List/List";
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';


let Home = (props) => {
    return (
        <Panel id={props.id}>
            <PanelHeader>TargetHunter</PanelHeader>
            <Group title="User Data Fetched with VK Bridge">
                <Cell
                    before={props.photo ? <Avatar size={80} src={props.photo}/> : null}
                    description={`Возраст: ${props.age ?  ` ${props.age} лет` : ` не указано.`}`}
                >
                    {`${props.firstName} ${props.secondName}`}
                </Cell>
            </Group>

            <Group title="Navigation Example">
                    <List>
                        <Cell before={<Icon28UserOutline />} indicator={<Counter>{props.friendsCount}</Counter>}>Друзья</Cell>
                    </List>
                <Div>
                    <Button size="xl" level="2" onClick={props.go} data-to="friendsView">
                        {`Посмотреть друзей`}
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
}


export default Home;
