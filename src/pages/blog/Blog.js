import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-navbar">
        <NavigationBar />
      </div>
      <div className="blog-main">
      Blog
      </div>
      <div className="blog-footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default Blog;
