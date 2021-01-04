import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import F5 from 'react-native-vector-icons/FontAwesome5';

const musics = [
  {
    name: 'Thamizh pattu',
    singer: 'fasf',
  },
  {
    name: 'Thamizh pattu',
    singer: 'fasf',
  },
  {
    name: 'Thamizh pattu',
    singer: 'fasf',
  },
  {
    name: 'Thamizh pattu',
    singer: 'fasf',
  },
  {
    name: 'Thamizh pattu',
    singer: 'fasf',
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <ScrollView>
      {step === 0 ? (
        <SafeAreaView style={{backgroundColor: '#75CFE5', flex: 1}}>
          <StatusBar backgroundColor="#75CFE5" barStyle="dark-content" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <View>
              <Image
                source={{
                  uri:
                    'https://img.etimg.com/thumb/msid-66702498,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 6,
                  borderColor: '#FFF',
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 20, color: '#FFF', fontWeight: '600'}}>
                See you Again
              </Text>
              <Text style={{fontSize: 18, color: '#FFF', fontWeight: '600'}}>
                Author
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFF',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    borderRadius: 15,
                  }}>
                  <Text>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icons name="heart-o" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 30,
            }}>
            {musics.map((music, index) => (
              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 30,
                  borderBottomColor: '#9FA7BB',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://img.etimg.com/thumb/msid-66702498,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg',
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 15,
                      marginRight: 20,
                    }}
                  />
                  <View>
                    <Text>{music.name}</Text>
                    <Text>{music.singer}</Text>
                  </View>
                </View>
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    backgroundColor: '#FFF',
                    padding: 10,
                    borderRadius: 30,
                  }}>
                  <F5 name="play" size={15} />
                </View>
              </View>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <View>
          <Text>sd</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
