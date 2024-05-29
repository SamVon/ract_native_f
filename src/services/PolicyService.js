import {SERVER_PORT} from '@env';
import Api from '../api/Api';

export default {
  policyService() {
    const url = `${SERVER_PORT}/api/term_condition/term_condition_registersaller`;
    return Api.get(url);
  },
};