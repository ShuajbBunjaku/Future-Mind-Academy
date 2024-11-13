import Header from "../Components/Header";
import Nav from "../Components/Nav";

export default function About() {
  return (
    <>
      <div className="container-fixed">
        <Nav />
        <Header
          title="Abouts us"
          desc="With we want to optimize the customization process so your team 
        save time when building websites."
        />
      </div>
    </>
  );
}

/*<body>

      <div class="wrapper-md text-center">
         <div class="row">
            <div class="col-1 company-section about">
               <button class="speciale btn-classic">ABOUT COMPANY</button>
               <h1 class="display-1 company-info title">All services for your online presence</h1>
               <p class="company-info">
                  Since 2017, we have led innovation and new product delivery <br> in
                  business startup services delivered online.
               </p>
               <div class="row">
                  <div class="col-5 m-1">
                     <div class="back-pink p-1">
                        <img src="assets/images/sketch.png" alt="sketch">
                     </div>
                  </div>
                  <div class="col-5 missions">
                     <h3 class="dark">Our Mission</h3>
                     <p class="company-paragraf">We have all the business products in one place so <br> you can focus on
                        what you do best.</p>
                  </div>
               </div><br>
               <div class="row">
                  <div class="col-5 m-1">
                     <div class="back-blue p-1">
                        <img src="assets/images/color.png" alt="sketch">
                     </div>
                  </div>
                  <div class="col-5 missions">
                     <h3 class="dark">Our Vission</h3>
                     <p class="company-paragraf">We have all the business products in one place so <br> you can focus on
                        what you do best.</p>
                  </div>
               </div>
            </div>
            <div class="col-5">
               <img src="assets/images/double.png" alt="images of missions" class="img-missions">
            </div>
         </div>
      </div>

      <div class="wrapper-md metrics-section about">
         <div class="row metrics m-3">
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
      </div>
      <div class="wrapper-xl development-section about">
         <button class="speciale-1 head-tag">WHAT WE DO</button>
         <h1 class="text-center">We develop & create digital future.</h1><br>
         <div class="secure-section">
            <div class="row all-shadow development-info">
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
            <div class="row all-shadow development-info">
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
            <div class="row all-shadow development-info">
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
            <div class="row all-shadow development-info">
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
      </div>
      <div class="wrapper-md about-costumer">
         <div class="row m-10 gap-9 costumer-section about">
            <div class="col-1 inside">
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
         <div class="row m-5">
            <div class="arrows about">
               <span class="material-symbols-outlined arrow west">west</span>
               <span class="material-symbols-outlined arrow east">east</span>
            </div>
         </div>
      </div>
      <div class="wrapper-lg creative">
         <button class="speciale-1 team-tag">TEAM</button>
         <h1 class="creative-header">We develop & create digital future.</h1><br>
         <div class="row middle">
            <div class="creative-section">
               <div class=" persons-info">
                  <div class="persons-img">
                     <img src="assets/images/person.png">
                  </div>
                  <div class="person-details">
                     <p class="dark">Albert Flores</p>
                     <p>President of Sales</p>
                  </div>
               </div>
               <div class=" persons-info">
                  <div class="persons-img">
                     <img src="assets/images/person.png">
                  </div>
                  <div class="person-details">
                     <p class="dark">Albert Flores</p>
                     <p>President of Sales</p>
                  </div>
               </div>
               <div class=" persons-info">
                  <div class="persons-img">
                     <img src="assets/images/person.png">
                  </div>
                  <div class="person-details">
                     <p class="dark">Albert Flores</p>
                     <p>President of Sales</p>
                  </div>
               </div>
               <div class=" persons-info">
                  <div class="persons-img">
                     <img src="assets/images/person.png">
                  </div>
                  <div class="person-details">
                     <p class="dark">Albert Flores</p>
                     <p>President of Sales</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="bullet-container">
            <div class="bullet"></div>
            <div class="bullet"></div>
            <div class="bullet"></div>
            <div class="bullet"></div>
            <div class="bullet"></div>
         </div>
      </div>
      <div class="wrapper-lg brands-section about">
         <button class="speciale-1 team-tag">PARTNERS</button>
         <h1 class="creative-header">We work with the best brands</h1><br>
         <div class="row brands">
            <div class="col-end m-5">
               <img src="assets/images/amazon.png">
            </div>
            <div class="col-end m-5">
               <img src="assets/images/amd.png">
            </div>
            <div class="col-end m-5">
               <img src="assets/images/cisco.png">
            </div>
            <div class="col-end m-5">
               <img src="assets/images/dropcam.png">
            </div>
            <div class="col-end m-5">
               <img src="assets/images/logitech.png">
            </div>
            <div class="col-end m-5">
               <img src="assets/images/spotify.png">
            </div>
         </div>
      </div>
      <div class="wrapper-lg">
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

   </div>
</body>

</html>
*/
