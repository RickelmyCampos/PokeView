import { React, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import Header from '../../../../components/Header';
import { colors, metrics } from '../../../../styles';
import { selectIcon } from '../../../../utils/icons';

import styles from './styles';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { CreateLoginWithEmailPassword } from '../../../../services/auth';



const Register1 = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [loading,setLoading]=useState(false);
    const [view,SetView]=useState(1);
    const altView=()=>{
        switch (view) {
            case 1:
                return(<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
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
                                style={styles.textInput}
                                label="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                mode={'outlined'}

                                activeOutlineColor={colors.text}
                                outlineColor={colors.grey}
                            />
                        </View>

                        <Text style={[styles.textInfo]}> Use um endereço de email válido</Text>
                        {/* botoes */}
                    </View>
                    <View style={{ width: '100%', marginVertical: 50, }}>

                        <TouchableOpacity style={styles.button} disabled={loading} onPress={()=>SetView(2)}>
                            <Text style={styles.textButton}>
                               {loading?"Carregando":'Continuar'} 
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>)
                break;
        case 2:
            return(<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
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
                                style={styles.textInput}
                                label="Senha"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                mode={'outlined'}

                                activeOutlineColor={colors.text}
                                outlineColor={colors.grey}
                            />
                        </View>

                        <Text style={[styles.textInfo]}>Sua senha deve ter pelo menos 8 caracteres</Text>
                        {/* botoes */}
                    </View>
                    <View style={{ width: '100%', marginVertical: 50, }}>

                        <TouchableOpacity style={styles.button} disabled={loading} onPress={()=>SetView(3)}>
                            <Text style={styles.textButton}>
                               {loading?"Carregando":'Continuar'} 
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>)
            case 3:
                return(<View style={{ width: metrics.screenWidth, height: "100%", backgroundColor: colors.background }}>
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
                                    style={styles.textInput}
                                    label="Nome"
                                    value={userName}
                                    onChangeText={(text) => setUserName(text)}
                                    mode={'outlined'}
    
                                    activeOutlineColor={colors.text}
                                    outlineColor={colors.grey}
                                />
                            </View>
    
                            <Text style={[styles.textInfo]}> Esse será seu nome de usuário no aplicativo</Text>
                            {/* botoes */}
                        </View>
                        <View style={{ width: '100%', marginVertical: 50, }}>
    
                            <TouchableOpacity style={styles.button} disabled={loading} onPress={()=>Create()}>
                                <Text style={styles.textButton}>
                                   {loading?"Carregando":'Continuar'} 
                                </Text>
                            </TouchableOpacity>
                        </View>
    
    
                    </View>
                </View>)
            default:
                return(<View>
                    <Text>Pagina não encontrada</Text>
                </View>)
                break;
        }
    }
    const Create =async () => {
        console.log("Entrou")
        setLoading(true);
        await CreateLoginWithEmailPassword(email,password,userName)
        setLoading(false);
        console.log("logou")
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