import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import CompanyApiModule from '../viewapimodule/CompanyApiModule';

const Recommended = ({}) => {
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

  useEffect(() => {
    console.log('----->',reComData[0]?.products);
  }, [reComData]);
  // const goDetail = (pid) =>{
  //   navigation.navigate('DetailProduct' , {id : pid}) //get pid from id is get items.id
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}} className="flex-row">
        {reComLoadIng ? (
          <Text>Loading......</Text>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={reComData}
              keyExtractor={(item, index) => `${index}_reCom`}
              renderItem={({item, index}) => (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'red',
                    width: 220,
                  }}
                  className="justify-center m-1 rounded-lg items-end">
                  <Image
                    source={{uri: item?.company_profile_img?.imageUrl}}
                    style={{
                      height: 100,
                      alignSelf: 'center',
                    }}
                    className="w-full"
                  />
                  <Text
                    style={{
                      color: 'white',
                      alignSelf: 'flex-start',
                      marginBottom: 10,
                      fontSize: 11,
                      width: 250,
                    }}>
                    ID: {item.id}, Name_Company : {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{width: 150, hight: 120, backgroundColor: 'grey'}}
                    className="rounded-lg items-center p-1"
                    onPress={() => goDetail(item.id)}>
                    <Text style={styles.text}>See Product</Text>
                  </TouchableOpacity>
                </View>
              )}></FlatList>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Recommended;