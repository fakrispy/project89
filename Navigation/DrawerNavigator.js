import React from 'react';
import {createDrawerNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from "./StackNavigator";
import Profile from "../Screens/Profile";
import { render } from 'react-dom';

const Drawer = createDrawerNavigator();

componentDidMount(){
    let theme;
    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    .on("/value/", function (snapshot) {
        theme=snapshot.val().current_theme;

    });
}
render() {
    let props = this.props;
    return(
        <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: "#e91e63",
            inactiveTintColor: this.state.light_theme ? "black" : "white",
            itemStyle: {marginVertical: 5}
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            <Drawer.Screen
            name = "Home"
            component = {StackNavigator}
            options = {{ummountOnBlur : true}}
            />
            <Drawer.Screen
            name = "Profile"
            component = {Profile}
            options = {{ummountOnBlur : true}}
            />
            <Drawer.Screen
            name = "Logout"
            component = {Logout}
            options = {{ummountOnBlur : true}}
            />
            

        </Drawer.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;