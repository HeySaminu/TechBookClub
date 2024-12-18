import ImageNotAverageDesktop from  '/src/assets/images/image-not-average-desktop.webp'
import ImageNotAverageTablet from  '/src/assets/images/image-not-average-tablet.webp'
import ImageNotAverageMobile from  '/src/assets/images/image-not-average-mobile.webp'

export default function() {
    return (
        <div className="not_average">
            <div className="not_average-content">
            <h2>Not your average book <span>club</span>
            
            </h2>
                <p>Connect with a community that speaks your language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. Our discussions blend technical depth with practical applications.</p>
            
            </div>
            <picture>
                <source 
                    srcset={ImageNotAverageDesktop}
                    alt="Group of people reading together in a library"
                    media="(min-width: 1000px)"
                    className='not_average__image'
                />
                <source 
                    srcset={ImageNotAverageTablet}
                    alt="Group of people reading together in a library"
                    media="(min-width: 768px)"
                    className='not_average__image'
                />
                <img 
                    src={ImageNotAverageMobile}
                    alt="Group of people reading together in a library"
                    className='not_average__image'
                />
                </picture>
        </div>
    )
  }