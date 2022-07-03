import { StyleSheet, View, Image } from 'react-native'

export default function DownloadedImage (props) {
    const { imageUri } = props;
    
    if(imageUri) {
      return (
        <View style={styles.imageContainer}>
          <Image
            source={{uri: imageUri}}
            style={{width: 200, height: 200, borderRadius: 100}}
          />
        </View>
      )
    }
    return (
      <View />
    )
  }

  const styles = StyleSheet.create({
    imageContainer: {
      marginTop: 50,
      backgroundColor: '#B4FEE7',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });