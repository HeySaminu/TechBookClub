import ImageReadTogetherDesktop from  '/src/assets/images/image-read-together-desktop.webp'
import ImageReadTogetherTablet from  '/src/assets/images/image-read-together-tablet.webp'
import ImageReadTogetherMobile from  '/src/assets/images/image-read-together-mobile.webp'

export default function() {
    return (
        <div className="read_together">
            <div className="read_together-list">
            <h2>Read together, 
            grow together</h2>
                <ul>
                    <li><span className='read_together-icon-check'></span>Monthly curated tech reads selected by industry experts</li>
                    <li><span className='read_together-icon-check'></span>Virtual and in-person meetups for deep-dive discussions</li>
                    <li><span className='read_together-icon-check'></span>Early access to new tech book releases</li>
                    <li><span className='read_together-icon-check'></span>Author Q&A sessions with tech thought leaders</li>
                </ul>
            </div>
            <picture>
                <source 
                    srcSet={ImageReadTogetherDesktop}
                    alt="Group of people reading together in a library"
                    media="(min-width: 1000px)"
                    className='read_together__image'
                />
                <source 
                    srcSet={ImageReadTogetherTablet}
                    alt="Group of people reading together in a library"
                    media="(min-width: 768px)"
                    className='read_together__image'
                />
                <img 
                    src={ImageReadTogetherMobile}
                    alt="Group of people reading together in a library"
                    className='read_together__image'
                />
                </picture>
        </div>
    )
  }