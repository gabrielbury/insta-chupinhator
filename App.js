import { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import TextField from './components/TextField';
import DownloadedImage  from './components/DownloadedImage';
import * as Clipboard from 'expo-clipboard';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import InstagramPostService from './service/instagramPost.Service'

export default function App() {

  const [copiedText, setCopiedText] = useState('');
  const [imageUri, setImageUri] = useState('');

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (nextAppState === "active") {
        fetchCopiedText().then(() => {})
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [])


  const share = async (customOptions = options) => {
    try {
      await Sharing.shareAsync(customOptions.url, {dialogTitle: 'Instagram Copiator', mimeType: 'image/jpeg'});
    } catch (err) {
      console.log(err);
    }
  };

  function processCopiedText() {
    if(copiedText) {
      processClipboardText(copiedText).then(() => {})
    }
    else {
      share({
        url: imageUri
      }).then(() => {});
    }
  }

  async function processClipboardText(copiedUrl) {
    setCopiedText(copiedUrl);
    const data = await InstagramPostService.getData(copiedUrl);
    if(!data) {
      setCopiedText('');
      return;
    }
    await Clipboard.setStringAsync(data.caption);

    const fileName = `${FileSystem.documentDirectory}${new Date().getUTCMilliseconds()}.jpg`;
    const { uri } = await FileSystem.downloadAsync(data.imageUrl, fileName);
    setImageUri(uri);    

    await share({
      url: uri
    });
  }
  async function fetchCopiedText() {
    const text = await Clipboard.getStringAsync();
    if (text) {
      await processClipboardText(text);
    } else {
      setCopiedText('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chupinhar post</Text>
        <TextField 
          url={copiedText}
          setUrl={(change) => { setCopiedText(change)}}
          fetchCopiedText={fetchCopiedText}
          share={() => {processCopiedText()}} />
        <DownloadedImage imageUri={imageUri} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4FEE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#603F8B',
    fontWeight: 'bold',
    fontSize: 22
  }
});
