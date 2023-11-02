// components/MyComponent.js

import React from 'react';
import stylesMain from '../styles/main.module.css'; // Import 'main.module.css'
import stylesUtil from '../styles/util.module.css'; // Import 'util.module.css'

function MyComponent() {
  return (
    <div>
      <a className={stylesUtil.myLink} href="your-link">Your Link</a>
      <h1 className={stylesUtil.myHeading}>Your Heading</h1>
      <h2 className={stylesUtil.myHeading}>Another Heading</h2>
      <p className={stylesUtil.myParagraph}>Your paragraph content.</p>
      {/* Other components */}
    </div>
  );
}

export default MyComponent;
