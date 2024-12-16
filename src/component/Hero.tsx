import ImageHeroMobile from  '/src/assets/images/image-hero-mobile.webp'
import ImageHeroTablet from  '/src/assets/images/image-hero-tablet.webp'
import ImageHeroDesktop from  '/src/assets/images/image-hero-desktop.webp'
import ImageAvatars from  '/src/assets/images/image-avatars.webp'
import IconStars from  '/src/assets/images/icon-star.svg'


export default function Header() {
    return (
        <>
        
        <div className="hero">
      
            <h1>Join the ultimate tech book club</h1>
            <p>Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
            <a href="" className='hero__cta'>REVIEW MEMBERSHIP OPTIONS <span className='hero__cta-icon'></span></a>
            <div className="hero__social-proof">
            <img src={ImageAvatars} width={110} height={40} className='hero__image-avatars'/>
            <span>
                <span><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/><img src={IconStars} width={24} height={25}/></span>
            200+ developers joined already
            </span>
            </div>
            <picture>
                <source 
                    srcset={ImageHeroDesktop}
                    alt="Baby Sleeping"
                    media="(min-width: 1000px)"
                    className='hero__image'
                />
                <source 
                    srcset={ImageHeroTablet}
                    alt="Baby Sleeping"
                    media="(min-width: 768px)"
                    className='hero__image'
                />
                <img 
                    src={ImageHeroMobile}
                    alt="Baby Sleeping"
                    className='hero__image'
                />
                </picture>
           
            
        </div>
        </>
    )
  }