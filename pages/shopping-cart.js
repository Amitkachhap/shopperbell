<>
  <title>Shoping Cart</title>
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
  {/* breadcrumb */}
  <div className="container">
    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
      <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
        Home
        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
      </a>
      <span className="stext-109 cl4">Shoping Cart</span>
    </div>
  </div>
  {/* Shoping Cart */}
  <form className="bg0 p-t-75 p-b-85">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
          <div className="m-l-25 m-r--38 m-lr-0-xl">
            <div className="wrap-table-shopping-cart">
              <table className="table-shopping-cart">
                <tbody>
                  <tr className="table_head">
                    <th className="column-1">Product</th>
                    <th className="column-2" />
                    <th className="column-3">Price</th>
                    <th className="column-4">Quantity</th>
                    <th className="column-5">Total</th>
                  </tr>
                  <tr className="table_row">
                    <td className="column-1">
                      <div className="how-itemcart1">
                        <img src="images/item-cart-04.jpg" alt="IMG" />
                      </div>
                    </td>
                    <td className="column-2">Fresh Strawberries</td>
                    <td className="column-3">$ 36.00</td>
                    <td className="column-4">
                      <div className="wrap-num-product flex-w m-l-auto m-r-0">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-minus" />
                        </div>
                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product1"
                          defaultValue={1}
                        />
                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-plus" />
                        </div>
                      </div>
                    </td>
                    <td className="column-5">$ 36.00</td>
                  </tr>
                  <tr className="table_row">
                    <td className="column-1">
                      <div className="how-itemcart1">
                        <img src="images/item-cart-05.jpg" alt="IMG" />
                      </div>
                    </td>
                    <td className="column-2">Lightweight Jacket</td>
                    <td className="column-3">$ 16.00</td>
                    <td className="column-4">
                      <div className="wrap-num-product flex-w m-l-auto m-r-0">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-minus" />
                        </div>
                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product2"
                          defaultValue={1}
                        />
                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-plus" />
                        </div>
                      </div>
                    </td>
                    <td className="column-5">$ 16.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
              <div className="flex-w flex-m m-r-20 m-tb-5">
                <input
                  className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                  type="text"
                  name="coupon"
                  placeholder="Coupon Code"
                />
                <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                  Apply coupon
                </div>
              </div>
              <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                Update Cart
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
          <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
            <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
            <div className="flex-w flex-t bor12 p-b-13">
              <div className="size-208">
                <span className="stext-110 cl2">Subtotal:</span>
              </div>
              <div className="size-209">
                <span className="mtext-110 cl2">$79.65</span>
              </div>
            </div>
            <div className="flex-w flex-t bor12 p-t-15 p-b-30">
              <div className="size-208 w-full-ssm">
                <span className="stext-110 cl2">Shipping:</span>
              </div>
              <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                <p className="stext-111 cl6 p-t-2">
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <div className="p-t-15">
                  <span className="stext-112 cl8">Calculate Shipping</span>
                  <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                    <select className="js-select2" name="time">
                      <option>Select a country...</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                    <div className="dropDownSelect2" />
                  </div>
                  <div className="bor8 bg0 m-b-12">
                    <input
                      className="stext-111 cl8 plh3 size-111 p-lr-15"
                      type="text"
                      name="state"
                      placeholder="State /  country"
                    />
                  </div>
                  <div className="bor8 bg0 m-b-22">
                    <input
                      className="stext-111 cl8 plh3 size-111 p-lr-15"
                      type="text"
                      name="postcode"
                      placeholder="Postcode / Zip"
                    />
                  </div>
                  <div className="flex-w">
                    <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                      Update Totals
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-w flex-t p-t-27 p-b-33">
              <div className="size-208">
                <span className="mtext-101 cl2">Total:</span>
              </div>
              <div className="size-209 p-t-1">
                <span className="mtext-110 cl2">$79.65</span>
              </div>
            </div>
            <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
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
