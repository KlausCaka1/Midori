import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Wave({ customStyles }) {
    return (
        <View style={customStyles}>
        <View style={{
          backgroundColor: '#ffff',
          height: 160,
          top: 80,
        }}>
         <Svg
         height="60%"
         width="100%"
         xmlns="http://www.w3.org/2000/svg"
         style={{position: 'absolute', top: -10}}
         viewBox="0 0 1440 320">
          <Path fill="#f7f7f7" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,117.3C480,160,600,224,720,229.3C840,235,960,181,1080,144C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></Path>
          </Svg>
        </View>
      </View>
    );
}
