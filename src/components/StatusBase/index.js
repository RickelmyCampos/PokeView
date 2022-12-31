import { React, useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { format_numDex } from '../../utils/usage';
import styles from './styles';
const StatusBase = (props) => {
    const calcPercent=(stat)=>{
        let max=255
        return `${(stat/max)*100}%`
    }
    return (
        <View style={styles.conteinerStatus}>

            {/* stats desc */}
            <View style={styles.conteinerTextStatus}>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Hp</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Attack</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Defense</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Sp.Atk</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Sp.Def</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={[styles.textStatus,{color:props.color}]}>Speed</Text>
                </View>


            </View>
            {/* separador */}
            <View style={{width:3,height:'100%',borderRadius:12,backgroundColor:'#A0A0A0'}}/>
            {/* stats values */}
            <View style={styles.conteinerStatsValues}>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.Hp)}</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.Attack)}</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.Defense)}</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.SpAtk)}</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.SpDef)}</Text>
                </View>
                <View style={styles.contentRowStatus}>
                    <Text style={styles.textStats}>{format_numDex(props.Speed)}</Text>
                </View>


            </View>
            {/* stats bar */}
            <View style={styles.contentBarStatus}>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.Hp)}]} />
                    </View>
                </View>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.Attack)}]} />
                    </View>
                </View>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.Defense)}]}  />
                    </View>
                </View>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.SpAtk)}]} />
                    </View>
                </View>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.SpDef)}]}  />
                    </View>
                </View>
                <View style={styles.contentRowStatus}>
                    <View style={styles.barStatus_notPreenched}>
                        <View style={[styles.barStatus_Preenched,{backgroundColor:props.color,width:calcPercent(props.Speed)}]} />
                    </View>
                </View>

            </View>

        </View>
    );
}
export default StatusBase;