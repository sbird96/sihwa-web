import subscripData from "../assets/SubscriptionData.json"

function MainPageSubscription() {
   return (
      <>
         {/*<!-- Best Start -->*/}
         <div className="subscription">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-8">
                     <div className="subscription-content">
                        <div className="section-header">
                           <p><i className="bi bi-truck"></i> 정기구독</p>
                           <h2>시화당 반찬 정기구독</h2>
                        </div>
                        <div className="cooking-text subscription-image">
                           <p>
                              시화당 정기구독을 하시면 3% 적립 적립금을 추가로 드립니다. 시화당 정기구독과 함께 푸짐하게 식사를 즐겨보세요.
                           </p>
                           <p><img src="images/Subscription/Mar23.png" alt="식단표" width="718" /></p>
                           <p>
                              <i className="fas fa-exclamation-circle"></i> 일부 제품은 한정 수량으로 생산되어, 희망배송일 선택이 제한될 수 있으니 양해 부탁드립니다.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="row">
                        <div className="subscription-image">
                           {
                              subscripData && subscripData.map((subscripdata, index) => (
                                 <div className="subscripmenu-image" key={index}>
                                    <img src={"images/Subscription/" + subscripdata.SubscripImage} alt={subscripdata.SubscripImage1} />
                                 </div>
                              ))

                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      </>
   )
}

export default MainPageSubscription