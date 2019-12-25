import {ReactElement} from 'react';
import {FlatListProps, GestureResponderEvent, LayoutChangeEvent} from 'react-native';
import {BaseComponent} from '../commons';
import {TextFieldProps} from './Inputs';
import {TopBarProps} from '../screensComponents/Modal';

export type PickerItemLabeledValue = { value?: any, label?: string };
export type PickerItemValue =
  | object
  | string
  | number
  | PickerItemLabeledValue
  | PickerItemLabeledValue[];

export type PickerItemRenderItemFunc = (
  value: PickerItemValue | undefined,
  props: PickerItemProps,
  label: string
) => ReactElement | ReactElement[];

export interface PickerItemProps {
  label?: string;
  value?: PickerItemValue;
  getItemLabel?: (value?: PickerItemValue) => string;
  isSelected?: boolean;
  disabled?: boolean;
  renderItem?: PickerItemRenderItemFunc;
  onPress?: (event: GestureResponderEvent) => void;
  onSelectedLayout?: (event: LayoutChangeEvent) => void;
}

declare class PickerItem extends BaseComponent<PickerItemProps> {}

export type PickerMode = 'SINGLE' | 'MULTI';

export interface PickerSearchStyle {
  color?: string;
  placeholderTextColor?: string;
  selectionColor?: string;
}

export type PickerListProps = Omit<FlatListProps<any>, 'data' | 'renderItem' | 'keyExtractor'>;

export interface PickerProps extends Omit<TextFieldProps, 'value'> {
  value?: PickerItemValue;
  onChange?: (value: PickerItemValue) => void;
  mode?: PickerMode;
  enableModalBlur?: boolean;
  renderPicker?: (value?: PickerItemValue) => ReactElement | ReactElement[];
  renderItem?: PickerItemRenderItemFunc;
  renderCustomModal?: (modalProps: object) => ReactElement | ReactElement[];
  customPickerProps?: object;
  onPress?: (event: GestureResponderEvent) => void;
  getItemValue?: (value?: PickerItemValue) => string;
  getLabel?: (value?: PickerItemValue) => string;
  topBarProps?: TopBarProps;
  showSearch?: boolean;
  searchStyle?: PickerSearchStyle;
  searchPlaceholder?: string;
  onSearchChange?: (searchValue: string) => void;
  renderCustomSearch?: (props: PickerProps) => ReactElement | ReactElement[];
  useNativePicker?: boolean;
  renderNativePicker?: (props: PickerProps) => ReactElement | ReactElement[];
  listProps?: PickerListProps;
}

export class Picker extends BaseComponent<PickerProps> {
  Item: typeof PickerItem;
}
