import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import React, {useEffect} from 'react';
import {themeColors, themeStyles} from '../../styles/style';
import NavBar from '../../components/NavBar';
import * as SolidIcon from 'react-native-heroicons/solid';
import * as OutLineIcon from 'react-native-heroicons/outline';
import PolicyApiModel from '../../../viewApiModels/PolicyApiModel';
import AppUsagePolicyViewModel from '../../../viewModels/policyViewModel/AppUsagePolicyViewModel';

const AppUsagePolicy = () => {
  const {
    AppUsagePolicyData,
    AppUsagePolicyLoadIng,
    AppUsagePolicyError,
    AppUsagePolicyCount,
    setAppUsagePolicyLoadIng,
    handleGetAppUsagePolicy,
  } = PolicyApiModel.getAppUsagePolicyApi();

  const {switchPolicyLanguage} = AppUsagePolicyViewModel();

  const systemFonts = [
    ...defaultSystemFonts,
    'NotoSansLao-Medium',
    'NotoSansLao-Bold',
  ];

  const {width} = useWindowDimensions();

  useEffect(() => {
    handleGetAppUsagePolicy();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
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
          <RenderHtml
            source={{html: AppUsagePolicyData?.content_la}}
            systemFonts={systemFonts}
            contentWidth={width}
            tagsStyles={{
              body: {
                fontFamily: 'NotoSansLao-Medium',
                fontSize: 16,
                color: themeColors.subtitleTextColor,
              },
              h1: {
                fontFamily: 'NotoSansLao-Bold',
                fontSize: 19,
                color: themeColors.subtitleTextColor,
              },
              p: {
                fontFamily: 'NotoSansLao-Medium',
                fontSize: 14,
                color: themeColors.subtitleTextColor,
              },
            }}
          />
        </View>
        <View style={{flex: 0.5}}>
          <TouchableOpacity
            style={{
              backgroundColor: themeColors.primaryColor,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <Text
              className={'justify-center'}
              style={{
                color: themeColors.bgColor,
              }}
              >
              ໄປຕໍ່
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppUsagePolicy;
