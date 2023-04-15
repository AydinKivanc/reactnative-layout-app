import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TextInput,
} from 'react-native';
import resimIphone from './src/assets/images/iphone.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fontFamilies, colors} from './src/utils/constants';
import defaultStyles from './src/utils/defultStyles';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [dizi, setDizi] = useState([]);
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={{fontFamily: 'Quicksand-Bold'}}>Header</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
      <ScrollView
        horizontal={true}
        style={styles.scrollHorizontal}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text
            style={[
              styles.categoryText,
              {fontFamily: fontFamilies.bold, color: colors.menuItems},
            ]}>
            Electronics
          </Text>
        </View>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text style={[styles.categoryText, defaultStyles.menuItemBgColor]}>
            Mobile Phone
          </Text>
        </View>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text style={styles.categoryText}>Kitchen</Text>
        </View>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text style={styles.categoryText}>Furnature</Text>
        </View>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text style={styles.categoryText}>Car</Text>
        </View>
        <View style={[styles.categoryWraper, styles.marginRight]}>
          <Text style={styles.categoryText}>Others</Text>
        </View>
      </ScrollView>
      <ScrollView
        style={styles.scrollView}
        onMomentumScrollEnd={() => Alert.alert('Example', 'Last of the page')}>
        <View style={styles.container}>
          {/* <Text>Container</Text> */}
          <View style={styles.box}>
            <Image
              source={{
                uri: 'https://honestmobile.co.uk/wp-content/uploads/2021/09/Fairphone-4-sustainble-smartphone-honest-mobile-the-sustainable-mobile-network.jpg',
              }}
              style={styles.img1}
              resizeMode="contain"
            />
          </View>
          <ImageBackground
            style={[styles.box, styles.imgBg]}
            source={require('./src/assets/images/iphone.jpg')} // require kullanilir. require yerine import da kullanilabilir. ES6 dan gelen bir ozellik. Source a import ettigimiz verilir
          >
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 18,
                backgroundColor: 'pink',
              }}>
              Sale %10
            </Text>
          </ImageBackground>
          <ImageBackground
            style={[styles.box, styles.imgBg]}
            source={resimIphone} // require kullanilir. require yerine import da kullanilabilir. ES6 dan gelen bir ozellik. Source a import ettigimiz verilir
          >
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 18,
                backgroundColor: 'pink',
              }}>
              Sale %10
            </Text>
          </ImageBackground>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        {/* <Button title="Button" /> */}
        <TouchableOpacity
          activeOpacity={0.7} // ! 1 hic degisiklik olmaz
          style={styles.btnWraper}
          //onPress={() => alert('Pressed!')}
          onPress={() => setShowModal(true)}>
          <Text style={styles.btnText}>TOButton</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalWraper}>
          <View style={styles.modalContentWraper}>
            <Text>I am a Modal</Text>
            {dizi.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
            <TextInput
              style={styles.input}
              placeholder={'Type your name and surname'}
              placeholderTextColor={'#50b6d7'}
              //inputMode={'text'} //! mac lerde command+K ile klavye acilir. Klavyedeki karakterler degere gore degisir. keyboardType prop u da ayni mantikla calisir
              value={text}
              onChangeText={text => setText(text)} // ! web tarafinda onChange de buraya event gelyordu burada text in kendisi gelir. text yazmak zorunda degiliz parametre dir istedigimizi yazariz degisebilir.
              multiline
            />
            <Button
              title="Add"
              onPress={() => {
                setDizi([...dizi, text]);
                setText('');
              }}
            />
            <Button
              title="Close"
              onPress={() => {
                setShowModal(false);
                setDizi([]);
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  header: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    flexWrap: 'wrap', // kutularin alta gecmesi icin
    flexDirection: 'row', // kutularin yan yana gelmesi icin
    justifyContent: 'space-around',
    gap: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  bottom: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    //alignItems: 'center', // ! kullanildiginda btnWraper i yazi boyutu + padding kadar yapip yatayda ortaliyor
  },
  box: {
    width: 140,
    height: 200,
    borderWidth: 1,
    borderColor: 'blue',
  },
  scrollView: {
    flexGrow: 1, // flex yerine flexGrow kullanılir
    //backgroundColor: 'pink',
    //marginHorizontal: 20,
  },
  categoryWraper: {
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  categoryText: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scrollHorizontal: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  btnWraper: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    // paddingVertical: 10, ile degil de height ile yapilabilir
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 30, // height ile yapilirsa justifyContent: 'center' kullanilmaz
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img1: {
    height: '100%',
    width: '100%',
  },
  imgBg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWraper: {
    flex: 1,
    backgroundColor: '#0000004d',
    justifyContent: 'center',
  },
  modalContentWraper: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 30, // ! hight ini yuksek verip multiline prop kullanirsak textArea gibi calisir.
    padding: 5,
    marginVertical: 10,
  },
});

export default App;
