import bestData from "../assets/BestData.json"
import featureData from "../assets/FeatureData.json"

function MainPageBest() {
   return (
      <>
         {/*<!-- Best Start -->*/}
         <div className="feature">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="section-header">
                        <p><i className="bi bi-box2-heart-fill"></i> 시화당이 드리는</p>
                        <h2>엄마가 해주셨던 손맛</h2>
                     </div>
                     <div className="feature-text">
                        <div className="feature-img">
                           <div className="row">
                              {
                                 featureData && featureData.map((featuredata) => (
                                    <div className="col-6" key={featuredata.FeatureID}>
                                       <img src={"images/Goods/" + featuredata.FeatureImage} alt="Image" />
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                        <p>
                           시(詩)처럼 아름답게, 그림(畵)처럼 우아하게 만든 요리를 선보이는 곳, 시화당을 만나보세요.
                        </p>
                        <p>
                           매일 만날 수 있는 친숙한 밥반찬부터, 새롭게 변주를 준 특별한 요리까지. 신선하고 좋은 재료로 정성껏 요리한다는 기본을 지켜 음식을 준비하지요. 시화당의
                           진심이 담긴 밥상, 이제 신세계백화점(본점/타임스퀘어점/강남점)과 마켓컬리(kurly.com), SSG.COM에서 만나보세요.
                        </p>
                        <a className="btn custom-btn" href="https://www.kurly.com/search?sword=%EC%8B%9C%ED%99%94%EB%8B%B9" target="_blank">마켓컬리에서 구매하기</a>
                     </div>
                  </div>

                  <div className="col-lg-7">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="feature-item">
                              <img src={"images/Goods/" + bestData[0].BestImage} />
                              <h3>{bestData && bestData[0].BestTitle}</h3>
                              <p>{bestData && bestData[0].BestContent}</p>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="feature-item">
                              <img src={"images/Goods/" + bestData[1].BestImage} />
                              <h3>{bestData && bestData[1].BestTitle}</h3>
                              <p>{bestData && bestData[1].BestContent}</p>
                           </div>
                        </div>
                     </div>


                     <div className="row">
                        <div className="col-sm-6">
                           <div className="feature-item">
                              <img src={"images/Goods/" + bestData[2].BestImage} />
                              <h3>{bestData && bestData[2].BestTitle}</h3>
                              <p>{bestData && bestData[2].BestContent}</p>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="feature-item">
                              <img src={"images/Goods/" + bestData[3].BestImage} />
                              <h3>{bestData && bestData[3].BestTitle}</h3>
                              <p>{bestData && bestData[3].BestContent}</p>
                           </div>
                        </div>
                     </div>
                  </div>



               </div>
            </div>
         </div>
      </>
   )
}

export default MainPageBest