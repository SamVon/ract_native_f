import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import React, {useEffect} from 'react';
import {themeColors, themeStyles} from '../../styles/style';
import NavBar from '../../components/NavBar';
import * as SolidIcon from 'react-native-heroicons/solid';
import * as OutLineIcon from 'react-native-heroicons/outline';
import PolicyApiModel from '../../../viewApiModels/PolicyApiModel';

const AppUsagePolicy = () => {
  const {
    AppUsagePolicyData,
    AppUsagePolicyLoadIng,
    AppUsagePolicyError,
    AppUsagePolicyCount,
    setAppUsagePolicyLoadIng,
    handleGetAppUsagePolicy,
  } = PolicyApiModel.getAppUsagePolicyApi();

  useEffect(() => {
    handleGetAppUsagePolicy();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar
        outSideLeftIcon={
          <TouchableOpacity>
            <OutLineIcon.ArrowLeftIcon
              size={25}
              color={themeColors.blackColor}
            />
          </TouchableOpacity>
        }
        insideLeftIcon={
          <Text
            style={[
              themeStyles.titleTextStyle,
              {color: themeColors.blackColor},
            ]}>
            ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂ
          </Text>
        }
      />
      <Image
        source={require('../../../../assets/icons/uni_icon.png')}
        style={{width: 100, height: 50, padding: 20}}
        className={'flex ml-3'}
      />
      <View style={{flex: 1, padding: 20}}>
        <Text>LoadIng..........</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppUsagePolicy;
