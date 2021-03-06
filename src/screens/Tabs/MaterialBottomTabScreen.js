import React from 'react';
import { Alert } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Entypo from 'react-native-vector-icons/Entypo';

const MaterialBottomTabScreen = createMaterialBottomTabNavigator(
    {
        Tab1: { 
            screen: Page1,
            navigationOptions: {
                title: 'Sayfa 1',
                tabBarIcon: () => (<Entypo 
                    name="facebook"
                    color="white"
                    size={25}
                />),
                tabBarAccesbilityLabel: 'Erişebilirlik Durumu',
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    //console.log(navigation.state);
                    Alert.alert('React Native Eğitim', `${navigation.state.routeName} Tıklandı`);
                    defaultHandler();
                }
            }
        },
        Tab2: 
        { 
            screen: Page2,
            navigationOptions: {
                title: 'Sayfa 2',
                tabBarIcon: () => (<Entypo 
                    name="twitter"
                    color="white"
                    size={25}
                />)
            }
        },
        Tab3: 
        { 
            screen: Page3,
            navigationOptions: {
                title: 'Sayfa 3',
                tabBarIcon: () => (<Entypo 
                    name="instagram"
                    color="white"
                    size={25}
                />)
            }
        }
    }, 
    {
        initialRouteName: 'Tab1',
        backBehavior: 'initialRoute',
        activeColor: 'red',
        inactiveColor: 'blue',
        barStyle: {
            backgroundColor: 'yellow'
        }
    });

export default MaterialBottomTabScreen;
