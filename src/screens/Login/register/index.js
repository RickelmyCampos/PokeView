import { React, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image } from 'react-native'
import Header from '../../../components/Header';
import { colors, metrics } from '../../../styles';
import { selectIcon } from '../../../utils/icons';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './styles';


const Register = ({ navigation }) => {

    return (
        <View style={{ width: metrics.screenWidth, height: metrics.screenHeight, backgroundColor: colors.background }}>
            <View style={[styles.main, { flex: 1 }]}>
                {/* Header */}
                <Header type={2} title={'Entrar'} goback={()=>navigation.goBack()}/>
                {/* Imagem */}
                <Image source={require('../../../assets/images/1treiner-2.png')} style={{ width: '100%', resizeMode: 'contain', height: '50%' }} />
                {/* texto  */}
                <Text style={styles.textLarge}>
                    Falta pouco para explorar esse mundo! 
                </Text>
                <Text style={styles.textNormal}>
                    Como deseja se conectar?
                </Text>
                {/* botoes */}
                <View style={{ width: '100%', marginVertical: 50, }}>
                    

                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.background, borderColor: colors.grey, borderWidth: 2, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 25 }]}>
                        <Image source={require("../../../assets/icons/google/google-logo.png")} style={{ width: 26, height: 26, resizeMode: 'contain' }} />
                       
                            <Text style={[styles.textButton, { color: colors.textLight,marginHorizontal: 10 }]}>
                                Continuar com o Google
                            </Text>
                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Register1")}>
                        <Text style={styles.textButton}>
                            Continuar com um e-mail
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    );
}
export default Register;