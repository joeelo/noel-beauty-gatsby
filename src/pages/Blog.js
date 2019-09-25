// import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import fauxBlogs from "../fauxBlogPost";
// import BlogInstance from "../components/BlogInstance";
// import NewestBlog from "../components/NewestBlog";

// const PageContainer = styled.div`
//     width: 80vw;
//     margin: 0 auto;
// `

// const ImagesContainer = styled.div`
//     width: 100%;
//     margin: 0 auto;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
// `

// const Blog = (props) => {

//     const [blogs, setBlogs] = useState([]);
//     useEffect(() => {
//         setBlogs(fauxBlogs);
//     }, []);
    
//     const newestBlog = blogs[0];
    
//     return (
//         <PageContainer>
//                 <NewestBlog />
//             <ImagesContainer>
//                 {blogs.map( (blog, index) => <BlogInstance key={index} blog={blog}/>)}
//             </ImagesContainer>
//         </PageContainer>
//     )
// }

// export default Blog;