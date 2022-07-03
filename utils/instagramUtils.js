import axios from 'axios';

class InstagramUtils {

    isInstagramUrl(instagramUrl) {
        return instagramUrl.match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/igm) != null
    }

    getInstagramPostId(instagramUrl) {
        const postId =  instagramUrl.split('/')[4];
        return postId;
    }

    async getPostData(instagramUrl) {
        if(!this.isInstagramUrl(instagramUrl)) return null;
        
        const postId = this.getInstagramPostId(instagramUrl);
        const url = `https://igcrab.com/api/v1/media/post/${postId}`;
        try {
            const postData = await axios.get(url);
            const imageUrl = postData.data.data[0].image_versions2.candidates
                .filter(c => c.width >= 1080)[0]
                .url;
            const dataToReturn = {
                imageUrl,
                caption: postData.data.data[0].caption.text
            }
            return dataToReturn;
        } catch (err) {
            console.error(err);
        }
        
    }
}

const instagramUtils = new InstagramUtils();
export default instagramUtils;