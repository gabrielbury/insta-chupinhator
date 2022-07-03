import InstagramUtils from '../utils/instagramUtils'
import axios from 'axios';

class InstagramPostService {

    async getData(instagramUrl) {
        return await InstagramUtils.getPostData(instagramUrl);
    }
}

const instagramPostService = new InstagramPostService();
export default instagramPostService;