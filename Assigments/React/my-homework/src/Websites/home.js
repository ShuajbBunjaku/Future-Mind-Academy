import Nav from "../Components/Nav";

export default function Home() {
  return (
    <>
      <div className="container-fixed">
        <Nav />
        <div className="hero row">
          <div className="col text-left p-5 m-5 intro">
            <button className="btn-primary speciale">
              On sale for a limited time
            </button>
            <h1 className="display-1">Premium Startup & App</h1>
            <h1 className="display-2">Landing Page</h1>
            <p className="hero-paragraf">
              Besides its beautiful design. Sassio is an incredibly rich core
              framework for you to showcase your App.
            </p>
            <div className="col img-fixed">
              <img src="images/app_btn.png" alt="apple" />
            </div>
            <div className="buttons">
              <div className="button-container">
                <img
                  className="button-image"
                  src="assets/images/icone_apple.png"
                  alt="Apple Image"
                />
                <span className="seperator"></span>
                <div className="button-text">
                  <span className="button-download">Download on the</span>
                  <span className="bold-text">Apple Store</span>
                </div>
              </div>
              <div className="button-container">
                <img
                  className="button-image"
                  src="assets/images/icone_android.png"
                  alt="Apple Image"
                />
                <span className="seperator"></span>
                <div className="button-text">
                  <span className="button-download">Get it on</span>
                  <span className="bold-text">Google Play</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/images/bg.png"
            alt="Background Image"
            className="bg-img"
          />
          <div className="col pictures">
            <img
              src="assets/images/phones.png"
              alt="Phones Image"
              className="img-fluid"
            />
            <img
              src="assets/images/pattern-bg.png"
              alt="pattern"
              className="pattern-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* 
    /  <div class="trusted-by text-center p-4">         <p>Trusted by the world’s best</p>
         <div class="row">
            <div class="col m-5">
               <img src="assets/images/amazon.png">
            </div>
            <div class="col m-5">
               <img src="assets/images/amd.png">
            </div>
            <div class="col m-5">
               <img src="assets/images/cisco.png">
            </div>
            <div class="col m-5">
               <img src="assets/images/dropcam.png">
            </div>
            <div class="col m-5">
               <img src="assets/images/logitech.png">
            </div>
            <div class="col m-5">
               <img src="assets/images/spotify.png">
            </div>
         </div>
      </div>
      <div class="wrapper-full text-center">
         <button class="btn-primary speciale-1">SAFETY FIRST</button>
         <h1 class="text-center">You're in a secure company</h1><br>
         <div class="secure-section">
            <div class="row square all-shadow">
               <div class="col-5 m-2 p-2">
                  <img src="assets/images/timer.png" alt="timer-picture" />
               </div>
               <span class="col-5 m-1 text-left">
                  <h3 class="dark">Real time activity</h3><br>
                  <p>
                     Get instant insight on what's happening in your business.<br> It uses a dictionary of the over 200
                     Latin words,
                  </p>
               </span>
            </div>
            <div class="row  square all-shadow">
               <div class="col-5  m-2 p-2">
                  <img src="assets/images/cloud-storage.png" alt="cloud-storage" />
               </div>
               <span class="col-5 m-1 text-left">
                  <h3 class="dark">Instant deploy</h3><br>
                  <p>
                     Deploy your project in a fraction of a second, no time!<br> It uses a dictionary of the over 200
                     Latin
                     words,
                  </p>
               </span>
            </div>
            <div class="row square all-shadow">
               <div class="col-5  m-2 p-2">
                  <img src="assets/images/touch.png" alt="touch-screen" />
               </div>
               <span class="col-5 m-1 text-left">
                  <h3 class="dark">Easy integrations</h3><br>
                  <p>
                     Integrate our solution with other tech leaders in the<br> industry. It uses a dictionary of the
                     over
                     200 Latin words,.
                  </p>
               </span>
            </div>
            <div class="row square all-shadow">
               <div class="col-5  m-2 p-2">
                  <img src="assets/images/pen-tool.png" alt="pen-tool" />
               </div>
               <span class="col-5 m-1 text-left">
                  <h3 class="dark">Perfect UI/UX</h3><br>
                  <p>
                     Get instant insight on what's happening in your business.<br> It uses a dictionary of the over 200
                     Latin words,
                  </p>
               </span>
            </div>
         </div>
         <div class="benefit-section">
            <div class="row">
               <div class="col-1 m-2 p-2 replacement">
                  <img src="assets/images/benefit.png" alt="benefits">
               </div>
               <div class="col-1 m-3 p-3 benefit-info">
                  <div class="col benefit-header text-left ">
                     <button class="btn-primary speciale-1">SAFETY FIRST</button>
                     <h3 class="display-1">Tons of benefit</h3>
                  </div>
                  <div class="benefits">
                     <ul>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Development</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Web Design</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Do Magic</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Save Time</span>
                           </div>
                        </li>
                     </ul>
                     <ul class="item-left">
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">App builder</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Dashboard</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Feedback</span>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <button class="btn-free just-start">FREE TRIAL</button>
               </div>
               <div class="col-1 m-2 p-2 benefit-img">
                  <img src="assets/images/benefit.png" alt="benefits" class="benefit-img">
               </div>
            </div>
         </div>
      </div>
      <div class="row path-succes-section">
         <div class="col-2">
            <img src="assets/images/trending.png" class="path-img">
         </div>
         <div class="path-succes">
            <div class="col-2 gap-2">
               <button class="speciale-1 just-start">WE ARE YOUR ONLY</button><br>
               <h1 class="dark title">Path to Success</h1>
               <br>
               <div class="row gap-2 m-3 align-start">
                  <div class="col-2">
                     <div class="back-hover">
                        <img src="assets/images/letter.png" alt="letter">
                     </div>
                  </div>
                  <div class="col-5">
                     <h3 class="dark">Mail Management</h3><br>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
               <br><br>
               <div class="row gap-2">
                  <div class="col-2">
                     <div class="back-hover">
                        <img src="assets/images/package-delivery.png" alt="package-delivery">
                     </div>
                  </div>
                  <div class="col-5">
                     <h3 class="dark">Customers Tracking</h3><br>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
               <br><br>
               <div class="row gap-2">
                  <div class="col-2">
                     <div class="back-hover"><img src="assets/images/reporting.png" alt="Reporting">
                     </div>
                  </div>
                  <div class="col-5">
                     <h3 class="dark">Advanced Reporting</h3><br>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="powerful-features">
         <div class="col-1 p-2 text-center">
            <button class="speciale-1 just-start">OUR FEARURES</button><br>
            <h1 class="dark title">Powerful Features</h1>
            <br>
         </div>
         <div class="row features-info  align-center">
            <div class="col features">
               <div class="row different">
                  <div class="col features-img">
                     <img src="assets/images/laptop.png" alt="">
                  </div>
                  <div class="col-4">
                     <h3 class="dark">Theme Made Easy</h3><br>
                     <p>Our astonishing style structure makes your customization process a breeze</p>
                  </div>
               </div>
               <br>
               <div class="row  different">
                  <div class="col features-img">
                     <img src="assets/images/pencil.png" alt="">
                  </div>
                  <div class="col-4">
                     <h3 class="dark">Powerful Design</h3><br>
                     <p>With ready-to-use content you'll deploy your implementation in no time</p>
                  </div>
               </div>
               <br>
               <div class="row different">
                  <div class="col features-img">
                     <img src="assets/images/group.png" alt="">
                  </div>
                  <div class="col-4">
                     <h3 class="dark">Creative Content</h3><br>
                     <p>Repetitive styles all across the web? Nevermind that! Shine with unique styles</p>
                  </div>
               </div>
            </div>
            <div class="col-1 picture">
               <img src="assets/images/mockup.png" class="powerful-img">
               <img src="assets/images/pattern-bg.png" alt="pattern" class="pattern-img-power">
            </div>
         </div>
      </div>
      <div class="row m-10 gap-9 costumer-section">
         <div class="col-1">
            <button class="speciale-1">EXPLORE NEW PLACES</button>
            <h2 class="costumer-header">What our costumer says</h2>
         </div>
         <div class="col-1 info">
            <h4>Design Quality</h4><br>
            <p>The template is really nice and offers quite a large set of options. It’s beautiful and the coding is
               done quickly and seamlessly. Thank you!
            </p><br>
            <h4>Devon Lane</h4>
            <p>Team Leader, Paypal</p>
         </div>
         <div class="col-1 info">
            <h4>Design Quality</h4><br>
            <p>The template is really nice and offers quite a large set of options. It’s beautiful and the coding is
               done quickly and seamlessly. Thank you!
            </p><br>
            <h4>Theresa Webb</h4>
            <p>Softwer Tester, Envato</p>
         </div>
      </div>
      <div class="row m-5  row-phone row-tablet">
         <div class="arrows">
            <span class="material-symbols-outlined arrow west">west</span>
            <span class="material-symbols-outlined arrow east">east</span>
         </div>
      </div>
      <div class="row metrics">
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
      <div class="row p-2">
         <div class="app-screnshot m-5 p-8">
            <div class="col text-center">
               <button class="speciale-1 appsc">EXPLORE NEW PLACES</button><br>
               <h1 class="display-3">App ScreenShot</h1>
               <br>
            </div>
            <div class="col-1 apps">
               <img src="assets/images/market.png" alt="" class="screen market">
               <img src="assets/images/protofolio.png" alt="" class="screen pro">
               <img src="assets/images/trading.png" alt="" class="screen trading">
            </div>
            <div class="bullet-container">
               <div class="bullet"></div>
               <div class="bullet"></div>
               <div class="bullet"></div>
               <div class="bullet"></div>
               <div class="bullet"></div>
            </div>
         </div>
      </div>
      <div class="simple-pricing m-1 p-1">
         <div class="col-1 text-center">
            <button class="speciale-1 plans">PLANS</button><br>
            <h1 class="display-1">Simple Pricing</h1>
         </div>
         <div class="col text-center m-5">
            <span class="modify">Modify</span>
            <label class="switch-container mx-2">
               <input type="checkbox">
               <span class="slider round"></span>
            </label>
            <span>Annually Save 30%</span>
         </div><br>
         <div class="row gap-3">
            <div class="col-4 basic">
               <button class="pro-btn ">Most Popular</button><br>
               <div class="basic-info">
                  <p>Basic</p>
                  <h2>Free</h2>
                  <p class="mini">per month</p>
                  <br>
               </div>
               <p class="pricing-paragraf">Standard listing submission, active for <br> 30 days</p>
               <ul class="custom-list">
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">All Operating Supported</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Great Interface</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Allows encryption</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Face recognized system</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">24/7 Full support</span>
                  </li>
               </ul>
               <button class="basic-btn">GET STARTED</button><br>
            </div>
            <div class="col-4 proffesional">
               <div class="basic-info">
                  <button class="pro-btn ">Most Popular</button><br>
                  <p>Professional</p>
                  <h2>$599.95</h2>
                  <p class="mini">per month</p>
                  <br>
               </div>
               <p class="pricing-paragraf">Standard listing submission, active for <br> 30 days</p>
               <ul class="custom-list">
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">All Operating Supported</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Great Interface</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Allows encryption</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Face recognized system</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">24/7 Full support</span>
                  </li>
               </ul>
               <button class="basic-btn-pro">GET STARTED</button><br>
            </div>
            <div class="col-4 bussines">
               <button class="pro-btn ">Most Popular</button><br>
               <div class="basic-info">
                  <p>Bussines</p>
                  <h2>$999.95</h2>
                  <p class="mini">per month</p>
                  <br>
               </div>
               <p class="pricing-paragraf">Standard listing submission, active for <br> 30 days</p>
               <ul class="custom-list">
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">All Operating Supported</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Great Interface</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Allows encryption</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">Face recognized system</span>
                  </li>
                  <li>
                     <div class="icon-container-custom done">
                        <span class="material-symbols-outlined check-small">check_small</span>
                     </div>
                     <span class="text">24/7 Full support</span>
                  </li>
               </ul>
               <button class="basic-btn text-left">GET STARTED</button><br>
            </div>
         </div>
      </div>
      <div class="row faq-section m-10 gap-9">
         <div class="col-1">
            <button class="speciale-1">GET HELP (HELP CENTER)</button>
            <h2 class="faq">Frequently asked questions.</h2>
         </div>
         <div class="col-1">
            <div class="faq-item">
               <span class="material-symbols-outlined">remove</span>
               <span class="dark">What does the package include?</span>
            </div>
            <div class="faq-item-content">
               <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for
                  styling, complete JS files with comments, all HTML variations. Besides, we include all mobile
                  PSD
                  mockups.
               </p>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">How does the 14-day trial work?</span>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">How do I pay for your service?</span>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">Can I suggest a new feature?</span>
            </div>
         </div>
      </div>
      <div class="row down-app">
         <div class="col-1 text-left p-5 m-5">
            <button class="btn-primary speciale-1">START TODAY</button>
            <h1 class="display-4">Download the App</h1>
            <p class="paragraf-app">New features. New appearance. No risk and credit card required.</p>
            <!-- <div class="img-fixed">
               <img src="images/app_btn.png" alt="apple" class="apple">
            </div> -->
            <div class="buttons">
               <div class="button-container">
                  <img class="button-image" src="assets/images/icone_apple.png" alt="Apple Image">
                  <span class="seperator"></span>
                  <div class="button-text">
                     <span class="button-download">Download on the</span>
                     <span class="bold-text">Apple Store</span>
                  </div>
               </div>
               <div class="button-container">
                  <img class="button-image" src="assets/images/icone_android.png" alt="Apple Image">
                  <span class="seperator"></span>
                  <div class="button-text">
                     <span class="button-download">Get it on</span>
                     <span class="bold-text">Google Play</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-1">
            <img src="assets/images/two-phones-bg.png" class="img-end">
         </div>
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
      <div class="scroll-to-top">
         <a href="index.html#top"><span class="material-symbols-outlined arrow-upward">arrow_upward</span></a>
      </div>
   </div>
</body>

</html>*/
}
