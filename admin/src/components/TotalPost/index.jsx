import { useEffect, useState } from "react";
import StatBox from "../StatBox";
import { useSelector } from "react-redux";
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';

const TotalPost = () =>{
    const POSTS = useSelector((state)=>state.posts)
    const [count,setCount] = useState(null)
    const getTotalPosts = async () =>{
        const totalPostRes = await fetch(`http://localhost:3001/posts/getTotalPosts`,{
            method:"GET"
        }) 
        const data = await totalPostRes.json();
        setCount(data);
    }
    useEffect(()=>{
        getTotalPosts()
    },[POSTS])//eslint-disable-line

    return <>
        <StatBox title={"Posts"} subtitle={count} icon={<WysiwygOutlinedIcon/>}></StatBox>
    </>
}
export default TotalPost;