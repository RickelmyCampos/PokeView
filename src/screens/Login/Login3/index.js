import { React, useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image, SafeAreaView, KeyboardAvoidingView, Alert, TextInput } from 'react-native'
import Header from '../../../components/Header';
import { colors, fonts, metrics } from '../../../styles';
import { selectIcon } from '../../../utils/icons';

import styles from './styles';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { LoginWithEmailPassword } from '../../../services/auth';



const Login3 = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputVisible, setInputVsible] = useState(true)
    const [errEmail, setErrEmail] = useState(false);
    const [errPass, setErrPass] = useState(false);
    const Login = async () => {
        console.log("Entrou")
        setLoading(true);
        await LoginWithEmailPassword(email, password)
        setLoading(false);
        console.log("logou")
    }
    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && regex.test(email)) {
            return true
        } else {
            return false
        }
    }
    const validatePass = () => {
        if (password) {
            return true
        } else {
            return false
        }
    }
    const validateUser = () => {
        if (userName) {
            return true
        } else {
            return false
        }
    }
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
                    <View style={[styles.main, { flex: 1 }]}>
                        {/* Header */}
                        <View style={{ width: '100%', alignItems: 'center' }}>

                            <Header type={2} title={'Entrar'} goback={() => navigation.goBack()} />
                            {/* Imagem */}

                            {/* texto  */}
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.textNormal}>
                                    Bem vindo de volta!
                                </Text>
                                <Text style={styles.textLarge}>
                                    Preencha os dados
                                </Text>
                            </View>
                            <View style={{ width: '100%', marginVertical: 10 }}>
                                <View>
                                    <Text style={styles.txtDescInput}>E-mail</Text>
                                    <TextInput
                                        style={[styles.textInput, { paddingHorizontal: 10, color: colors.text, fontFamily: fonts.family.regular }]}
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        placeholder={'E-mail'}
                                        maxLength={25}
                                        autoCorrect={false}
                                    />
                                </View>
                                <View>
                                    <Text style={[styles.txtDescInput, { marginTop: 10 }]}>
                                        Senha
                                    </Text>
                                    <View style={[styles.textInput, { flexDirection: 'row', borderWidth: 2, justifyContent: 'space-between' }]}>
                                        <TextInput
                                            autoCorrect={false}
                                            secureTextEntry={inputVisible}
                                            placeholder={'Senha'}
                                            value={password}
                                            onChangeText={(text) => setPassword(text)}
                                            style={[{ width: '80%', paddingHorizontal: 10, color: colors.text, fontFamily: fonts.family.regular }]}
                                            maxLength={18}
                                        />
                                        <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => setInputVsible(!inputVisible)}>
                                            {inputVisible ? selectIcon('Eye-closed', 32, 'regular', colors.text) : selectIcon('Eye', 32, 'regular', colors.text)}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <Text style={[styles.textButton, { color: colors.primary, marginVertical: 40 }]}> Esqueceu sua senha?</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>

                            <Button style={styles.button} disabled={loading} loading={loading} onPress={() => {
                                if (validateEmail() && validatePass()) {
                                    Login()
                                }
                            }} textColor={colors.background}>
                                <Text style={styles.textButton}>
                                    {loading ? "Carregando" : 'Entrar'}
                                </Text>
                            </Button>
                        </View>


                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default Login3;