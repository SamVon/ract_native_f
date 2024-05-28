import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
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
      limit: 1,
      page: 0,
      dvlat: 17.973470130290842,
      dvlon: 102.62789830466521,
    });
  }, []);
  const data = route.params.productsId
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {reComLoadIng ? (
          <Text>Loading</Text>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={data?.products?.pid}
              keyExtractor={(item, index) => `${index}_reCom`}
              renderItem={({item, index}) => (
                <View style={{flex: 1}}>
                  <Text>{{item}}</Text>
                </View>
              )}></FlatList>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;
