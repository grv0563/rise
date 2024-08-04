import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-navbar">
        <NavigationBar />
        <SideBar/>
      </div>
      <div className="blog-main">
      
      </div>
      <div className="blog-footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default Blog;
