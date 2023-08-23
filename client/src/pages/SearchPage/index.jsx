import Navigate from "../../components/Navigate"
import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, TextField, useMediaQuery } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import SearchFeed from "../../components/SearchFeed";
import { useEffect } from "react";
const SearchPage = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [feed, setFeed] = useState([]);
    const token = useSelector(state => state.token);
    const [search, setSearch] = useState("");
    const handleSearch = async () => {
        const searchRes = await fetch(`http://localhost:3001/${search}`, {
            method: "GET",  
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await searchRes.json();
        setFeed(data);
    }
    useEffect(() => {
        console.log(feed) //eslint-disable-line
    }, [feed]);
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Navigate plateformName={"TweetVerse"}></Navigate>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem", m: "1rem", width: isNonMobile ? "40%" : "90%" }}>
            <TextField size="small" placeholder="" label="Search" sx={{ width: "100%" }} inputMode="search" value={search} onChange={(e)=> setSearch(e.target.value)}></TextField>
            <SearchIcon sx={{ borderRadius: "0.3rem", p: "0.4rem", ":hover": { bgcolor: "lightgray" } }} onClick={handleSearch} ></SearchIcon>
        </Box>
        {
            feed.map(({_id,firstName,lastName}) => (
                // <Typography>{item.firstName} {item.lastName}</Typography>
                <SearchFeed key={_id} 
                firstName={firstName}
                lastName={lastName}
                />
            ))
        }
    </Box>
}
export default SearchPage