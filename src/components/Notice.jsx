const Notification = "<strong>시화당 런칭기념 이벤트</strong> 회원가입 \\3,000원 할인 쿠폰 증정";

export default function Notice() {
   return (
      <>
         <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <div className="text-center" dangerouslySetInnerHTML={{ __html: Notification }} />
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </>
   )
}
