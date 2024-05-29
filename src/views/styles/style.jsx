import {StyleSheet} from 'react-native';
 
export const themeColors = {
  primaryColor: '#FF7466',
  titleTextColor: '#000000',
  subtitleTextColor: '#394052',
  textColor: '#A0A0A0',
  starColor: '#CA7D00',
  bgColor: '#EEEFF0',
  greenColor: '#34A853',
  partnerColor: '#1AA5A2',
  blackColor: '#000000',
  followColor: '#007BFF',
  borderColor: '#CFCFCF '
};
 
export const themeStyles = StyleSheet.create({
  priceTextStyle: {
    fontSize: 22,
    fontFamily: 'NotoSansLao-Bold',
  },
  highLightTextStyle: {
    fontSize: 18,
    fontFamily: 'NotoSansLao-Medium'
  },
  titleTextStyle: {
    fontSize: 18,
    fontFamily: 'NotoSansLao-Medium'
  },
  subTitleTextStyle: {
    fontSize: 14,
    fontFamily: 'NotoSansLao-Medium'
  },
  textStyle: {
    fontSize: 12,
    fontFamily: 'NotoSansLao-Regular'
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
 
});