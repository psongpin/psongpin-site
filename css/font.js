import { createGlobalStyle } from 'styled-components'

const GlobalFontStyle = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url('/fonts/Lato/Lato-HairlineItalic.eot');
  src: url('/fonts/Lato/Lato-HairlineItalic.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-HairlineItalic.woff2') format('woff2'),
      url('/fonts/Lato/Lato-HairlineItalic.woff') format('woff'),
      url('/fonts/Lato/Lato-HairlineItalic.ttf') format('truetype'),
      url('/fonts/Lato/Lato-HairlineItalic.svg#Lato-HairlineItalic') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/Lato/Lato-LightItalic.eot');
  src: url('/fonts/Lato/Lato-LightItalic.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-LightItalic.woff2') format('woff2'),
      url('/fonts/Lato/Lato-LightItalic.woff') format('woff'),
      url('/fonts/Lato/Lato-LightItalic.ttf') format('truetype'),
      url('/fonts/Lato/Lato-LightItalic.svg#Lato-LightItalic') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Italic.eot');
  src: url('/fonts/Lato/Lato-Italic.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Italic.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Italic.woff') format('woff'),
      url('/fonts/Lato/Lato-Italic.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Italic.svg#Lato-Italic') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/Lato/Lato-BoldItalic.eot');
  src: url('/fonts/Lato/Lato-BoldItalic.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-BoldItalic.woff2') format('woff2'),
      url('/fonts/Lato/Lato-BoldItalic.woff') format('woff'),
      url('/fonts/Lato/Lato-BoldItalic.ttf') format('truetype'),
      url('/fonts/Lato/Lato-BoldItalic.svg#Lato-BoldItalic') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url('/fonts/Lato/Lato-BlackItalic.eot');
  src: url('/fonts/Lato/Lato-BlackItalic.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-BlackItalic.woff2') format('woff2'),
      url('/fonts/Lato/Lato-BlackItalic.woff') format('woff'),
      url('/fonts/Lato/Lato-BlackItalic.ttf') format('truetype'),
      url('/fonts/Lato/Lato-BlackItalic.svg#Lato-BlackItalic') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Hairline.eot');
  src: url('/fonts/Lato/Lato-Hairline.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Hairline.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Hairline.woff') format('woff'),
      url('/fonts/Lato/Lato-Hairline.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Hairline.svg#Lato-Hairline') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Light.eot');
  src: url('/fonts/Lato/Lato-Light.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Light.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Light.woff') format('woff'),
      url('/fonts/Lato/Lato-Light.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Light.svg#Lato-Light') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Regular.eot');
  src: url('/fonts/Lato/Lato-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Regular.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Regular.woff') format('woff'),
      url('/fonts/Lato/Lato-Regular.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Regular.svg#Lato-Regular') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Bold.eot');
  src: url('/fonts/Lato/Lato-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Bold.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Bold.woff') format('woff'),
      url('/fonts/Lato/Lato-Bold.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Bold.svg#Lato-Bold') format('svg');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('/fonts/Lato/Lato-Black.eot');
  src: url('/fonts/Lato/Lato-Black.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Lato/Lato-Black.woff2') format('woff2'),
      url('/fonts/Lato/Lato-Black.woff') format('woff'),
      url('/fonts/Lato/Lato-Black.ttf') format('truetype'),
      url('/fonts/Lato/Lato-Black.svg#Lato-Black') format('svg');
}

html, body {
  font-family: 'Lato', sans-serif;
}

.Typist .Cursor {
  display: inline-block
}

.Typist .Cursor--blinking {
  opacity: 1;
  -webkit-animation: blink 1s linear infinite;
  animation: blink 1s linear infinite
}

@-webkit-keyframes blink {
  0% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

@keyframes blink {
  0% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
`
export default GlobalFontStyle
