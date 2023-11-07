import { useEffect, useState } from "react"
import StatBox from "../StatBox"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from "react-redux";
const TotalUser = () => {
    const USERS = useSelector((state) => state.users)
    const [count, setCount] = useState(null)
    const getTotalUser = async () => {
        const res = await fetch("http://localhost:3001/users/count/getTotalUser", {
            method: "GET"
        })
        const totalUser = await res.json()
        setCount(totalUser)
    }
    useEffect(() => {
        getTotalUser();
    }
        //eslint-disable-next-line
        , [USERS])

    return <>
        <StatBox title={"Users"} subtitle={count} icon={<PersonOutlineOutlinedIcon/>}></StatBox>
    </>
}
export default TotalUser