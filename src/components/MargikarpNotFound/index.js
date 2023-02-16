import { React, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { colors, metrics } from '../../styles';
import styles from './styles';


const MargikarpNotFound = ({ navigation }) => {


    return (
        <View style={{backgroundColor:colors.background,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../../assets/images/margikarp.png")}style={{width:metrics.screenWidth*0.5,resizeMode:'contain'}}/>

        </View>
    );
}
export default MargikarpNotFound;