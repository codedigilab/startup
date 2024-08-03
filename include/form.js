document.write(`

<!--==============================
Contact Area   
==============================-->
    <div class="overflow-hidden space-bo ttom mt-5">
        <div class="shape-mockup moving d-none d-xxl-block" data-bottom="0%" data-right="0%"><img
                src="assets/img/shape/man_shape_1.png" alt="shape"></div>
        <div class="container">
            <div class="contact-area">
                <div class="row">
                    <div class="col-xl-5 mb-35 mb-xl-0">
                        <div class="contact-media-area">
                            <div class="contact-media-wrap">
                                <h3 class="box-title">Our Location</h3>
                                <div class="contact-media">
                                    <div class="icon-btn">
                                        <i class="fas fa-location-dot"></i>
                                    </div>
                                    <div class="media-body">
                                        <p class="box-text">
                                            <script type="text/javascript"> document.write(address) </script>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-media-wrap">
                                <h3 class="box-title">Quick Contact</h3>
                                <div class="contact-media">
                                    <div class="icon-btn">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="box-label">Call Us:</h4>
                                        <p class="box-text"><a href="tel:+917361040504">+91-
                                                <script type="text/javascript"> document.write(number1) </script>
                                            </a></p>
                                    </div>
                                </div>
                                <div class="contact-media">
                                    <div class="icon-btn">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="box-label">Email Us:</h4>
                                        <p class="box-text"><a href="mailto:c4codedigilab@gmail.com">
                                                <script type="text/javascript"> document.write(email) </script>
                                            </a></p>
                                    </div>
                                </div>
                            </div>
                            <h6 class="contact-info-text">We will get back to you within 24 hours, or Call us everyday,
                                09:00AM - 06:00PM</h6>
                        </div>
                    </div>
                    <div class="col-xl-7 text-center text-xl-start">
                        <div class="ps-xxl-4 ms-xl-3">
                            <div class="title-area">
                                <span class="sub-title"><img src="assets/img/theme-img/title_icon.svg" alt="shape">Book
                                    an appointment</span>
                                <h2 class="sec-title">Request a quote</h2>
                            </div>
                            <form action="mail.php" method="POST" class="contact-form2 ajax-contact">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" name="name" id="name"
                                            placeholder="Your Name">
                                        <i class="fal fa-user"></i>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" class="form-control" name="email" id="email"
                                            placeholder="Email Address">
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="tel" class="form-control" name="number" id="number"
                                            placeholder="Phone Number">
                                        <i class="fal fa-phone"></i>
                                    </div>
                                    
                                    <div class="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3" class="form-control"
                                            placeholder="Your Message"></textarea>
                                        <i class="fal fa-pencil"></i>
                                    </div>
                                    <div class="form-btn col-12">
                                        <button class="th-btn2 style4">Submit Request<i
                                                class="far fa-arrow-right"></i></button>
                                    </div>
                                </div>
                                <p class="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--==============================
Gallery Area  
==============================-->

`);