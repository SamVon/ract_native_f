import { useState } from "react";
import CompanyService from "../../services/CompanyService";

export default {
    getRecommendCompanyApi(){
        const [reComData, setReComData] =useState();
        const [reComLoadIng, setReComLoadIng] =useState(true);
        const [reComError, setReComError] =useState();
        const [reComCount, setReComCount] =useState();
        const handleGetRecommendCompany = async param => {
            setReComLoadIng(true);
            try {
              const resp = await CompanyService.recommendCompanyService(param);
              const data = resp?.data?.companies;
              const count = resp?.data?.count
              setReComCount(count);
              setReComData(data);
              setReComLoadIng(false);
              //console.log("Load successfully", data)
            } catch (error) {
              console.error('Error occurred while try to call API', error);
              setReComLoadIng(false);
              setReComError(error);
            }
          };
          return {
            reComData,
            reComLoadIng,
            setReComLoadIng,
            reComError,
            reComCount,
            handleGetRecommendCompany,
          };
    }
}