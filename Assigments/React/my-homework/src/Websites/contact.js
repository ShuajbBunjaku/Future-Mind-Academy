import Nav from "../Components/Nav";
import Header from "../Components/Header";

export default function Contact() {
  return (
    <>
      <div className="container-fixed">
        <Nav />
        <Header
          title="Contact us"
          desc="With we want to optimize the customization process so your team can save time<br when building
                        websites."
        />
      </div>
    </>
  );
}

/*<body>
    <div class="container-fixed wrapper-full  contact-page">
        <div class="contact-us">

            <div class="wrapper-lg text-center hero-contact">
                <div class="contact-section">
                    <img src="assets/images/bg.png" alt="Background Image" class="bg-img contact" />
                    <h1 class="dark contact">Contact us</h1>
                    <br />
                    <p class="contact-text">
                        With we want to optimize the customization process so your team can save time<br> when building
                        websites.
                    </p>
                </div>
            </div>
            <div class="contact wrapper-md">
                <div class="row contact-intro text-center">
                    <div class="col-1 contact-info">
                        <h3>London</h3>
                        <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        <p class="dark">+(1) 123 456 7890</p>
                        <p>hi@sassio.com</p>
                        <a href="">
                            <p>Open Google Map</p>
                        </a>
                    </div>
                    <div class="divider"></div>
                    <div class="col-1 contact-info">
                        <h3>New York</h3>
                        <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        <p class="dark"> +(1) 123 456 7890</p>
                        <p>hi@sassio.com</p>
                        <a href="">
                            <p>Open Google Map</p>
                        </a>
                    </div>
                    <div class="divider"></div>
                    <div class="col-1 contact-info">
                        <h3>Istanbul</h3>
                        <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        <p class="dark">+(1) 123 456 7890</p>
                        <p>hi@sassio.com</p>
                        <a href="">
                            <p>Open Google Map</p>
                        </a>
                    </div>
                </div>
                <div class="contact-form">
                    <div class="text-contact text-center">
                        <button class="speciale contact-us">Message</button>
                        <h1 class="dark">Tell us about yourself</h1>
                    </div>
                    <div class="container">
                        <form action="#">
                            <div class="form-row">
                                <div class="input-data">
                                    <input type="text" required>
                                    <div class="underline"></div>
                                    <label for="">Full Name</label>
                                </div>
                                <div class="input-data">
                                    <input type="text" required>
                                    <div class="underline"></div>
                                    <label for="">Your Email Adress</label>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="input-data">
                                    <input type="text" required>
                                    <div class="underline"></div>
                                    <label for="">Your Subject</label>
                                </div>
                                <div class="input-data">
                                    <input type="text" required>
                                    <div class="underline"></div>
                                    <label for="">Phone Number</label>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="input-data textarea">
                                    <textarea rows="20" cols="180" required></textarea>
                                    <br />
                                    <div class="underline"></div>
                                    <label for="">Message</label>
                                    <br />
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="input-check">
                                    <input type="checkbox" name="" id="">
                                    <label>I am bound by the terms of the Service I accept Privacy Policy.</label>
                                </div>
                                <button class="pro-btn contact-us">Send your message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 map-pic">
                        <iframe class="iframe-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.16392808568!2d21.11752767997125!3d42.66643583189325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1711409851264!5m2!1sen!2s"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="row end">
                    <div class="col-1 text-center">
                        <img src="assets/images/contact-llpt-pic.png">
                        <h3 class="dark">Sales Suport</h3>
                        <p>
                            Looking for a custom quote? need to tell us more about your project? or want a
                            demonstration?
                            drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                        </p>
                    </div>
                    <div class="divider"></div>
                    <div class="col-1 text-center">
                        <img src="assets/images/contact-technical-pic.png">
                        <h3 class="dark">Technical Support</h3>
                        <p>
                            Looking for a custom quote? need to tell us more about your project? or want a
                            demonstration?
                            drop us a line to <a href="contact@sassio.com">contact@sassio.com</a>
                        </p>
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
            </div>
        </div>
    </div>*/
