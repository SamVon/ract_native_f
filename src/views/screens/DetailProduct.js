import {View, Text, SafeAreaView, } from 'react-native';
import React, {useEffect} from 'react';
import CompanyApiModule from '../viewapimodule/CompanyApiModule';



const DetailProduct = ({route}) => {
  const {
    reComData,
    reComLoadIng,
    setReComLoadIng,
    reComError,
    reComCount,
    handleGetRecommendCompany,
  } = CompanyApiModule.getRecommendCompanyApi();

  useEffect(() => {
    handleGetRecommendCompany({
      limit: 10,
      page: 0,
      dvlat: 17.973470130290842,
      dvlon: 102.62789830466521,
    });
  }, []);

  // useEffect(() => {
  //   console.log('----->',reComData[0]?.products);
  // }, [reComData]);


  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={{flex: 1}}>
        <Text>DetailProduct</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;
