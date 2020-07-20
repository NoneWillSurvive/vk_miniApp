import React, {useState, useEffect} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import HomeContainer from "./components/Home/HomeContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {Root} from "@vkontakte/vkui";

const App = () => {
    const [activeView, setActiveView] = useState('homeView');
    const go = e => {
		setActiveView(e.currentTarget.dataset.to);
    };

    // return (
    // 	<View activePanel={activePanel}>
    // 		{/*<Home id='home' fetchedUser={fetchedUser} go={go} />*/}
    // 		<HomeContainer id='home' go={go}/>
    // 		<FriendsContainer id='friends' go={go} />
    // 		{/*<Persik id='persik' go={go} />*/}
    // 	</View>
    // );
    return (
        <Root activeView={activeView}>
            <View id='homeView' activePanel='home'>
                <HomeContainer id='home' go={go}/>
            </View>
            <View id='friendsView' activePanel='friends'>
                <FriendsContainer id='friends' go={go}/>
            </View>
        </Root>
    );
}

export default App;

