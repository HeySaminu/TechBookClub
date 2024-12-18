import IconStars from  '/src/assets/images/icon-star.svg'

export default function() {
    return (
        <div className="membership">
            <h2>Membership options</h2>
            <div className="membership_card-wrapper">
                <div className="membership_card">
                <h3 className="membership_card-title">Starter</h3>
                <p className="membership_card-price">$19<span>/month</span></p>
                <div>
                    <ul className="membership_card-items">
                        <li><span></span>1 book/month</li>
                        <li><span></span>Online forums</li>
                    </ul>
                </div>
                <a href="" className="button primary membership_cta">SUBSCRIBE NOW</a>
                </div>

                <div className="membership_card bg-neutral-0">
                <h3 className="membership_card-title">Pro</h3>
                <p className="membership_card-price">$29<span>/month</span></p>
                <div>
                    <ul className="membership_card-items">
                        <li><span></span>2 book/month</li>
                        <li><span></span>Virtual meetups</li>
                    </ul>
                </div>
                <a href="" className="button primary membership_cta">SUBSCRIBE NOW</a>
                <div className="membership_card-pattern-glow"><svg xmlns="http://www.w3.org/2000/svg" width="1084" height="1084" fill="none" viewBox="0 0 1084 1084"><g filter="url(#a)" opacity=".4"><circle cx="542" cy="542" r="342" fill="#9CC9DA"/></g><defs><filter id="a" width="1084" height="1084" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_136_1757" stdDeviation="100"/></filter></defs></svg></div>
                </div>

                <div className="membership_card">
                <h3 className="membership_card-title">Enterprise</h3>
                <p className="membership_card-price">Custom</p>
                <div>
                    <ul className="membership_card-items">
                        <li><span></span>Team access</li>
                        <li><span></span>Private sessions</li>
                    </ul>
                </div>
                <a href="" className="button primary membership_cta">TALK TO US</a>
           
                </div>
               </div>
            <div className="membership_testimonial">
            <span><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/></span>
            <p className="testimonial">"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>
            <h4 className="testimonial-author">Sarah Chen, Software Architect</h4>
            </div>
            </div>
    )
  }