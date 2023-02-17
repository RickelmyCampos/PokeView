import { React, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { colors, metrics } from '../../styles';
import styles from './styles';


const TypeComponent = ({ navigation,type}) => {


    return (
        <View style={[styles.main,{backgroundColor:colors[`${type}Type`]}]}>
            <View style={{height:20,width:20,borderRadius:30,backgroundColor:colors.background}}>

            </View>
            <Text style={styles.textType}>{type}</Text>
        </View>
    );
}
export default TypeComponent;