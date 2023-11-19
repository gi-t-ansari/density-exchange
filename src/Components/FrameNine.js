import React from 'react'
import "./FrameNine.css"
import author1 from "../Assets/prakash.png"
import author2 from "../Assets/shambhavi.png"
import author3 from "../Assets/arjun.png"

function FrameNine() {
  return (
    <div className='frame9-container'>
        <h1>Don't take our word for it.</h1>
        <p>Hear it from our expert community of traders who have made<br /> insane amounts in a short amount of time</p>
        <section>
            <article>
                <p className='frame9-article-para'>As someone who's always looking for the next big thing, I was really excited to try out Density's crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</p>
                <h3 className='frame9-article-author-name'>Prakash<br /> Jamatia.</h3>
                <p className='frame9-article-author-position'>Founder, Tradeshala</p>
                <div className='author-img-container'>
                    <img src={author1} alt='prakash' />
                </div>
            </article>
            <article>
                <p className='frame9-article-para'>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</p>
                <h3 className='frame9-article-author-name'>Shambhavi<br /> Nayak.</h3>
                <p className='frame9-article-author-position'>Commodity Trader</p>
                <div className='author-img-container'>
                    <img src={author2} alt='shambhavi' />
                </div>
            </article>
            <article>
                <p className='frame9-article-para'>I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.</p>
                <h3 className='frame9-article-author-name'>Arjun <br />Naik.</h3>
                <p className='frame9-article-author-position'>Equity Trader</p>
                <div className='author-img-container'>
                    <img src={author3} alt='arjun' />
                </div>
            </article>
        </section>
    </div>
  )
}

export default FrameNine