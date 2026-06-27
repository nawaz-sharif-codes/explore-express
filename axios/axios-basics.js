import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

const json_placeholder_users = process.env.JSON_PLACEHOLDER_USERS
const json_placeholder_posts = process.env.JSON_PLACEHOLDER_POSTS

async function fetchUsers(url){
    try{
        const response = await axios.get(url)
        const users = response.data;
        console.log(users);
        // const emails = users.map((data)=> data.email)
        // console.log(emails ?? 'No Emails Found');
        // console.log('status :', response.status)
        // console.log('statusText :', response.statusText)
        // console.log('headers :', response.headers)
        // console.log('config :', response.config)
        return users;
    }
    catch(error){
        console.log('Error occured while fetching users :', error)
        throw new Error('Error occured while fetching users', error)
    }
}

// await fetchUsers(json_placeholder_users)


async function fetchPosts(url){
    try{
        const posts = await axios.get(url,{
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json',
                "Authorization" : "Bearer abcd123"
            },
            params : {
                userId : 1
            },
            timeout : 5000
        })
        console.log(posts.data)
    }
    catch(error){
        console.log('Error occured while fetching posts : ', error)
        throw new Error('Internal Server Error :', error)
    }
}

await fetchPosts(json_placeholder_posts)