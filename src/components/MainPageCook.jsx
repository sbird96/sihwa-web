import React, { useState } from 'react';

import cookData from "../assets/CookData.json"

function MainPageCook() {
   return (
      <>
         {/*<!-- Cooking Start -->*/}
         <div className="cooking">
            <div className="container">
               {
                  cookData.map((cookdata) => (
                     <div className="row align-items-center" key={cookdata.CookID}>
                        <div className="col-lg-5">
                           <div className="section-header">
                              <p><i className="bi bi-house-heart-fill"></i> 오늘의 추천</p>
                              <h2>{cookdata.CookTitle}</h2>
                           </div>
                           <div className="cooking-img">
                              <img src={"images/Cook/" + cookdata.CookImage} alt={cookdata.CookTitle} />
                              <button type="button" className="btn-play" data-bs-toggle="modal" data-bs-target="#videoModal">
                                 <span></span>
                              </button>


                              {/* Yub : Video Modal : 2023-09-05 09:47:05 1.resposive play 2. close & stop play*/}
                              <div className="modal fade" id="videoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                                 <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                       <div className="modal-body text-center h4" id="videoModalLabel">
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                       </div>
                                       {/*<!-- 16:9 aspect ratio -->*/}
                                       <div className="ratio ratio-16x9">
                                          <iframe src={"images/Cook/" + cookdata.CookVideo + "?autoplay=0"} id="video" allowFullScreen></iframe>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-7">
                           <div className="cooking-content">
                              <div className="cooking-text">
                                 <p dangerouslySetInnerHTML={{ __html: cookdata.CookContent }}></p>
                                 <p><span className="cooking-item">재료</span> {cookdata.CookIngredient}</p>
                                 <p><span className="cooking-side">양념</span> {cookdata.CookSeasoning}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
                  )
               }
            </div>
         </div>
      </>
   )
}

export default MainPageCook