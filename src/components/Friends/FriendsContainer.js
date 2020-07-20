import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from "react-redux";
import {getFriends, setDefaultData} from "../../redux/firendsReducer";
import Friends from "./Friends";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";


class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getFriends(this.props.friendsCount, this.props.offset);
    }

    componentWillUnmount() {
        this.props.setDefaultData();
    }

    render() {
        return this.props.fetchingData ?
            <ScreenSpinner /> :
            <Friends id='friends' go={this.props.go} {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        friendsCount: state.friendsPage.friendsCount,
        offset: state.friendsPage.offset,
        fetchingData: state.friendsPage.fetchingData,
        numberOfFriends: state.friendsPage.numberOfFriends
    };
};

export default connect(mapStateToProps, {getFriends, setDefaultData})(FriendsContainer);

