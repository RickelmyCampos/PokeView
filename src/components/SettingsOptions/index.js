import { React, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { colors, metrics } from '../../styles';
import { Switch } from 'react-native-paper';
import styles from './styles';
import { selectIcon } from '../../utils/icons';
const SettingsOptions = ({ options }) => {

    return (
        <View style={styles.main}>
            <Text style={styles.textMain}>{options.title}</Text>
            {options.buttons.map((item, index) => {
                return (
                    item.clicked ? (<TouchableOpacity key={index} style={styles.buttons} onPress={item.onclick}>
                        <View style={{ width: '70%' }}>
                            <Text style={[styles.textSubMain,{color:item.exit?colors.danger:colors.textGreyDark}]}>{item.subtitle}</Text>
                            <Text style={styles.textInfo}>{item.desc}
                            </Text>
                        </View>

                        {item.altInfo && (
                            <View style={{ width: '30%', alignItems: 'flex-end' }}>
                                {selectIcon("1ArrowRight", 15, 'bold', colors.textLight)}
                            </View>
                        )}
                    </TouchableOpacity>) : (<View key={index} style={styles.buttons}>
                        <View style={{ width: '70%' }}>
                            <Text style={styles.textSubMain}>{item.subtitle}</Text>
                            <Text style={styles.textInfo}>{item.desc}
                            </Text>
                        </View>
                        {item.hasSwitch && (
                            <View style={{ width: '30%' }}>
                                <Switch value={item.switchValue} color={colors.primary} onValueChange={item.setSwitch} />
                            </View>
                        )
                        }

                    </View>))

            })}
        </View>


    );
}
export default SettingsOptions;