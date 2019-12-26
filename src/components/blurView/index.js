import React from 'react';

let ImportedBlurView;
let isExpo;

try {
  ImportedBlurView = require('@react-native-community/blur').BlurView;
  isExpo = false;
} catch (_e) {
  ImportedBlurView = require('expo-blur').BlurView;
  isExpo = true;
}

export function BlurView({...props}) {
  const updatedProps = isExpo
    ? {
      blurAmount: props.intensity,
      blurType: props.tint === 'light' || props.tint === 'dark' ? props.tint : 'light',
      style: props.style
    }
    : props;

  return <ImportedBlurView {...updatedProps}/>;
}
