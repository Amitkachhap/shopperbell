<>
  <title>Blog</title>
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
    href="vendor/perfect-scrollbar/perfect-scrollbar.css"
  />
  {/*===============================================================================================*/}
  <link rel="stylesheet" type="text/css" href="css/util.css" />
  <link rel="stylesheet" type="text/css" href="css/main.css" />
  {/*===============================================================================================*/}
  {/* Header */}
  <header className="header-v4">
    {/* Header desktop */}
    <div className="container-menu-desktop">
      {/* Topbar */}
      <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
          <div className="left-top-bar">
            Free shipping for standard order over $100
          </div>
          <div className="right-top-bar flex-w h-full">
            <a href="#" className="flex-c-m trans-04 p-lr-25">
              Help &amp; FAQs
            </a>
            <a href="#" className="flex-c-m trans-04 p-lr-25">
              My Account
            </a>
            <a href="#" className="flex-c-m trans-04 p-lr-25">
              EN
            </a>
            <a href="#" className="flex-c-m trans-04 p-lr-25">
              USD
            </a>
          </div>
        </div>
      </div>
      <div className="wrap-menu-desktop how-shadow1">
        <nav className="limiter-menu-desktop container">
          {/* Logo desktop */}
          <a href="#" className="logo">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li>
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
              <li className="active-menu">
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
          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify={2}
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <a
              href="#"
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify={0}
            >
              <i className="zmdi zmdi-favorite-outline" />
            </a>
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
      <div className="wrap-icon-header flex-w flex-r-m m-r-15">
        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
          <i className="zmdi zmdi-search" />
        </div>
        <div
          className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
          data-notify={2}
        >
          <i className="zmdi zmdi-shopping-cart" />
        </div>
        <a
          href="#"
          className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
          data-notify={0}
        >
          <i className="zmdi zmdi-favorite-outline" />
        </a>
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
      <ul className="topbar-mobile">
        <li>
          <div className="left-top-bar">
            Free shipping for standard order over $100
          </div>
        </li>
        <li>
          <div className="right-top-bar flex-w h-full">
            <a href="#" className="flex-c-m p-lr-10 trans-04">
              Help &amp; FAQs
            </a>
            <a href="#" className="flex-c-m p-lr-10 trans-04">
              My Account
            </a>
            <a href="#" className="flex-c-m p-lr-10 trans-04">
              EN
            </a>
            <a href="#" className="flex-c-m p-lr-10 trans-04">
              USD
            </a>
          </div>
        </li>
      </ul>
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
  {/* Title page */}
  <section
    className="bg-img1 txt-center p-lr-15 p-tb-92"
    style={{ backgroundImage: 'url("images/bg-02.jpg")' }}
  >
    <h2 className="ltext-105 cl0 txt-center">Blog</h2>
  </section>
  {/* Content page */}
  <section className="bg0 p-t-62 p-b-60">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-9 p-b-80">
          <div className="p-r-45 p-r-0-lg">
            {/* item blog */}
            <div className="p-b-63">
              <a href="blog-detail.html" className="hov-img0 how-pos5-parent">
                <img src="images/blog-04.jpg" alt="IMG-BLOG" />
                <div className="flex-col-c-m size-123 bg9 how-pos5">
                  <span className="ltext-107 cl2 txt-center">22</span>
                  <span className="stext-109 cl3 txt-center">Jan 2018</span>
                </div>
              </a>
              <div className="p-t-32">
                <h4 className="p-b-15">
                  <a
                    href="blog-detail.html"
                    className="ltext-108 cl2 hov-cl1 trans-04"
                  >
                    8 Inspiring Ways to Wear Dresses in the Winter
                  </a>
                </h4>
                <p className="stext-117 cl6">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                  Donec dictum vitae sapien eu varius
                </p>
                <div className="flex-w flex-sb-m p-t-18">
                  <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      StreetStyle, Fashion, Couple
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>8 Comments</span>
                  </span>
                  <a
                    href="blog-detail.html"
                    className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                  >
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-9" />
                  </a>
                </div>
              </div>
            </div>
            {/* item blog */}
            <div className="p-b-63">
              <a href="blog-detail.html" className="hov-img0 how-pos5-parent">
                <img src="images/blog-05.jpg" alt="IMG-BLOG" />
                <div className="flex-col-c-m size-123 bg9 how-pos5">
                  <span className="ltext-107 cl2 txt-center">18</span>
                  <span className="stext-109 cl3 txt-center">Jan 2018</span>
                </div>
              </a>
              <div className="p-t-32">
                <h4 className="p-b-15">
                  <a
                    href="blog-detail.html"
                    className="ltext-108 cl2 hov-cl1 trans-04"
                  >
                    The Great Big List of Men’s Gifts for the Holidays
                  </a>
                </h4>
                <p className="stext-117 cl6">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                  Donec dictum vitae sapien eu varius
                </p>
                <div className="flex-w flex-sb-m p-t-18">
                  <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      StreetStyle, Fashion, Couple
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>8 Comments</span>
                  </span>
                  <a
                    href="blog-detail.html"
                    className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                  >
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-9" />
                  </a>
                </div>
              </div>
            </div>
            {/* item blog */}
            <div className="p-b-63">
              <a href="blog-detail.html" className="hov-img0 how-pos5-parent">
                <img src="images/blog-06.jpg" alt="IMG-BLOG" />
                <div className="flex-col-c-m size-123 bg9 how-pos5">
                  <span className="ltext-107 cl2 txt-center">16</span>
                  <span className="stext-109 cl3 txt-center">Jan 2018</span>
                </div>
              </a>
              <div className="p-t-32">
                <h4 className="p-b-15">
                  <a
                    href="blog-detail.html"
                    className="ltext-108 cl2 hov-cl1 trans-04"
                  >
                    5 Winter-to-Spring Fashion Trends to Try Now
                  </a>
                </h4>
                <p className="stext-117 cl6">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                  Donec dictum vitae sapien eu varius
                </p>
                <div className="flex-w flex-sb-m p-t-18">
                  <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>
                      StreetStyle, Fashion, Couple
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>
                    <span>8 Comments</span>
                  </span>
                  <a
                    href="blog-detail.html"
                    className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                  >
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-9" />
                  </a>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
              <a
                href="#"
                className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
              >
                1
              </a>
              <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
                2
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 p-b-80">
          <div className="side-menu">
            <div className="bor17 of-hidden pos-relative">
              <input
                className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                type="text"
                name="search"
                placeholder="Search"
              />
              <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                <i className="zmdi zmdi-search" />
              </button>
            </div>
            <div className="p-t-55">
              <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
              <ul>
                <li className="bor18">
                  <a
                    href="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    Fashion
                  </a>
                </li>
                <li className="bor18">
                  <a
                    href="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    Beauty
                  </a>
                </li>
                <li className="bor18">
                  <a
                    href="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    Street Style
                  </a>
                </li>
                <li className="bor18">
                  <a
                    href="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    Life Style
                  </a>
                </li>
                <li className="bor18">
                  <a
                    href="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    DIY &amp; Crafts
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-t-65">
              <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
              <ul>
                <li className="flex-w flex-t p-b-30">
                  <a
                    href="#"
                    className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                  >
                    <img src="images/product-min-01.jpg" alt="PRODUCT" />
                  </a>
                  <div className="size-215 flex-col-t p-t-8">
                    <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                      White Shirt With Pleat Detail Back
                    </a>
                    <span className="stext-116 cl6 p-t-20">$19.00</span>
                  </div>
                </li>
                <li className="flex-w flex-t p-b-30">
                  <a
                    href="#"
                    className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                  >
                    <img src="images/product-min-02.jpg" alt="PRODUCT" />
                  </a>
                  <div className="size-215 flex-col-t p-t-8">
                    <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                      Converse All Star Hi Black Canvas
                    </a>
                    <span className="stext-116 cl6 p-t-20">$39.00</span>
                  </div>
                </li>
                <li className="flex-w flex-t p-b-30">
                  <a
                    href="#"
                    className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                  >
                    <img src="images/product-min-03.jpg" alt="PRODUCT" />
                  </a>
                  <div className="size-215 flex-col-t p-t-8">
                    <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                      Nixon Porter Leather Watch In Tan
                    </a>
                    <span className="stext-116 cl6 p-t-20">$17.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-t-55">
              <h4 className="mtext-112 cl2 p-b-20">Archive</h4>
              <ul>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>July 2018</span>
                    <span>(9)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>June 2018</span>
                    <span>(39)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>May 2018</span>
                    <span>(29)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>April 2018</span>
                    <span>(35)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>March 2018</span>
                    <span>(22)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>February 2018</span>
                    <span>(32)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>January 2018</span>
                    <span>(21)</span>
                  </a>
                </li>
                <li className="p-b-7">
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>December 2017</span>
                    <span>(26)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-t-50">
              <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
              <div className="flex-w m-r--5">
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                >
                  Fashion
                </a>
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                >
                  Lifestyle
                </a>
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                >
                  Denim
                </a>
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                >
                  Streetstyle
                </a>
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                >
                  Crafts
                </a>
              </div>
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
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
</>
