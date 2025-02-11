import Header from "../Components/Header";
import Nav from "../Components/Nav";

export default function Services() {
  return (
    <>
      <div className="container-fixed">

      <Nav />
      <Header
        title="Our Services"
        desc=" We are a professional digital agency providing premium themes, UI/UX  design and web apps that
               you
               will simply love."
      />
      </div>
    </>

  );
}

/*<body>

      <div class="wrapper-xl text-center hero-services">
         <div class="services-section">
            <img src="assets/images/bg.png" alt="Background Image" class="bg-img services" />
            <h1 class="dark">Our Services</h1>
            <br />
            <p class="services-text">
               We are a professional digital agency providing premium themes, UI/UX <br> design and web apps that
               you
               will simply love.
            </p>
         </div>
      </div>
      <div class=" wrapper-lg solution-section">
         <div class="row">
            <div class="col-1">
               <img src="assets/images/services-first.png" class="img-missions">
            </div>
            <div class="col-1 solution-info">
               <h1 class="solution-heading">IT solutions for your <br> business.</h1>
               <p class="solution-paragraf">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit
                  amet semper tristique.
                  Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.
               </p>
               <div class="solutions">
                  <ul>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Installation Guide</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Easy setup process</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Live call support</span>
                        </div>
                     </li>
                     <li>
                        <div class="solutions-item">
                           <div class="icon-container">
                              <span class="material-symbols-outlined">check</span>
                           </div>
                           <span class="dark">Start a private group video call</span>
                        </div>
                     </li>
                  </ul>
               </div>
               <button class="solution-btn">Explore</button>
            </div>
            <div class="row simple-section m-5 gap-6">
               <div class="col-1">
                  <button class="speciale-1">HOW OUR PROCESS WORKS</button>
                  <h2 class="simple">Simple 4-Step System</h2>
               </div>
               <div class="col-1">
                  <div class="simple-item">
                     <span class="material-symbols-outlined">remove</span>
                     <span class="dark">01 Strategy</span>
                  </div>
                  <div class="simple-item-content">
                     <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS
                        files for styling, complete JS files with comments, all HTML variations. Besides we
                        include
                     </p>
                  </div>
                  <div class="simple-item">
                     <span class="material-symbols-outlined">add</span>
                     <span class="dark">02 Design</span>
                  </div>
                  <div class="simple-item">
                     <span class="material-symbols-outlined">add</span>
                     <span class="dark">03 Operation</span>
                  </div>
                  <div class="simple-item">
                     <span class="material-symbols-outlined">add</span>
                     <span class="dark">04 Launch</span>
                  </div>
               </div>
            </div>
            <div class="services">
               <div class="row create-service">
                  <h1>Services</h1>
                  <a href="">
                     <p class="info-service">Start your project</p>
                  </a>
               </div>
               <div class="row">
                  <div class="carousel">
                     <input type="radio" name="slide" id="slide1" checked>
                     <input type="radio" name="slide" id="slide2">
                     <input type="radio" name="slide" id="slide3">
                     <input type="radio" name="slide" id="slide4">
                     <label for="slide1" class="arrow prev">&#10094;</label>
                     <div class="carousel-inner">
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Mobile Data</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Financial Advisory</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Business Contracts</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Integration Dynamics</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Business Contractss</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img src="assets/images/first.png" alt="">
                           <div class="carousel-text">
                              <h1>Financial Advisory</h1>
                              <p>Achieve virtually any design and layout from within the one template.</p>
                           </div>
                        </div>
                     </div>
                     <label for="slide4" class="arrow next">&#10095;</label>
                     <label for="slide1" class="arrow prev">&#10094;</label>
                  </div>
               </div>
            </div>
         </div>
         <br><br>
         <div class="divided"></div>
         <div class="row m-10 gap-9 costumer-section service">
            <div class="col-1">
               <button class="speciale-1">EXPLORE NEW PLACES</button>
               <h2 class="costumer-header">What our costumer says</h2>
            </div>
            <div class="col-1 info">
               <h4>Design Quality</h4>
               <br>
               <p>The template is really nice and offers quite a large set of options. It’s beautiful and the
                  coding is
                  done quickly and seamlessly. Thank you!
               </p>
               <br>
               <h4>Devon Lane</h4>
               <p>Team Leader, Paypal</p>
            </div>
            <div class="col-1 info">
               <h4>Design Quality</h4>
               <br>
               <p>The template is really nice and offers quite a large set of options. It’s beautiful and the
                  coding is
                  done quickly and seamlessly. Thank you!
               </p>
               <br>
               <h4>Theresa Webb</h4>
               <p>Softwer Tester, Envato</p>
            </div>
         </div>
         <div class="row m-5  row-phone row-tablet">
            <div class="arrows service">
               <span class="material-symbols-outlined arrow west">west</span>
               <span class="material-symbols-outlined arrow east">east</span>
            </div>
         </div>
         <div class="row metrics service">
            <div class="col components">
               <h1>773</h1>
               <p>Components</p>
            </div>
            <div class="col downloads">
               <h1>1254</h1>
               <p>Downloads</p>
            </div>
            <div class="col followers">
               <h1>14941</h1>
               <p>Followers</p>
            </div>
            <div class="col users">
               <h1>1254</h1>
               <p>New User</p>
            </div>
         </div>
         <div class="launch-section m-5 p-2 text-center">
            <h1 class="display-1 services"> We help startups launch and succeed very fast</h1>
            <p class="launch-text">We appreciate your trust greatly! Our clients choose us and our products because
               they<br> know we’re the
               best.
            </p>
            <button class="pro-btn">GET STARTED</button><br>
         </div>
         <footer class="footer-info-protofolio ">
            <div class="row">
               <span class="left-side">
                  <p>Privacy & Cookie Policy | Terms of Service</p>
               </span>
               <span class="middle-side">
                  <p>© Copyright 2021. Sassio</p>
               </span>
               <span class="right-side">
                  <img src="assets/images/fb.png" alt="">
                  <img src="assets/images/tw.png" alt="">
                  <img src="assets/images/insta.png" alt="">
                  <img src="assets/images/ln.png" alt="">
               </span>
            </div>
         </footer>
      </div>
</body>

</html>*/
