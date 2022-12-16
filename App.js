import CheckBox from '@react-native-community/checkbox';
import React, {useState, useCallback} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Text,
  Switch,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import {Dimensions, ScrollView} from 'react-native';

const scrwidth = Dimensions.get('window').width;
const scrheight = Dimensions.get('window').height;
export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isPressed, setPressed] = useState(false);
  const [pressedItemIds, setPressedItems] = useState({});

  const DATA = [
    {
      id: '1',
      title: '₺25',
    },
    {
      id: '2',
      title: '₺50',
    },
    {
      id: '3',
      title: '₺100',
    },
    {
      id: '4',
      title: '₺200',
    },
    {
      id: '5',
      title: '₺300',
    },
  ];

  const Item1 = ({ title }) => (
  <TouchableWithoutFeedback>
    <TouchableOpacity activeOpacity={0.4} onPress={() => setPressed(!isPressed)}>
      <View style={isPressed == false ? styles.item : styles.itemPressed}>
        <Text style={{fontSize: 15, color: 'black', textAlign:'center'}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  </TouchableWithoutFeedback>);



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

  const renderItem = ({item}) => ( 
    <TouchableOpacity activeOpacity={0.4} onPress={() => setPressed(true)}>
        {isPressed==true?
          <View style={   styles.itemPressed  }>
          <Text style={{fontSize: 15, color: 'black', textAlign:'center',fontWeight: 'bold'}}>
            {item.title} 
          </Text>
        </View>
        :
        <View style={styles.item }>
        <Text style={{fontSize: 15, color: 'black', textAlign:'center',fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
      
      }




    



    </TouchableOpacity>);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, color: 'white', marginTop: 15}}>
          Otomatik Yükleme
        </Text>
      </View>

      <View style={styles.inContainer}>
        <View style={styles.switchContainer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15, color: 'gray', left: 5}}>
                Otomatik Yükleme
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Switch
                trackColor={{false: 'gray', true: '#FF5400'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                marginHorizontal={5}
              />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text
            style={{fontSize: 15, color: 'gray', textAlign: 'center', left: 5}}>
            Otomatik Yükleme ile bakiyen ₺5 altına düştüğünde seçilen tutar
            otomatik olarak Anka Cüzdan'ına yüklenir
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onPress
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.label}>
            Cüzdan Sözleşmesi'ni okuduğumu ve kabul ettiğimi onaylıyorum.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => console.log('butona basıldı')}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: scrheight,
    width: scrwidth,
  },
  header: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FF5400',
    alignItems: 'center',
    height: scrheight * 0.1,
    width: scrwidth,
  },
  inContainer: {
    height: scrheight * 0.9,
    width: scrwidth,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  switchContainer: {
    height: scrheight * 0.11,
    width: scrwidth,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  description: {
    height: scrheight * 0.14,
    width: scrwidth,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  checkboxContainer: {
    height: scrheight * 0.1,
    width: scrwidth,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    margin: 10,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5400',
    height: scrheight * 0.06,
    width: scrwidth * 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: scrwidth / 4,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: 'white',
    height: scrheight * 0.35,
    width: scrwidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    margin: 10,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  priceContainer: {
    height: scrheight * 0.2,
    width: scrwidth,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    height: scrheight * 0.1,
    marginHorizontal: 15,
    width:scrwidth*0.2,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  itemPressed: {
    backgroundColor: '#FF5400',
    padding: 20,
    height: scrheight * 0.12,
    width:scrwidth*0.22,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    
    borderColor: 'gray',
  },
  title: {
    fontSize: 15,
  },
});
