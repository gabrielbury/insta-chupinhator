import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { FONT_BUTTON_TEXT, responsiveDimensions } from '../utils/style.utils'

export default function TextField(props) {

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput}
                    value={props.url} 
                    onChangeText={props.setUrl} 
                    theme={{ colors: { text: '#A16AE8' } }}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button 
                    icon="content-paste" 
                    style={styles.btnColar} 
                    onPress={props.fetchCopiedText}
                    color="#FFFFFF">
                    <Text style={styles.btnText}>Colar</Text>
                </Button>
                <Button 
                    icon="share-all" 
                    style={[styles.btnColar, styles.btnShare]} 
                    onPress={props.share}
                    color="#FFFFFF">
                    <Text style={styles.btnText}>Compartilhar</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 200,
        justifyContent: 'flex-start',
        width: '100%',
        padding: 10
    },
    textInputContainer: {
        height: responsiveDimensions(66, 56), 
        marginTop: 40,
        width: '100%'
    },
    btnContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: responsiveDimensions(60, 50)
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        fontSize: responsiveDimensions(22, 16),
        paddingHorizontal: responsiveDimensions(10, 6),
        color: '#A16AE8',
    },
    btnColar: {
        height: responsiveDimensions(60, 50),
        backgroundColor: '#FD49A0',
        marginTop: 10,
        padding: responsiveDimensions(10, 5),
        color: "#FFFFFF"
    },
    btnShare: {
        backgroundColor: '#A16AE8'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: FONT_BUTTON_TEXT,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})