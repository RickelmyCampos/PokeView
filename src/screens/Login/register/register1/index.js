import { React, useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native'
import Header from '../../../../components/Header';
import { colors, metrics, fonts } from '../../../../styles';
import { selectIcon } from '../../../../utils/icons';
import { Button } from 'react-native-paper';
import styles from './styles';

import auth from '@react-native-firebase/auth';
import { CreateLoginWithEmailPassword } from '../../../../services/auth';



const Register1 = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [view, SetView] = useState(1);
    const altView = () => {
        switch (view) {
            case 1:
                return (<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
                    <View style={[styles.main, { flex: 1 }]}>
                        {/* Header */}
                        <View style={{ width: '100%', alignItems: 'center' }}>

                            <Header type={2} title={'Entrar'} goback={() => navigation.goBack()} />
                            {/* Imagem */}

                            {/* texto  */}
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.textNormal}>
                                    Vamos começar
                                </Text>
                                <Text style={styles.textLarge}>
                                    Qual é o seu e-mail?
                                </Text>
                            </View>
                            <View style={{ width: '100%', marginVertical: 10 }}>
                                <TextInput
                                    style={[styles.textInput, { paddingHorizontal: 10, color: colors.text, fontFamily: fonts.family.regular }]}
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    placeholder={'E-mail'}
                                    maxLength={25}
                                    autoCorrect={false}
                                />
                            </View>

                            <Text style={[styles.textInfo]}> Use um endereço de email válido</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>

                            <TouchableOpacity style={styles.button} disabled={loading}
                                onPress={() => {
                                    if (validateEmail()) {
                                        SetView(2)
                                    }
                                }
                                }>
                                <Text style={styles.textButton}>
                                    {loading ? "Carregando" : 'Continuar'}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>)
                break;
            case 2:
                return (<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
                    <View style={[styles.main, { flex: 1 }]}>
                        {/* Header */}
                        <View style={{ width: '100%', alignItems: 'center' }}>

                            <Header type={2} title={'Entrar'} goback={() => navigation.goBack()} />
                            {/* Imagem */}

                            {/* texto  */}
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.textNormal}>
                                    Agora...
                                </Text>
                                <Text style={styles.textLarge}>
                                    Crie uma senha
                                </Text>
                            </View>
                            <View style={{ width: '100%', marginVertical: 10 }}>
                                <TextInput
                                    style={[styles.textInput, { paddingHorizontal: 10, color: colors.text, fontFamily: fonts.family.regular }]}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    placeholder={'Senha'}
                                    maxLength={18}
                                    autoCorrect={false}
                                />
                            </View>

                            <Text style={[styles.textInfo]}>Sua senha deve ter pelo menos 8 caracteres</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>

                            <TouchableOpacity style={styles.button} disabled={loading} onPress={() => {
                                if (validatePass()) {

                                    SetView(3)
                                }
                            }}>
                                <Text style={styles.textButton}>
                                    {loading ? "Carregando" : 'Continuar'}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>)
            case 3:
                return (<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
                    <View style={[styles.main, { flex: 1 }]}>
                        {/* Header */}
                        <View style={{ width: '100%', alignItems: 'center' }}>

                            <Header type={2} title={'Entrar'} goback={() => navigation.goBack()} />
                            {/* Imagem */}

                            {/* texto  */}
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.textNormal}>
                                    Pra finalizar
                                </Text>
                                <Text style={styles.textLarge}>
                                    Qualo seu nome?
                                </Text>
                            </View>
                            <View style={{ width: '100%', marginVertical: 10 }}>
                                <TextInput
                                    style={[styles.textInput, { paddingHorizontal: 10, color: colors.text, fontFamily: fonts.family.regular }]}
                                    value={userName}
                                    onChangeText={(text) => setUserName(text)}
                                    placeholder={'Nome'}
                                    maxLength={25}
                                    autoCorrect={false}
                                />
                            </View>

                            <Text style={[styles.textInfo]}> Esse será seu nome de usuário no aplicativo</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>

                            <Button style={styles.button} disabled={loading} loading={loading} onPress={() => {
                                if (validateUser()) {
                                    Create()
                                }
                            }} textColor={colors.background}>
                                <Text style={styles.textButton}>
                                    {loading ? "Carregando" : 'Entrar'}
                                </Text>
                            </Button>
                        </View>


                    </View>
                </View>)
            default:
                return (<View>
                    <Text>Pagina não encontrada</Text>
                </View>)
                break;
        }
    }
    const Create = async () => {
        console.log("Entrou")
        setLoading(true);
        await CreateLoginWithEmailPassword(email, password, userName)
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
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {altView()}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default Register1;