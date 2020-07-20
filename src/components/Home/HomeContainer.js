import React from 'react';
import Home from "./Home";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from "react-redux";
import {getHome} from "../../redux/homeReducer";




class HomeContainer extends React.Component {

    componentDidMount() {
        let profile = {
            photo: this.props.photo,
            firstName: this.props.firstName,
            secondName: this.props.secondName,
            age: this.props.age,
            friendsCount: this.props.friendsCount
        };
        this.props.getHome(profile);
    }

    render() {
        return this.props.isFetching ?
            <Spinner size="large" style={{ marginTop: 20 }} /> :
            <Home id='home' go={this.props.go} {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        photo: state.home.photo,
        firstName: state.home.firstName,
        secondName: state.home.secondName,
        age: state.home.age,
        friendsCount: state.home.friendsCount,
        isFetching: state.home.isFetching
    };
}

export default connect(mapStateToProps, {getHome})(HomeContainer);

