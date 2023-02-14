import { React, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View, VirtualizedList, Image } from 'react-native'
import { colors, metrics } from '../../styles';
import { selectIcon } from '../../utils/icons';
import styles from './styles';


const Login = ({ navigation }) => {

    return (
        <View style={{ width: metrics.screenWidth, height: metrics.screenHeight, backgroundColor: colors.background }}>
            <View style={[styles.main, { flex: 1 }]}>
                {/* Header */}
                <View style={[styles.header]}>
                    <TouchableOpacity style={{  justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={styles.headertext}>Pular</Text>
                        {selectIcon("ArrowRight", 20, "bold", colors.text)}
                    </TouchableOpacity>
                </View>
                {/* Imagem */}
                <Image source={require('../../assets/images/2treiners-1.png')} style={{ width: '100%', resizeMode: 'contain', height: '50%' }} />
                {/* texto  */}
                <Text style={styles.textLarge}>
                    Está pronto para essa aventura?
                </Text>
                <Text style={styles.textNormal}>
                    Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
                </Text>
                {/* botoes */}
                <View style={{ width: '100%', marginVertical: 50, }} >
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
                        <Text style={styles.textButton}>
                            Criar conta
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.background }]} onPress={()=>navigation.navigate('Login2')}>
                        <Text style={[styles.textButton, { color: colors.primary }]}>
                            Já tenho uma conta
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    );
}
export default Login;