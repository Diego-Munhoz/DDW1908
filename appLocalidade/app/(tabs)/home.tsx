import { TouchableOpacity, Text, View, StyleSheet  } from 'react-native';
import { useRouter } from 'expo-router';
import {
    useFonts,
    Urbanist_100Thin,
    Urbanist_200ExtraLight,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
    Urbanist_100Thin_Italic,
    Urbanist_200ExtraLight_Italic,
    Urbanist_300Light_Italic,
    Urbanist_400Regular_Italic,
    Urbanist_500Medium_Italic,
    Urbanist_600SemiBold_Italic,
    Urbanist_700Bold_Italic,
    Urbanist_800ExtraBold_Italic,
    Urbanist_900Black_Italic,
  } from '@expo-google-fonts/urbanist';

export default function Home() { 
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.h2}>Página Principal</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/localidade')}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    h2:{
      fontSize: 40,
      textAlign: 'left',
      fontFamily: 'Urbanist_400Regular',
    },
    button:{
        backgroundColor: '#4169E1',
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
    },
    textBtn:{
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
});