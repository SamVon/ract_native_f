import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const NavBar = ({
  outSideLeftIcon,
  insideLeftIcon,
  middleIcon,
  insideRightIcon,
  outSideRightIcon,
  backgroundColor,
}) => {
    const fullWidth = Dimensions.get("window").width;
  return (
    <View
    style={{
      width: fullWidth,
      height: 50,
      backgroundColor: backgroundColor,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }}
  >
    <View style={{ flexDirection: "row" }} className="space-x-2">
      {outSideLeftIcon && <View>{outSideLeftIcon}</View>}
      {insideLeftIcon && <View>{insideLeftIcon}</View>}
    </View>

    {middleIcon && (
      <View
        style={{
          left: "25%",
          right: "25%",
        }}
      >
        {middleIcon}
      </View>
    )}

    <View style={{ flexDirection: "row" }} className="space-x-2">
      {insideRightIcon && <View>{insideRightIcon}</View>}
      {outSideRightIcon && <View>{outSideRightIcon}</View>}
    </View>
  </View>
  );
};

export default NavBar;
