import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView, Image, Animated } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const { height, width } = Dimensions.get('screen')

export default function App() {

  const scrollY = React.useRef(new Animated.Value(0)).current
  const bottomScroll = React.useRef()
  const menuToggle = new Animated.Value(width * -0.55);
  const scaleMainScreen = new Animated.Value(1)
  const backViewOpacity = new Animated.Value(0)
  const [loaded] = useFonts({
    GiloryBold: require('./assets/Gilroy-ExtraBold.otf'),
    GiloryLight: require('./assets/Gilroy-Light.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <Animated.View style={{
        paddingHorizontal: width * 0.04,
        width,
        height,
        transform: [{
          scale: 0.7
        },
        {
          translateX: width * 0.52
        },
        {
          translateY: height * 0.1
        }
        ],
        backgroundColor: '#364f55',
        borderRadius: 45,
        position: 'relative',
        opacity: backViewOpacity

      }}>
        <TouchableOpacity style={{
          width: width * 0.12,
          height: width * 0.12,
          backgroundColor: '#4b6d74',
          borderRadius: 20,
          marginTop: height * 0.08,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Ionicons name="ios-menu" size={25} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontWeight: '200',
            fontSize: '40%',
            marginTop: height * 0.03,
            fontFamily: 'GiloryLight'
          }}
        >Welcome back,</Text>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '40%',
          fontFamily: 'GiloryBold'
        }}>Noah!</Text>


        <View style={styles.inputContainer}>
          <AntDesign name="search1" size={25} color="white" />
          <TextInput
            style={{
              fontSize: '18%',
              height: '80%',
              marginLeft: '4%',
              width: '90%',
              color: 'white'
            }}
            placeholderTextColor='#f0f6fa'
            placeholder='What do you want to search about'></TextInput>
        </View>

        <View style={styles.dataContainer}>
          <View style={{
            height: '15.5%',
            paddingHorizontal: '3%',
          }}>
            <ScrollView horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: '10%',
              }}
              bounces={false}
            >
              <TouchableOpacity style={{
                backgroundColor: '#364f55',
                width: (width * 0.94) * 0.11,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10
              }}>
                <AntDesign name="appstore1" size={20} color="white" />
              </TouchableOpacity>

              <TouchableOpacity style={{
                backgroundColor: '#EAEDEE',
                width: (width * 0.94) * 0.25,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                marginLeft: (width * 0.94) * 0.03,
                paddingHorizontal: '2%'
              }}>
                <MaterialIcons name="medical-services" size={22} color='#364f55' />
                <Text style={{
                  color: '#364f55',
                  fontSize: '13%',
                  fontWeight: 'bold',
                  marginLeft: '5%',
                  fontFamily: 'GiloryBold'
                }}>Medical</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{
                backgroundColor: '#EAEDEE',
                width: (width * 0.94) * 0.31,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                marginLeft: (width * 0.94) * 0.03,
                paddingHorizontal: '2%',
                fontFamily: 'GiloryBold'
              }}>
                <FontAwesome name="graduation-cap" size={22} color='#364f55' />
                <Text style={{
                  color: '#364f55',
                  fontSize: '13%',
                  fontWeight: 'bold',
                  marginLeft: '5%',
                  fontFamily: 'GiloryBold'
                }}>Education</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                backgroundColor: '#EAEDEE',
                width: (width * 0.94) * 0.44,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                marginLeft: (width * 0.94) * 0.03,
                paddingHorizontal: '2%'
              }}>
                <FontAwesome5 name="user-friends" size={22} color='#364f55' />
                <Text style={{
                  color: '#364f55',
                  fontSize: '13%',
                  fontWeight: 'bold',
                  marginLeft: '5%'
                }}>Social assistance</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{
            flexDirection: 'row',
            paddingHorizontal: '4%',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '8%',
          }}>
            <Text
              style={{
                color: '#364f55',
                fontWeight: 'bold',
                fontSize: '25%',
                fontFamily: 'GiloryBold'
              }}
            >Popular</Text>
            <TouchableOpacity style={{
              alignSelf: 'flex-end'
            }}>
              <Text
                style={{
                  color: '#364f55',
                  fontWeight: '500',
                  fontSize: '15%',
                  fontFamily: 'GiloryLight'
                }}
              >See All</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            width: '100%',
            height: '70%',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            marginTop: '3%',
            overflow: 'hidden',
          }}>

            {/* heeeeeeeere */}
            <ScrollView
              ref={bottomScroll}
              scrollEventThrottle={16}
              contentContainerStyle={{
                width: '100%'
              }}>
              <View style={{
                width: '94%',
                height: height * 0.3,
                borderRadius: 20,
                alignSelf: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#e2e2e2',
                paddingVertical: '8%',
                paddingHorizontal: '1%'
              }}>
                <Image
                  source={require('./assets/palasetine1.jpeg')}
                  style={{
                    width: '92%',
                    height: '55%',
                    borderRadius: 20,
                    resizeMode: 'cover',
                    alignSelf: 'center',
                    // marginTop: '4%'
                  }}
                />

                <Text
                  style={{
                    color: '#364f55',
                    fontWeight: 'bold',
                    fontSize: '17%',
                    marginLeft: '5%',
                    marginTop: '3%',
                    fontFamily: 'GiloryBold'
                  }}
                >Home For The Palestinian People</Text>

                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '500',
                    fontSize: '13%',
                    marginLeft: '5%',
                    opacity: 0.5,
                    marginTop: '1.5%',
                    fontFamily: 'GiloryBold'
                  }}
                >$530.65 Target</Text>

                <View style={{
                  width: '94%',
                  height: '25%',
                  marginTop: '1%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <TouchableOpacity style={{
                    width: '45%',
                    height: '90%',
                    backgroundColor: '#ffa500',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5%',
                  }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 14,
                        fontFamily: 'GiloryBold'
                      }}
                    >Donate Now</Text>
                  </TouchableOpacity>


                  <View style={{
                    width: '50%',
                    height: '80%',
                    marginTop: '5%',
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <Text
                        style={{
                          color: '#364f55',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >Raised</Text>
                      <Text
                        style={{
                          color: '#364f55',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >$434.21</Text>
                    </View>

                    <View style={{
                      backgroundColor: '#EAEDEE',
                      borderRadius: 20,
                      width: '100%',
                      height: '20%',
                      marginTop: '4%',

                    }}>
                      <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#364f55',
                        borderRadius: 20,
                        width: `${(434.21 / 530.65) * 100}%`,
                        height: '100%',
                      }} />

                    </View>
                  </View>
                </View>
              </View>


              <View style={{
                width: '94%',
                height: height * 0.3,
                borderRadius: 20,
                alignSelf: 'center',
                marginVertical: '5%',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#e2e2e2',
                paddingVertical: '8%',
                paddingHorizontal: '1%'
              }}>
                <Image
                  source={require('./assets/palasetine2.jpeg')}
                  style={{
                    width: '92%',
                    height: '60%',
                    borderRadius: 20,
                    resizeMode: 'cover',
                    alignSelf: 'center',
                    // marginTop: '4%'
                  }}
                />

                <Text
                  style={{
                    color: '#364f55',
                    fontWeight: 'bold',
                    fontSize: '17%',
                    marginLeft: '5%',
                    marginTop: '3%',
                    fontFamily: 'GiloryBold'
                  }}
                >Homes For The Palestinian People</Text>

                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '500',
                    fontSize: '13%',
                    marginLeft: '5%',
                    opacity: 0.5,
                    marginTop: '1.5%',
                    fontFamily: 'GiloryLight'
                  }}
                >$430.65 Target</Text>

                <View style={{
                  width: '94%',
                  height: '25%',
                  marginTop: '1%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <TouchableOpacity style={{
                    width: '45%',
                    height: '90%',
                    backgroundColor: '#ffa500',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5%',
                  }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 14,
                        fontFamily: 'GiloryBold'
                      }}
                    >Donate Now</Text>
                  </TouchableOpacity>


                  <View style={{
                    width: '50%',
                    height: '80%',
                    marginTop: '5%',
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <Text
                        style={{
                          color: '#364f55',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >Raised</Text>
                      <Text
                        style={{
                          color: '#364f55',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >$124.30</Text>
                    </View>

                    <View style={{
                      backgroundColor: '#EAEDEE',
                      borderRadius: 20,
                      width: '100%',
                      height: '20%',
                      marginTop: '4%',

                    }}>
                      <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#364f55',
                        borderRadius: 20,
                        width: `${(124.30 / 430.65) * 100}%`,
                        height: '100%',
                      }} />

                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>


      </Animated.View>



      <Animated.View style={{
        width: width * 1.55,
        height,
        flexDirection: 'row',
        position: 'absolute',
        transform: [{
          translateX: menuToggle
        }]
      }}>

        <View style={{
          width: width * 0.55,
          height,
          paddingHorizontal: width * 0.04,
        }}>
          <TouchableOpacity style={{
            width: width * 0.12,
            height: width * 0.12,
            backgroundColor: '#4b6d74',
            borderRadius: 20,
            marginTop: height * 0.08,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress={() => {
              Animated.timing(menuToggle, {
                toValue: width * -0.55,
                duration: 300,
                useNativeDriver: true
              }).start()

              Animated.timing(scaleMainScreen, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }
              ).start()
              Animated.timing(backViewOpacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
              }).start()
            }}
          >
            <Ionicons name="chevron-back" size={25} color="white" />
          </TouchableOpacity>

          <View style={{
            width: '100%',
            height: height * 0.09,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: height * 0.05
          }}>
            <Image
              source={require('./assets/profile.jpg')}
              style={{
                width: (width * 0.6) * 0.20,
                height: (width * 0.6) * 0.20,
                borderRadius: ((width * 0.6) * 0.27) / 2,
                resizeMode: 'cover'
              }}
            />

            <View style={{
              width: (width * 0.6) * 0.80,
              marginLeft: 10,
            }}>
              <Text
                style={{
                  fontFamily: "GiloryBold",
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}
              >Noah Elhadedy</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '300',
                  opacity: 0.5,
                  marginTop: 2,
                }}
              >noohelhadedy@gmail.com</Text>
            </View>
          </View>


          <View style={{
            width: '100%',
            height: height * 0.5,
            justifyContent: 'center',
            marginTop: 10
          }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }} >Donations</Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 30
              }}>Profile</Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 30
              }} >Settings</Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 30
              }} >History</Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 30
              }} >Payment</Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 30
              }} >Help & FAQ</Text>
          </View>

          <View style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: height * 0.09,
          }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '500',
              }}
            >Log Out  </Text>
            <AntDesign name="logout" size={20} color="white" />
          </View>
        </View>


        <Animated.View style={{
          paddingHorizontal: width * 0.04,
          width,
          height,
          transform: [{
            scale: scaleMainScreen
          },
          ],
          backgroundColor: '#364f55',
          borderRadius: 45,

        }}>
          <TouchableOpacity style={{
            width: width * 0.12,
            height: width * 0.12,
            backgroundColor: '#4b6d74',
            borderRadius: 20,
            marginTop: height * 0.08,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress={() => {
              Animated.timing(menuToggle, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
              }).start()

              Animated.timing(scaleMainScreen, {
                toValue: 0.75,
                duration: 300,
                useNativeDriver: true,
              }
              ).start()

              Animated.timing(backViewOpacity, {
                toValue: 0.3,
                duration: 1000,
                useNativeDriver: true
              }).start()
            }}
          >
            <Ionicons name="ios-menu" size={25} color="white" />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: '40%',
              marginTop: height * 0.03,
              fontFamily: 'GiloryLight'
            }}
          >Welcome back,</Text>
          <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '40%',
            fontFamily: 'GiloryBold'
          }}>Noah!</Text>


          <View style={styles.inputContainer}>
            <AntDesign name="search1" size={25} color="white" />
            <TextInput
              style={{
                fontSize: '18%',
                height: '80%',
                marginLeft: '4%',
                width: '90%',
                color: 'white',
                fontFamily: 'GiloryLight'
              }}
              placeholderTextColor='#f0f6fa'
              placeholder='What do you want to search about'></TextInput>
          </View>

          <View style={styles.dataContainer}>
            <View style={{
              height: '15.5%',
              paddingHorizontal: '3%',
            }}>
              <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: '10%',
                }}
                bounces={false}
              >
                <TouchableOpacity style={{
                  backgroundColor: '#364f55',
                  width: (width * 0.94) * 0.11,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10
                }}>
                  <AntDesign name="appstore1" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: '#EAEDEE',
                  width: (width * 0.94) * 0.25,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginLeft: (width * 0.94) * 0.03,
                  paddingHorizontal: '2%'
                }}>
                  <MaterialIcons name="medical-services" size={22} color='#364f55' />
                  <Text style={{
                    color: '#364f55',
                    fontSize: '13%',
                    marginLeft: '5%',
                    fontFamily: 'GiloryBold'
                  }}>Medical</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{
                  backgroundColor: '#EAEDEE',
                  width: (width * 0.94) * 0.31,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginLeft: (width * 0.94) * 0.03,
                  paddingHorizontal: '2%'
                }}>
                  <FontAwesome name="graduation-cap" size={22} color='#364f55' />
                  <Text style={{
                    color: '#364f55',
                    fontSize: '13%',
                    fontWeight: 'bold',
                    marginLeft: '5%',
                    fontFamily: 'GiloryBold'
                  }}>Education</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  backgroundColor: '#EAEDEE',
                  width: (width * 0.94) * 0.44,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginLeft: (width * 0.94) * 0.03,
                  paddingHorizontal: '2%'
                }}>
                  <FontAwesome5 name="user-friends" size={22} color='#364f55' />
                  <Text style={{
                    color: '#364f55',
                    fontSize: '13%',
                    fontWeight: 'bold',
                    marginLeft: '5%',
                    fontFamily: 'GiloryBold'
                  }}>Social assistance</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingHorizontal: '4%',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: '8%',
            }}>
              <Text
                style={{
                  color: '#364f55',
                  fontWeight: 'bold',
                  fontSize: '25%',
                  fontFamily: 'GiloryBold'
                }}
              >Popular</Text>
              <TouchableOpacity style={{
                alignSelf: 'flex-end'
              }}>
                <Text
                  style={{
                    color: '#364f55',
                    fontWeight: '500',
                    fontSize: '15%',
                    fontFamily: 'GiloryLight'
                  }}
                >See All</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              width: '100%',
              height: '70%',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              marginTop: '3%',
              overflow: 'hidden',
            }}>
              <Animated.ScrollView
                // scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  {
                    useNativeDriver: false, listener: () => {
                      if (bottomScroll.current) {

                        bottomScroll.current.scrollTo({ y: scrollY._value, animated: true })
                      }
                    }
                  }
                )}
                contentContainerStyle={{
                  width: '100%'
                }}>


                <View style={{
                  width: '94%',
                  height: height * 0.3,
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginVertical: '5%',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#e2e2e2',
                  paddingVertical: '8%',
                  paddingHorizontal: '1%'
                }}>
                  <Image
                    source={require('./assets/palasetine1.jpeg')}
                    style={{
                      width: '92%',
                      height: '55%',
                      borderRadius: 20,
                      resizeMode: 'cover',
                      alignSelf: 'center',
                      // marginTop: '4%'
                    }}
                  />

                  <Text
                    style={{
                      color: '#364f55',
                      fontWeight: 'bold',
                      fontSize: '17%',
                      marginLeft: '5%',
                      marginTop: '3%',
                      fontFamily: 'GiloryBold'
                    }}
                  >Homes For The Palestinian People</Text>

                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '500',
                      fontSize: '13%',
                      marginLeft: '5%',
                      opacity: 0.5,
                      marginTop: '1.5%',
                      fontFamily: 'GiloryLight'
                    }}
                  >$530.65 Target</Text>

                  <View style={{
                    width: '94%',
                    height: '25%',
                    marginTop: '1%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <TouchableOpacity style={{
                      width: '45%',
                      height: '90%',
                      backgroundColor: '#ffa500',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '5%',
                    }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >Donate Now</Text>
                    </TouchableOpacity>


                    <View style={{
                      width: '50%',
                      height: '80%',
                      marginTop: '5%',
                    }}>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>
                        <Text
                          style={{
                            color: '#364f55',
                            fontWeight: 'bold',
                            fontSize: 14,
                          }}
                        >Raised</Text>
                        <Text
                          style={{
                            color: '#364f55',
                            fontWeight: 'bold',
                            fontSize: 14,
                            fontFamily: 'GiloryBold'
                          }}
                        >$434.21</Text>
                      </View>

                      <View style={{
                        backgroundColor: '#EAEDEE',
                        borderRadius: 20,
                        width: '100%',
                        height: '20%',
                        marginTop: '4%',

                      }}>
                        <View style={{
                          flexDirection: 'row',
                          backgroundColor: '#364f55',
                          borderRadius: 20,
                          width: `${(434.21 / 530.65) * 100}%`,
                          height: '100%',
                        }} />

                      </View>
                    </View>
                  </View>
                </View>


                <View style={{
                  width: '94%',
                  height: height * 0.3,
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginVertical: '5%',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#e2e2e2',
                  paddingVertical: '8%',
                  paddingHorizontal: '1%'
                }}>
                  <Image
                    source={require('./assets/palasetine2.jpeg')}
                    style={{
                      width: '92%',
                      height: '60%',
                      borderRadius: 20,
                      resizeMode: 'cover',
                      alignSelf: 'center',
                      // marginTop: '4%'
                    }}
                  />

                  <Text
                    style={{
                      color: '#364f55',
                      fontWeight: 'bold',
                      fontSize: '17%',
                      marginLeft: '5%',
                      marginTop: '3%',
                      fontFamily: 'GiloryBold'
                    }}
                  >Homes For The Palestinian People</Text>

                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '500',
                      fontSize: '13%',
                      marginLeft: '5%',
                      opacity: 0.5,
                      marginTop: '1.5%',
                      fontFamily: 'GiloryLight'
                    }}
                  >$430.65 Target</Text>

                  <View style={{
                    width: '94%',
                    height: '25%',
                    marginTop: '1%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <TouchableOpacity style={{
                      width: '45%',
                      height: '90%',
                      backgroundColor: '#ffa500',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '5%',
                    }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 14,
                          fontFamily: 'GiloryBold'
                        }}
                      >Donate Now</Text>
                    </TouchableOpacity>


                    <View style={{
                      width: '50%',
                      height: '80%',
                      marginTop: '5%',
                    }}>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>
                        <Text
                          style={{
                            color: '#364f55',
                            fontWeight: 'bold',
                            fontSize: 14,
                            fontFamily: 'GiloryBold'
                          }}
                        >Raised</Text>
                        <Text
                          style={{
                            color: '#364f55',
                            fontWeight: 'bold',
                            fontSize: 14,
                            fontFamily: 'GiloryBold'
                          }}
                        >$124.30</Text>
                      </View>

                      <View style={{
                        backgroundColor: '#EAEDEE',
                        borderRadius: 20,
                        width: '100%',
                        height: '20%',
                        marginTop: '4%',

                      }}>
                        <View style={{
                          flexDirection: 'row',
                          backgroundColor: '#364f55',
                          borderRadius: 20,
                          width: `${(124.30 / 430.65) * 100}%`,
                          height: '100%',
                        }} />

                      </View>
                    </View>
                  </View>
                </View>
              </Animated.ScrollView>
            </View>



          </View>


        </Animated.View>
      </Animated.View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#364f55',
    width: width,
    height: height
  },
  inputContainer: {
    width: width * 0.9,
    height: width * 0.15,
    backgroundColor: '#4b6d74',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04
  },
  dataContainer: {
    width: width * 0.94,
    height: height * 0.56,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: height * 0.04,
    alignSelf: 'center'
  }
});
