import React from 'react';
import { ColorValue, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { style } from './style';

interface MiPrimerComponenteClassProps {
  color: ColorValue;
  colorOnSelected: ColorValue;
}

interface MiPrimerComponenteClassState {
  selected: boolean;
}

class MiPrimerComponenteClass extends React.Component<MiPrimerComponenteClassProps, MiPrimerComponenteClassState>{
  
  constructor(props:MiPrimerComponenteClassProps){
    super(props);
    this.state = {
      selected: false,
    }
  }
  onSelection = () => {
    this.setState({
      selected: !this.state.selected
    })
  };

  render(): React.ReactNode {
    const { color, colorOnSelected } = this.props;
    const {selected} = this.state;


    return (
      <TouchableOpacity
        onPress={this.onSelection}
        style={[
          style.mainComponent,
          {
            backgroundColor: selected ? colorOnSelected : color,
          },
        ]}
      />
    );

  }
}


export default MiPrimerComponenteClass;


