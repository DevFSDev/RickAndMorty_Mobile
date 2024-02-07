import React from 'react';
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {style} from './style';

interface MiPrimerComponenteProps {
  color: ColorValue;
  colorOnSelected: ColorValue;
}

function MiPrimerComponente(props: MiPrimerComponenteProps): JSX.Element {
  
  const [selected, setSelected] = React.useState<boolean>(false);
  const {color, colorOnSelected} = props;

  const onSelection = () => {
    setSelected(!selected);
  }

  return (
    <TouchableOpacity
    onPress={onSelection}
      style={[
        style.mainComponent,
        {
          backgroundColor: selected ? colorOnSelected : color,
        },
      ]}
    />
  );
}

export default MiPrimerComponente;
