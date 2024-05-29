import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();


function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [post,setPost] = useState([]);
    const [page ,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPost(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try{
            const res =await fetch(url);
            const output =await res.json();
            console.log(output);
            setPage(output.page);
            setTotalPages(output.totalPages);
            setPost(output.posts)
        }
        catch(e){
            alert("check the error in the console");
            console("Error in fetching data");
            console.log(e);
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handleChnagePage(page){
        setPage(page);
        fetchBlogPost(page)
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        post,
        setPost,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handleChnagePage
    };

    return <AppContext.Provider value={value}> {children}</AppContext.Provider>
}
export default AppContextProvider;