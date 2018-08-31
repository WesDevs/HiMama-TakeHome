import React from 'react';

class AboutSection extends React.Component {

    constructor() {
      super();
      this.state = {
        why: [
          {
            src: './public/assets/SpecialMoments400.png',
            h3: 'Never forget those special moments',
            p: "Being a parent is always busy and memories are easily lost without a convenient way to record them. Capture moments and memories that would normally be fleeting. Big or small, your child's special moments are too precious to forget.",
            alt: "a digital art of a camera and a picture"
          },
          {
            src: './public/assets/ConnectReports400.png',
            h3: 'Connect With your childcare center',
            p: "Feel like you’re missing out on moments while your child is in daycare? If your childcare provider subscribes to HiMama you’ll receive updates on your child’s activities to your email and smartphone – everything from health and nutrition to learning and development. ",
            alt: "A digital art of data sent to mobile about your children's diet"
          },
          {
            src: './public/assets/FamilyLoop400.png',
            h3: 'Keep family and friends in the loop',
            p: "New content defaults to private so no need to hold back - add every little thing! Then, when you want to share, easily send to your close family and friends with the click of a button. Your family can't be with your child every day, but that doesn't mean they should miss out!",
            alt: "a digital art of the family connection"
          }
        ],
        reviews: [
          {
            h5: "You can easily capture and share milestones, events, photos...",
            p: "Jenn, Mother and Blogger at",
            a: "That's What She Said",
            href: "http://thats-what-she-said.ca/"
          },
          {
            h5: "Parents... can stay informed without killing dozens of trees in the process.",
            p: "Christella, Mother and Blogger at",
            a: "Crawl The Line",
            href: "http://www.crawltheline.com/"
          },
          {
            h5: "The value added in having their Grandparents in their day-to-day lives is Priceless.",
            p: "Sarah, Mother and Blogger at",
            a: "Journeys of the Zoo",
            href: "http://www.journeysofthezoo.com/"
          }
        ]
      }
    }


  render() {
    return (
      <section className = "about-section">
          <div className = "wrapper">
            <h3>Why Join? Parents...</h3>

            <div className = "main-text">
              <div>
                <h1><span> Don't</span> miss a moment. Never lose a memory.</h1>
                <h3> Easily capture and share your child's development so you'll never forget. From fun pictures and stories to developmental milestones.</h3>
                <p>
                  Also see: <a href="https://www.himama.com/parents/how-it-works">How it Works</a>
                </p>    
              </div>

              <div className = "contact-link">
                <a href="https://www.himama.com/parents/request_invite?form=daycare">
                  <img src="./public/assets/parent-app-screenshot.png" alt="parent app screenshot"/>
                </a>
              </div>
            </div>

            <div className="why-points">
              {
                this.state.why.map((items, i) => {
                  return <div key={i}> 
                    <div className="why-text">
                      <h3>{items.h3}</h3>
                      <p>{items.p}</p>
                    </div>
                    <div className="why-img">
                      <img src={items.src} alt=""/>
                    </div>
                  </div>
                })
              }
            </div>
          </div>        

          <div className="reviews-section">
          
          </div>
      </section>
    )
  }
}

export default AboutSection;