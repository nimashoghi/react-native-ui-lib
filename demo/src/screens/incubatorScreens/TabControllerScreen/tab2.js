import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Incubator, Colors, View, Text, Image, Assets, Button} from 'react-native-ui-lib'; //eslint-disable-line

class Tab2 extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1200);
  }

  render() {
    const {loading} = this.state;
    return (
      <View flex padding-20 center>
        <Image
          style={StyleSheet.absoluteFillObject}
          source={{
            uri:
              'https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
          }}
        />
        <Text text40>{loading ? 'Loading...' : ' TAB 2'}</Text>
      </View>
    );
  }
}

export default Tab2;
