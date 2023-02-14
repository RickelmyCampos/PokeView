import { React, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import Header from '../../../components/Header';
import { colors, metrics } from '../../../styles';
import { selectIcon } from '../../../utils/icons';

import styles from './styles';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';



const Login3 = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading]=useState(false)
    const LoginWithEmailPassword =async () => {
        console.log("Entrou")
        setLoading(true);
         await auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
            setLoading(false);
            console.log("logou")
    }
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
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
                                <TextInput
                                    style={styles.textInput}
                                    label="Email"
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    mode={'outlined'}

                                    activeOutlineColor={colors.text}
                                    outlineColor={colors.grey}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    label="Senha"
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    mode={'outlined'}

                                    activeOutlineColor={colors.text}
                                    outlineColor={colors.grey}
                                />
                            </View>

                            <Text style={[styles.textButton, { color: colors.primary, marginVertical: 40 }]}> Esqueceu sua senha?</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>

                            <TouchableOpacity style={styles.button} disabled={loading} onPress={()=>LoginWithEmailPassword()}>
                                <Text style={styles.textButton}>
                                   {loading?"Carregando":'Entrar'} 
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default Login3;