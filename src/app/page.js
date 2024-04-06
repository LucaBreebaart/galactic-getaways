import "./(css)/space.css"
import Link from "next/link";

import { ContactUs } from "./(client)/contactUs";

export default function Home() {
  return (
    <body className="body">
      <div className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-bar_link_wrapper"><img src="images/Logo.png" loading="lazy" alt=""></img>
            <Link href="" className="nav-link">
              <div>Home</div>
              <div className="line"></div>
            </Link>
            <Link href="" className="nav-link">
              <div>Destinations</div>
              <div className="line hide"></div>
            </Link>
          </div>
          <div className="nav-bar_link_wrapper">
            <div className="outline-button">Get the app</div>
          </div>
        </div>
      </div>
      <div className="header-section">
        <div className="header-container">
          <div className="header-t">Tired Of Global Warming?</div>
          <div className="header-heading">Visit A Different Planet</div>
          <div className="header-t">Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.</div>
          <div className="header-btn-container">
            <button className="primarty-btn">Destinations</button>
            <button className="secondary-btn">Stay up-to-date</button>
          </div>
        </div>
      </div>
      <div className="collection-section">
        <div className="collection-container">
          <div className="collection-heading-wrapper">
            <div className="collection-heading">Visit A Different Planet</div>
            <div className="header-t">Explore three breathtaking destinations, each with its own unique charm and mystery.</div>
          </div>
          <div className="planet-card-container">
            <div className="planet-card">
              <div className="card-content"><img src="images/mars-3-1.png" loading="lazy" alt="" className="card-image"></img>
                <div className="card-heading">Mars</div>
                <div className="card-line"></div>
                <div className="card-t">Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</div>
              </div>
              <div className="card-background"></div>
            </div>
            <div className="planet-card">
              <div className="card-content"><img src="images/mars-3-1-1.png" loading="lazy" alt="" className="card-image"></img>
                <div className="card-heading">Saturn</div>
                <div className="card-line"></div>
                <div className="card-t">Experience weightlessness as you float among Saturn&#x27;s rings to witness the grandeur of the gas giant from close quarters.</div>
              </div>
              <div className="card-background"></div>
            </div>
            <div className="planet-card">
              <div className="card-content"><img src="images/mars-3-1-2.png" loading="lazy" alt="" className="card-image"></img>
                <div className="card-heading">Pluto</div>
                <div className="card-line"></div>
                <div className="card-t">Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system.</div>
              </div>
              <div className="card-background"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-section"><img src="images/vecteezy_astronauta-png-grafico-clipart-diseno_20003935-1.png" loading="lazy" alt="" className="astronaut-man"></img>
        <div className="app-container">
          <div className="app-heading-wrapper">
            <div className="app-heading">Visit A Different Planet</div>
            <div className="app-t">Explore three breathtaking destinations, each with its own unique charm and mystery.</div>
          </div><img src="images/Apple-iPhone-15-Pro-White-Titanium-1.png" loading="lazy" sizes="(max-width: 991px) 94vw, 937px" srcSet="images/Apple-iPhone-15-Pro-White-Titanium-1-p-500.png 500w, images/Apple-iPhone-15-Pro-White-Titanium-1-p-800.png 800w, images/Apple-iPhone-15-Pro-White-Titanium-1.png 937w" alt="" className="app-image"></img>
        </div>
      </div>
      <div className="footer-section">
        
        <ContactUs></ContactUs>

        <div className="footer-container">
          <div className="footer-left-wrapper"><img src="images/Logo.png" loading="lazy" alt=""></img>
            <div className="footer-t">Luca Breebaart <span className="footer-t bold">  ©    2024</span></div>
          </div>
          <div className="footer-right-wrapper">
            <div className="footer-right-link-block">
              <div className="footer-t bold">Links</div>
              <div className="footer-t">Home</div>
              <div className="footer-t">Destinations</div>
              <div className="footer-t">Mobile App</div>
            </div>
            <div className="footer-right-link-block">
              <div className="footer-t bold">Follow Us</div>
              <div className="socials-grid"><img src="images/instagram.png" loading="lazy" alt=""></img><img src="images/tiktok.png" loading="lazy" alt=""></img><img src="images/facebook.png" loading="lazy" alt=""></img><img src="images/twitter-1-1.png" loading="lazy" alt=""></img></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
