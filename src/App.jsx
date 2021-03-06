/**
 * Main Application Component, As the entry point of the app some actions happen here:
 * - Defines Routes
 * - Handles Network Connection
 * - Loads Some Data from Local Storage
 * - Configures misc UI Components
 */

'use strict';
import React, {Component, StyleSheet, Text, View, Navigator, TouchableHighlight, NetInfo} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux'
import StatusBarAndroid from 'react-native-android-statusbar';
import {AppStyle} from './Styles/CommonStyles';

import TestComponent from './Components/TestComponent';
import HomeView from './Views/Home'
import TabView from './Views/TabView'
import LoginView from './Views/Login'
import ProfileView from './Views/Profile'
import Header from './Components/Header';
import Footer from './Components/Footer';

import { API_ENDPOINT } from './Configs/Url';

/**
 * Main Application Component
 */
export default class JapJete extends Component {
    render() {
        return (
            /* Enable Header or Footer by using header={Header} | footer={Footer} */
            <Router hideNavBar={true} hideTabBar={true}>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FadeAndroid}/>
                <Route name="login" hideTabBar={true} hideNavBar={true} component={LoginView} initial={true} title="Login"/>
                <Route name="home" component={TabView} title="Home"/>
                <Route name="profile" hideTabBar={false} hideNavBar={false} component={ProfileView} />
            </Router>
        );
    }
}

(function initialiseApp() {
    //StatusBarAndroid.hideStatusBar();
    StatusBarAndroid.setHexColor(AppStyle.Colors.FG);
    //TODO - Add Other Initializations Here
})();

/**
 * Main Application Style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
});