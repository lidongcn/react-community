import fetchie,{ fetchieMock } from 'fetchie';
import constant from '../../config/constant';
import mockData from './mock-data.json';
fetchie
    .use(fetchieMock(mockData))
    .use(function(){
        this.prefix('http://'+constant.host);
    })
    .use(function () {
        this.cors(true);
    })
export default fetchie;