import { TouchableOpacity, Text, View, StyleSheet  } from 'react-native';
import { useRouter } from 'expo-router';

export default function Localidade() { 
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.h2}>Página Localidade</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/home')}>
                <Text style={styles.textBtn}>Voltar</Text>
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