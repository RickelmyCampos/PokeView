import { React, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { colors, metrics,general } from '../../styles';



const LoadingScreen = ({ navigation }) => {


    return (
        <View style={{ backgroundColor: colors.background, width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            <View>
                 <Image source={require("../../assets/images/margikarp.png")} style={{ width: metrics.screenWidth * 0.5,height: metrics.screenWidth * 0.5, resizeMode: 'contain' }} />
            </View>
            {/* <Image source={require("../../assets/images/margikarp.png")}style={{width:metrics.screenWidth*0.1,resizeMode:'contain'}}/> */}
            <ActivityIndicator size={50} color={colors.primary}/>
            <Text style={general.Text}>Carregando ...</Text>
        </View>
    );
}
export default LoadingScreen;