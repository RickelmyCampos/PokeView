import { React, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image } from 'react-native'
import Header from '../../../components/Header';
import { colors, metrics } from '../../../styles';
import { selectIcon } from '../../../utils/icons';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import styles from './styles';


const Login2 = ({ navigation }) => {

    return (
        <View style={{ width: metrics.screenWidth, height: metrics.screenHeight, backgroundColor: colors.background }}>
            <View style={[styles.main, { flex: 1 }]}>
                {/* Header */}
                <Header type={2} title={'Entrar'} />
                {/* Imagem */}
                <Image source={require('../../../assets/images/2treiners-1.png')} style={{ width: '100%', resizeMode: 'contain', height: '50%' }} />
                {/* texto  */}
                <Text style={styles.textLarge}>
                    Que bom te ver aqui novamente!
                </Text>
                <Text style={styles.textNormal}>
                    Como deseja se conectar?
                </Text>
                {/* botoes */}
                <View style={{ width: '100%', marginVertical: 50, }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.background }]}>
                        <Text style={[styles.textButton, { color: colors.primary }]}>
                            Já tenho uma conta
                        </Text>
                    </TouchableOpacity>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                         />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Continuar com um e-mail
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    );
}
export default Login2;