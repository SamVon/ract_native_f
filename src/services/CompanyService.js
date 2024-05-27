import {SERVER_PORT} from '@env';
import Api from '../views/api/Api';

export default {
  recommendCompanyService(param) {
    const url = `${SERVER_PORT}/company/list/Recommended?limit=${param.limit}&page=${param.page}&dvlat=${param.lat}&dvlon=${param.lon}`;
    return Api.get(url);
  },
};
