import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/Appcontext";
export default function App() {
  const {fetchBlogPost} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPost();
  },[]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-1">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  ) 
}
