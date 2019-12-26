import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface BlurViewProperties {
  blurType:
    | 'xlight'
    | 'light'
    | 'dark'
    // tvOS and iOS 10+ only
    | 'regular'
    | 'prominent'
    // tvOS only
    | 'extraDark';
  blurAmount?: number; // 0 - 100
  style?: StyleProp<ViewStyle>;
  viewRef?: number | null;
  blurRadius?: number;
  downsampleFactor?: number;
  overlayColor?: string;
}

export const BlurView: React.FC<BlurViewProperties>;
