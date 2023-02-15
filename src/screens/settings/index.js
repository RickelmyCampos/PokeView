import { React, useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { colors, general, metrics } from '../../styles';
import { Switch } from 'react-native-paper';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import SettingsOptions from '../../components/SettingsOptions';
import { Avatar } from 'react-native-paper';
import { Logout } from '../../services/auth';
const Settings = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const user = auth().currentUser;
  console.log(user)
  const pokedex = {
    title: 'Pokédex',
    buttons: [
      {
        subtitle: 'Mega evoluções',
        desc: 'Habilita a exibição de mega evoluções.',
        hasSwitch: true,
        switchValue: switch1,
        setSwitch: () => setSwitch1(!switch1),
        altInfo:false,clicked:false
      },
      {
        subtitle: 'Outras formas',
        desc: 'Habilita a exibição de formas alternativas de pokémon.',
        hasSwitch: true,
        switchValue: switch2,
        setSwitch: () => setSwitch2(!switch2),
        altInfo:false,clicked:false
      }
    ]
  }
  const notification = {
    title: 'Notificações',
    buttons: [
      {
        subtitle: 'Atualizações na pokédex',
        desc: 'Novos Pokémons, habilidades, informações, etc.',
        hasSwitch: true,
        switchValue: switch3,
        setSwitch: () => setSwitch3(!switch3),
        altInfo:false,clicked:false
      },
      {
        subtitle: 'Mundo Pokémon',
        desc: 'Acontecimentos e informações do mundo de pokémon.',
        hasSwitch: true,
        switchValue: switch4,
        setSwitch: () => setSwitch4(!switch4),
        altInfo:false,clicked:false
      }
    ]
  }
  const language = {
    title: 'Idioma',
    buttons: [
      {
        subtitle: 'Idioma da interface',
        desc: 'Português (PT-BR)',
        hasSwitch: false,
        altInfo:false,clicked:false
      },
      {
        subtitle: 'Idioma de informações em jogo',
        desc: 'English (US)',
        hasSwitch: false,
        altInfo:false,clicked:false
      }
    ]
  }
  const geral = {
    title: 'Geral',
    buttons: [
      {
        subtitle: 'Termos e condições',
        desc: 'Tudo o que você precisa saber.',
        hasSwitch: false,
        altInfo:false,clicked:false
      },
      {
        subtitle: 'Central de ajuda',
        desc: 'Precisa de ajuda? Fale conosco.',
        hasSwitch: false,
        altInfo:false,clicked:false
      },
      {
        subtitle: 'Sobre',
        desc: 'Saiba mais sobre o app.',
        hasSwitch: false,
        altInfo:false,clicked:false
      }
    ]
  }
  const userInfo = {
    title: 'Informações da conta',
    buttons: [
      {
        subtitle: 'Nome',
        desc: user.displayName,
        hasSwitch: false,
        altInfo:true,
        clicked:true
      },
      {
        subtitle: 'Email',
        desc: user.email,
        hasSwitch: false,
        altInfo:true,
        clicked:true
      },
      {
        subtitle: 'Senha',
        desc: '••••••••••••••••',
        hasSwitch: false,
        altInfo:true,
        clicked:true
      }
    ]
  }
  const exit = {
    title: 'Outros',
    buttons: [
      {
        subtitle: 'Sair',
        desc: `Você entrou como ${user.displayName}.`,
        hasSwitch: false,
        altInfo:false,clicked:true,
        onclick:()=>Logout(),
        exit:true
      },{
        subtitle: '',
        desc: '',
        hasSwitch: false,
        altInfo:false,clicked:false
      },]
  }
  return (
    <View style={{ width: metrics.screenWidth, height: metrics.screenHeight, backgroundColor: colors.background }}>
      {(!user.isAnonymous) && (
        <View style={styles.loginMain}>
            <View style={[styles.loginContent,]}>
              <View style={{ flexDirection: 'row', width: '100%', paddingVertical: 15, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Avatar.Text size={30} label={user.displayName} />
                <View style={{justifyContent:'center',alignItems:'flex-start',width:'100%',height:30}}>
                  <Text style={[styles.textMain, { marginLeft: 10 }]}>
                    {user.displayName}
                  </Text>
                </View>
              </View>
            </View>
            </View>
          )}
      <ScrollView>
        <View style={styles.loginMain}>
          {user.isAnonymous &&  (
            <View style={styles.loginContent}>
              <View style={{ flexDirection: 'row', width: '100%', height: metrics.screenHeight * 0.13, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.textInfo, { width: '60%' }]}>
                  Mantenha sua Pokédex atualizada e participe desse mundo.
                </Text>
                <Image source={require('../../assets/images/2treiners-1.png')} style={{ resizeMode: 'contain', height: "100%", width: '40%' }} />
              </View>
              <TouchableOpacity style={[general.buttonStyle, { backgroundColor: colors.background, borderWidth: 2, borderColor: colors.primary }]}>
                <Text style={[general.buttonText, { color: colors.primary }]}>
                  Entre ou Cadastre-se
                </Text>
              </TouchableOpacity>
            </View>
          )}

        </View>
        <View style={[styles.main, { flex: 1 ,marginBottom:50}]}>

          {/* componentes */}
          {/* pokedex */}
          {
            !user.isAnonymous&&(<SettingsOptions options={userInfo} />)
          }
          <SettingsOptions options={pokedex} />
          <SettingsOptions options={notification} />
          <SettingsOptions options={language} />
          <SettingsOptions options={geral} />
          {
            user&&(<SettingsOptions options={exit} />)
          }
        </View>
      </ScrollView>
    </View>

  );
}
export default Settings;