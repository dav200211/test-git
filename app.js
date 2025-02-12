import axios from "axios";

const deletePost = async () => {
    try{
        await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
        console.log('Post deleted successfully');
    }catch(error){
        console.error('There was an error making the DELETE request',error);
    }
};
deletePost();