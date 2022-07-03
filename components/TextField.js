import {  Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import * as Clipboard from 'expo-clipboard';

export default function TextField(props) {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} value={props.url} onChangeText={props.setUrl} />
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnColar} onPress={props.fetchCopiedText}>
                    <Text style={styles.btnText}>Colar</Text>
                </Pressable>
                <Pressable style={[styles.btnColar, styles.btnShare]} onPress={props.share}>
                    <Text style={styles.btnText}>Compartilhar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textInputContainer: {
        height: 60, 
        width: '85%',
        marginTop: 40
    },
    btnContainer: {
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 60
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1, 
        borderRadius: 10,
        height: '100%',
        fontSize: 16,
        padding: 10,
        color: '#A16AE8',
        width: 380
    },
    btnColar: {
        height: 50,
        backgroundColor: '#FD49A0',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    btnShare: {
        backgroundColor: '#A16AE8'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})