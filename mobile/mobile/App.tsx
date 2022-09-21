import {useRef, useEffect} from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { BackGround } from './src/components/BackGround';
import { Loading } from './src/components/Loading';

import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotification';
import {} from 'expo-modules-core';


export default function App() {

  const getNotificationList = useRef<Subscripiton>();
  const responseNotificationList = useRef<Subscripiton>();

  useEffect(() => {
  getPushNotificationToken();
});

useEffect(() => {
  getNotificationList.current = Notifications.addNotificationReceivedListener(notification => {

  });

  responseNotificationList.current = Notifications.addNotificationResponseReceivedListener(response => {

  });

  return () => {
    if(getNotificationList.current && responseNotificationList ){
      Notifications.removeNotificationsSubscription(getNotificationList.current);
      Notifications.removeNotificationsSubscription(responseNotificationList.current);   
    }
  }
}, []);


  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <BackGround>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}

    </BackGround>
  );
}


