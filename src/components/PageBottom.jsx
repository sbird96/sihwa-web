export default function PageBottom() {

   let NowDate = new Date();
   let NowYear = NowDate.getUTCFullYear();

   return (
      <>
         {/*<!-- Footer Start -->*/}
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="row">
                        <div className="col-md-8">
                           <div className="footer-contact">
                              <h2>여기서 일해요</h2>
                              <p><i className="bi bi-geo-alt-fill"></i> 경기도 용인시 기흥구 동백죽전대로 185-2</p>
                              <p><i className="bi bi-telephone-fill"></i> 031-304-2395</p>
                              <p><i className="bi bi-building-fill"></i> 사업자등록번호 : 703-88-01843</p>
                              <p><i className="bi bi-display-fill"></i> 통신판매업신고 : 제 2023-경기용인-0000호</p>
                              <p><i className="bi bi-file-person-fill"></i> 개인정보보호책임자 : 임수진</p>
                              <p><i className="bi bi-hdd-rack-fill"></i> 호스팅서비스 사업자 : 아센더스 에스엔티</p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="footer-link">
                              <h2>열린 시화당</h2>
                              <a href=""><i className='bi bi-caret-right-fill'></i> 시화당 소개</a>
                              <a href=""><i className='bi bi-caret-right-fill'></i> 이용약관</a>
                              <a href=""><i className='bi bi-caret-right-fill'></i> 개인정보처리방침</a>
                              <a href=""><i className='bi bi-caret-right-fill'></i> 공지사항</a>
                              <a href=""><i className='bi bi-caret-right-fill'></i> FQAs</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="footer-newsletter">
                        <h2>고객 행복센터</h2>
                        <p><i className="bi bi-patch-question-fill"></i> 고객센터 | 031-8148-0915</p>
                        <p><i className="bi bi-calendar-week-fill"></i> 월~금요일 | 09:00 - 18:00</p>
                        <p><i className="bi bi-clock-fill"></i> 점심시간 | 12:00 - 13:00</p>
                        <p><i className="bi bi-bag-check-fill"></i> 공휴일 및 주말에는 FQAs에 글을 남겨 주세요.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <p>Copyright {NowYear} <span className="owncomany">시화당</span>, All Right Reserved.</p>
                  <p><span className="designby mx-3">Designed by Accendus S&amp;T Ver 0.1.0 (Next.js 13.4 / React 18.2 / Bootstrap 5.3)</span></p>
               </div>
            </div>
         </div>
         <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

      </>
   )
}
