import Link from "next/link"
//import Image from "next/image"

import blogData from "../assets/BlogData.json"

export default function MainPageBlog() {
   return (
      <>
         {/*<!-- Blog Start -->*/}
         <div className="blog">
            <div className="container">
               <div className="section-header text-center">
                  <p><i className="bi bi-instagram"></i> 사계절 제철요리를 만드는</p>
                  <h2>시화당 블로그</h2>
               </div>
               <div className="row">
                  {
                     blogData.map((blogdata) => (
                        <div className="col-md-6" key={blogdata.BlogID}>
                           <div className="blog-item">
                              <div className="blog-img">
                                 <img src={'./images/Blog/' + blogdata.BlogImage} alt={blogdata.BlogTitle} />
                              </div>
                              <div className="blog-content">
                                 <h2 className="blog-title">{blogdata.BlogTitle}</h2>
                                 <div className="blog-meta">
                                    <p><i className="bi bi-person-fill"></i>{blogdata.BlogTitle}</p>
                                    <p><i className="bi bi-bookmark-check-fill"></i>{blogdata.BlogUser}</p>
                                    <p><i className="bi bi-calendar2-week-fill"></i>{blogdata.Blog}Date</p>
                                    <p><i className="bi bi-chat-right-heart-fill"></i>{blogdata.Blog}Hit</p>
                                 </div>
                                 <div className="blog-text">
                                    <p dangerouslySetInnerHTML={{ __html: blogdata.BlogContent }} />
                                    <a className="btn custom-btn" href="">자세히 보기</a>
                                 </div>
                              </div>
                           </div>
                        </div>

                     )
                     )
                  }
               </div>
            </div>
         </div >
      </>
   )
}
