<>
  <title>Home 02</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/*===============================================================================================*/}
  <link rel="icon" type="image/png" href="images/icons/favicon.png" />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/bootstrap/css/bootstrap.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/iconic/css/material-design-iconic-font.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/linearicons-v1.0.0/icon-font.min.css"
  />
  {/*===============================================================================================*/}
  <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/css-hamburgers/hamburgers.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/animsition/css/animsition.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/select2/select2.min.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/daterangepicker/daterangepicker.css"
  />
  {/*===============================================================================================*/}
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/MagnificPopup/magnific-popup.css"
  />
  {/*===============================================================================================*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="vendor/perfect-scrollbar/perfect-scrollbar.css"
  />
  {/*===============================================================================================*/}
  <link rel="stylesheet" type="text/css" href="css/util.css" />
  <link rel="stylesheet" type="text/css" href="css/main.css" />
  {/*===============================================================================================*/}
  {/* Header */}
  <header className="header-v2">
    {/* Header desktop */}
    <div className="container-menu-desktop trans-03">
      <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop p-l-45">
          {/* Logo desktop */}
          <a href="#" className="logo">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li className="active-menu">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Homepage 1</a>
                  </li>
                  <li>
                    <a href="home-02.html">Homepage 2</a>
                  </li>
                  <li>
                    <a href="home-03.html">Homepage 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="product.html">Shop</a>
              </li>
              <li className="label1" data-label1="hot">
                <a href="shoping-cart.html">Features</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m h-full">
            <div className="flex-c-m h-full p-r-24">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                <i className="zmdi zmdi-search" />
              </div>
            </div>
            <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                data-notify={2}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
            </div>
            <div className="flex-c-m h-full p-lr-19">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                <i className="zmdi zmdi-menu" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* Header Mobile */}
    <div className="wrap-header-mobile">
      {/* Logo moblie */}
      <div className="logo-mobile">
        <a href="index.html">
          <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
        </a>
      </div>
      {/* Icon header */}
      <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
        <div className="flex-c-m h-full p-r-10">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
            <i className="zmdi zmdi-search" />
          </div>
        </div>
        <div className="flex-c-m h-full p-lr-10 bor5">
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
            data-notify={2}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
        </div>
      </div>
      {/* Button show menu */}
      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
    {/* Menu Mobile */}
    <div className="menu-mobile">
      <ul className="main-menu-m">
        <li>
          <a href="index.html">Home</a>
          <ul className="sub-menu-m">
            <li>
              <a href="index.html">Homepage 1</a>
            </li>
            <li>
              <a href="home-02.html">Homepage 2</a>
            </li>
            <li>
              <a href="home-03.html">Homepage 3</a>
            </li>
          </ul>
          <span className="arrow-main-menu-m">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
        </li>
        <li>
          <a href="product.html">Shop</a>
        </li>
        <li>
          <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">
            Features
          </a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
    {/* Modal Search */}
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>
        <form className="wrap-search-header flex-w p-l-15">
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search" />
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  </header>
  {/* Sidebar */}
  <aside className="wrap-sidebar js-sidebar">
    <div className="s-full js-hide-sidebar" />
    <div className="sidebar flex-col-l p-t-22 p-b-25">
      <div className="flex-r w-full p-b-30 p-r-27">
        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar">
          <i className="zmdi zmdi-close" />
        </div>
      </div>
      <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
        <ul className="sidebar-link w-full">
          <li className="p-b-13">
            <a href="index.html" className="stext-102 cl2 hov-cl1 trans-04">
              Home
            </a>
          </li>
          <li className="p-b-13">
            <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
              My Wishlist
            </a>
          </li>
          <li className="p-b-13">
            <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
              My Account
            </a>
          </li>
          <li className="p-b-13">
            <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
              Track Oder
            </a>
          </li>
          <li className="p-b-13">
            <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
              Refunds
            </a>
          </li>
          <li className="p-b-13">
            <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
              Help &amp; FAQs
            </a>
          </li>
        </ul>
        <div className="sidebar-gallery w-full p-tb-30">
          <span className="mtext-101 cl5">@ CozaStore</span>
          <div className="flex-w flex-sb p-t-36 gallery-lb">
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-01.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-01.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-02.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-02.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-03.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-03.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-04.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-04.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-05.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-05.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-06.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-06.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-07.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-07.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-08.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-08.jpg")' }}
              />
            </div>
            {/* item gallery sidebar */}
            <div className="wrap-item-gallery m-b-10">
              <a
                className="item-gallery bg-img1"
                href="images/gallery-09.jpg"
                data-lightbox="gallery"
                style={{ backgroundImage: 'url("images/gallery-09.jpg")' }}
              />
            </div>
          </div>
        </div>
        <div className="sidebar-gallery w-full">
          <span className="mtext-101 cl5">About Us</span>
          <p className="stext-108 cl6 p-t-27">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            maximus vulputate hendrerit. Praesent faucibus erat vitae rutrum
            gravida. Vestibulum tempus mi enim, in molestie sem fermentum quis.
          </p>
        </div>
      </div>
    </div>
  </aside>
  {/* Cart */}
  <div className="wrap-header-cart js-panel-cart">
    <div className="s-full js-hide-cart" />
    <div className="header-cart flex-col-l p-l-65 p-r-25">
      <div className="header-cart-title flex-w flex-sb-m p-b-8">
        <span className="mtext-103 cl2">Your Cart</span>
        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
          <i className="zmdi zmdi-close" />
        </div>
      </div>
      <div className="header-cart-content flex-w js-pscroll">
        <ul className="header-cart-wrapitem w-full">
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-01.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a
                href="#"
                className="header-cart-item-name m-b-18 hov-cl1 trans-04"
              >
                White Shirt Pleat
              </a>
              <span className="header-cart-item-info">1 x $19.00</span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-02.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a
                href="#"
                className="header-cart-item-name m-b-18 hov-cl1 trans-04"
              >
                Converse All Star
              </a>
              <span className="header-cart-item-info">1 x $39.00</span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-03.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a
                href="#"
                className="header-cart-item-name m-b-18 hov-cl1 trans-04"
              >
                Nixon Porter Leather
              </a>
              <span className="header-cart-item-info">1 x $17.00</span>
            </div>
          </li>
        </ul>
        <div className="w-full">
          <div className="header-cart-total w-full p-tb-40">Total: $75.00</div>
          <div className="header-cart-buttons flex-w w-full">
            <a
              href="shoping-cart.html"
              className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
            >
              View Cart
            </a>
            <a
              href="shoping-cart.html"
              className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
            >
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Slider */}
  <section className="section-slide">
    <div className="wrap-slick1 rs1-slick1">
      <div className="slick1">
        <div
          className="item-slick1"
          style={{ backgroundImage: "url(images/slide-03.jpg)" }}
        >
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30">
              <div
                className="layer-slick1 animated visible-false"
                data-appear="fadeInDown"
                data-delay={0}
              >
                <span className="ltext-202 cl2 respon2">
                  Men Collection 2018
                </span>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="fadeInUp"
                data-delay={800}
              >
                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                  New arrivals
                </h2>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="zoomIn"
                data-delay={1600}
              >
                <a
                  href="product.html"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item-slick1"
          style={{ backgroundImage: "url(images/slide-02.jpg)" }}
        >
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30">
              <div
                className="layer-slick1 animated visible-false"
                data-appear="rollIn"
                data-delay={0}
              >
                <span className="ltext-202 cl2 respon2">Men New-Season</span>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="lightSpeedIn"
                data-delay={800}
              >
                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                  Jackets &amp; Coats
                </h2>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="slideInUp"
                data-delay={1600}
              >
                <a
                  href="product.html"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item-slick1"
          style={{ backgroundImage: "url(images/slide-04.jpg)" }}
        >
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30">
              <div
                className="layer-slick1 animated visible-false"
                data-appear="rotateInDownLeft"
                data-delay={0}
              >
                <span className="ltext-202 cl2 respon2">
                  Women Collection 2018
                </span>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="rotateInUpRight"
                data-delay={800}
              >
                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                  NEW SEASON
                </h2>
              </div>
              <div
                className="layer-slick1 animated visible-false"
                data-appear="rotateIn"
                data-delay={1600}
              >
                <a
                  href="product.html"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner */}
  <div className="sec-banner bg0">
    <div className="flex-w flex-c-m">
      <div className="size-202 m-lr-auto respon4">
        {/* Block1 */}
        <div className="block1 wrap-pic-w">
          <img src="images/banner-04.jpg" alt="IMG-BANNER" />
          <a
            href="product.html"
            className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
          >
            <div className="block1-txt-child1 flex-col-l">
              <span className="block1-name ltext-102 trans-04 p-b-8">
                Women
              </span>
              <span className="block1-info stext-102 trans-04">
                Spring 2018
              </span>
            </div>
            <div className="block1-txt-child2 p-b-4 trans-05">
              <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
            </div>
          </a>
        </div>
      </div>
      <div className="size-202 m-lr-auto respon4">
        {/* Block1 */}
        <div className="block1 wrap-pic-w">
          <img src="images/banner-05.jpg" alt="IMG-BANNER" />
          <a
            href="product.html"
            className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
          >
            <div className="block1-txt-child1 flex-col-l">
              <span className="block1-name ltext-102 trans-04 p-b-8">Men</span>
              <span className="block1-info stext-102 trans-04">
                Spring 2018
              </span>
            </div>
            <div className="block1-txt-child2 p-b-4 trans-05">
              <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
            </div>
          </a>
        </div>
      </div>
      <div className="size-202 m-lr-auto respon4">
        {/* Block1 */}
        <div className="block1 wrap-pic-w">
          <img src="images/banner-06.jpg" alt="IMG-BANNER" />
          <a
            href="product.html"
            className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
          >
            <div className="block1-txt-child1 flex-col-l">
              <span className="block1-name ltext-102 trans-04 p-b-8">Bags</span>
              <span className="block1-info stext-102 trans-04">New Trend</span>
            </div>
            <div className="block1-txt-child2 p-b-4 trans-05">
              <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Product */}
  <section className="sec-product bg0 p-t-100 p-b-50">
    <div className="container">
      <div className="p-b-32">
        <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
      </div>
      {/* Tab01 */}
      <div className="tab01">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item p-b-10">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#best-seller"
              role="tab"
            >
              Best Seller
            </a>
          </li>
          <li className="nav-item p-b-10">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#featured"
              role="tab"
            >
              Featured
            </a>
          </li>
          <li className="nav-item p-b-10">
            <a className="nav-link" data-toggle="tab" href="#sale" role="tab">
              Sale
            </a>
          </li>
          <li className="nav-item p-b-10">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#top-rate"
              role="tab"
            >
              Top Rate
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content p-t-50">
          {/* - */}
          <div
            className="tab-pane fade show active"
            id="best-seller"
            role="tabpanel"
          >
            {/* Slide2 */}
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-01.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Esprit Ruffle Shirt
                        </a>
                        <span className="stext-105 cl3">$16.64</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-02.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$35.31</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-03.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Only Check Trouser
                        </a>
                        <span className="stext-105 cl3">$25.50</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-04.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Classic Trench Coat
                        </a>
                        <span className="stext-105 cl3">$75.00</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-05.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Front Pocket Jumper
                        </a>
                        <span className="stext-105 cl3">$34.75</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-06.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Vintage Inspired Classic
                        </a>
                        <span className="stext-105 cl3">$93.20</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-07.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Shirt in Stretch Cotton
                        </a>
                        <span className="stext-105 cl3">$52.66</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-08.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Pieces Metallic Printed
                        </a>
                        <span className="stext-105 cl3">$18.96</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="tab-pane fade" id="featured" role="tabpanel">
            {/* Slide2 */}
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-09.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Converse All Star Hi Plimsolls
                        </a>
                        <span className="stext-105 cl3">$75.00</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-10.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Femme T-Shirt In Stripe
                        </a>
                        <span className="stext-105 cl3">$25.85</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-11.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$63.16</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-12.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$63.15</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-13.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          T-Shirt with Sleeve
                        </a>
                        <span className="stext-105 cl3">$18.49</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-14.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Pretty Little Thing
                        </a>
                        <span className="stext-105 cl3">$54.79</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-15.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Mini Silver Mesh Watch
                        </a>
                        <span className="stext-105 cl3">$86.85</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-16.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Square Neck Back
                        </a>
                        <span className="stext-105 cl3">$29.64</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="tab-pane fade" id="sale" role="tabpanel">
            {/* Slide2 */}
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-02.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$35.31</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-04.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Classic Trench Coat
                        </a>
                        <span className="stext-105 cl3">$75.00</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-06.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Vintage Inspired Classic
                        </a>
                        <span className="stext-105 cl3">$93.20</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-09.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Converse All Star Hi Plimsolls
                        </a>
                        <span className="stext-105 cl3">$75.00</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-11.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$63.16</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-13.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          T-Shirt with Sleeve
                        </a>
                        <span className="stext-105 cl3">$18.49</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-15.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Mini Silver Mesh Watch
                        </a>
                        <span className="stext-105 cl3">$86.85</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="tab-pane fade" id="top-rate" role="tabpanel">
            {/* Slide2 */}
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-03.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Only Check Trouser
                        </a>
                        <span className="stext-105 cl3">$25.50</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-06.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Vintage Inspired Classic
                        </a>
                        <span className="stext-105 cl3">$93.20</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-07.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Shirt in Stretch Cotton
                        </a>
                        <span className="stext-105 cl3">$52.66</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-08.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Pieces Metallic Printed
                        </a>
                        <span className="stext-105 cl3">$18.96</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-09.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Converse All Star Hi Plimsolls
                        </a>
                        <span className="stext-105 cl3">$75.00</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-10.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Femme T-Shirt In Stripe
                        </a>
                        <span className="stext-105 cl3">$25.85</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-11.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$63.16</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-12.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Herschel supply
                        </a>
                        <span className="stext-105 cl3">$63.15</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-13.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          T-Shirt with Sleeve
                        </a>
                        <span className="stext-105 cl3">$18.49</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src="images/product-16.jpg" alt="IMG-PRODUCT" />
                      <a
                        href="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        Quick View
                      </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          Square Neck Back
                        </a>
                        <span className="stext-105 cl3">$29.64</span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a
                          href="#"
                          className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                        >
                          <img
                            className="icon-heart1 dis-block trans-04"
                            src="images/icons/icon-heart-01.png"
                            alt="ICON"
                          />
                          <img
                            className="icon-heart2 dis-block trans-04 ab-t-l"
                            src="images/icons/icon-heart-02.png"
                            alt="ICON"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog */}
  <section className="sec-blog bg0 p-t-60 p-b-90">
    <div className="container">
      <div className="p-b-66">
        <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 p-b-40">
          <div className="blog-item">
            <div className="hov-img0">
              <a href="blog-detail.html">
                <img src="images/blog-01.jpg" alt="IMG-BLOG" />
              </a>
            </div>
            <div className="p-t-15">
              <div className="stext-107 flex-w p-b-14">
                <span className="m-r-3">
                  <span className="cl4">By</span>
                  <span className="cl5">Nancy Ward</span>
                </span>
                <span>
                  <span className="cl4">on</span>
                  <span className="cl5">July 22, 2017</span>
                </span>
              </div>
              <h4 className="p-b-12">
                <a
                  href="blog-detail.html"
                  className="mtext-101 cl2 hov-cl1 trans-04"
                >
                  8 Inspiring Ways to Wear Dresses in the Winter
                </a>
              </h4>
              <p className="stext-108 cl6">
                Duis ut velit gravida nibh bibendum commodo. Suspendisse
                pellentesque mattis augue id euismod. Interdum et male-suada
                fames
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 p-b-40">
          <div className="blog-item">
            <div className="hov-img0">
              <a href="blog-detail.html">
                <img src="images/blog-02.jpg" alt="IMG-BLOG" />
              </a>
            </div>
            <div className="p-t-15">
              <div className="stext-107 flex-w p-b-14">
                <span className="m-r-3">
                  <span className="cl4">By</span>
                  <span className="cl5">Nancy Ward</span>
                </span>
                <span>
                  <span className="cl4">on</span>
                  <span className="cl5">July 18, 2017</span>
                </span>
              </div>
              <h4 className="p-b-12">
                <a
                  href="blog-detail.html"
                  className="mtext-101 cl2 hov-cl1 trans-04"
                >
                  The Great Big List of Men’s Gifts for the Holidays
                </a>
              </h4>
              <p className="stext-108 cl6">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit ame
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 p-b-40">
          <div className="blog-item">
            <div className="hov-img0">
              <a href="blog-detail.html">
                <img src="images/blog-03.jpg" alt="IMG-BLOG" />
              </a>
            </div>
            <div className="p-t-15">
              <div className="stext-107 flex-w p-b-14">
                <span className="m-r-3">
                  <span className="cl4">By</span>
                  <span className="cl5">Nancy Ward</span>
                </span>
                <span>
                  <span className="cl4">on</span>
                  <span className="cl5">July 2, 2017</span>
                </span>
              </div>
              <h4 className="p-b-12">
                <a
                  href="blog-detail.html"
                  className="mtext-101 cl2 hov-cl1 trans-04"
                >
                  5 Winter-to-Spring Fashion Trends to Try Now
                </a>
              </h4>
              <p className="stext-108 cl6">
                Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel
                erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet
                maximus nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg3 p-t-75 p-b-32">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">Categories</h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Women
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Men
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Shoes
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Watches
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">Help</h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Track Order
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Returns
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Shipping
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
          <p className="stext-107 cl7 size-201">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="p-t-27">
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-instagram" />
            </a>
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
          <form>
            <div className="wrap-input1 w-full p-b-4">
              <input
                className="input1 bg-none plh1 stext-107 cl7"
                type="text"
                name="email"
                placeholder="email@example.com"
              />
              <div className="focus-input1 trans-04" />
            </div>
            <div className="p-t-18">
              <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-t-40">
        <div className="flex-c-m flex-w p-b-18">
          <a href="#" className="m-all-1">
            <img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
          </a>
        </div>
        <p className="stext-107 cl6 txt-center">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | Made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>{" "}
          &amp; distributed by{" "}
          <a href="https://themewagon.com" target="_blank">
            ThemeWagon
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </footer>
  {/* Back to top */}
  <div className="btn-back-to-top" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="zmdi zmdi-chevron-up" />
    </span>
  </div>
  {/* Modal1 */}
  <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
    <div className="overlay-modal1 js-hide-modal1" />
    <div className="container">
      <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
        <button className="how-pos3 hov3 trans-04 js-hide-modal1">
          <img src="images/icons/icon-close.png" alt="CLOSE" />
        </button>
        <div className="row">
          <div className="col-md-6 col-lg-7 p-b-30">
            <div className="p-l-25 p-r-30 p-lr-0-lg">
              <div className="wrap-slick3 flex-sb flex-w">
                <div className="wrap-slick3-dots" />
                <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                <div className="slick3 gallery-lb">
                  <div
                    className="item-slick3"
                    data-thumb="images/product-detail-01.jpg"
                  >
                    <div className="wrap-pic-w pos-relative">
                      <img
                        src="images/product-detail-01.jpg"
                        alt="IMG-PRODUCT"
                      />
                      <a
                        className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                        href="images/product-detail-01.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="item-slick3"
                    data-thumb="images/product-detail-02.jpg"
                  >
                    <div className="wrap-pic-w pos-relative">
                      <img
                        src="images/product-detail-02.jpg"
                        alt="IMG-PRODUCT"
                      />
                      <a
                        className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                        href="images/product-detail-02.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="item-slick3"
                    data-thumb="images/product-detail-03.jpg"
                  >
                    <div className="wrap-pic-w pos-relative">
                      <img
                        src="images/product-detail-03.jpg"
                        alt="IMG-PRODUCT"
                      />
                      <a
                        className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                        href="images/product-detail-03.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 p-b-30">
            <div className="p-r-50 p-t-5 p-lr-0-lg">
              <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                Lightweight Jacket
              </h4>
              <span className="mtext-106 cl2">$58.79</span>
              <p className="stext-102 cl3 p-t-23">
                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                ligula. Mauris consequat ornare feugiat.
              </p>
              {/*  */}
              <div className="p-t-33">
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-203 flex-c-m respon6">Size</div>
                  <div className="size-204 respon6-next">
                    <div className="rs1-select2 bor8 bg0">
                      <select className="js-select2" name="time">
                        <option>Choose an option</option>
                        <option>Size S</option>
                        <option>Size M</option>
                        <option>Size L</option>
                        <option>Size XL</option>
                      </select>
                      <div className="dropDownSelect2" />
                    </div>
                  </div>
                </div>
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-203 flex-c-m respon6">Color</div>
                  <div className="size-204 respon6-next">
                    <div className="rs1-select2 bor8 bg0">
                      <select className="js-select2" name="time">
                        <option>Choose an option</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>White</option>
                        <option>Grey</option>
                      </select>
                      <div className="dropDownSelect2" />
                    </div>
                  </div>
                </div>
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-204 flex-w flex-m respon6-next">
                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                      <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-minus" />
                      </div>
                      <input
                        className="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product"
                        defaultValue={1}
                      />
                      <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-plus" />
                      </div>
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                <div className="flex-m bor9 p-r-10 m-r-11">
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                    data-tooltip="Add to Wishlist"
                  >
                    <i className="zmdi zmdi-favorite" />
                  </a>
                </div>
                <a
                  href="#"
                  className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                  data-tooltip="Facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="#"
                  className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                  data-tooltip="Twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="#"
                  className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                  data-tooltip="Google Plus"
                >
                  <i className="fa fa-google-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
</>
