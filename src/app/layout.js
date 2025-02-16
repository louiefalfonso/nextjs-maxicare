
import Script from "next/script";

export const metadata = {
  title: "St. Lukes Medical Center Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const scripts = [
    { src: "/js/vendor/jquery-3.7.1.min.js" },
    { src: "/js/plugins/waypoints.min.js" },
    { src: "/js/vendor/bootstrap.bundle.min.js" },
    { src: "/js/plugins/meanmenu.min.js" },
    { src: "/js/plugins/odometer.min.js" },
    { src: "/js/plugins/swiper.min.js" },
    { src: "/js/plugins/wow.js" },
    { src: "/js/vendor/magnific-popup.min.js" },
    { src: "/js/vendor/type.js" },
    { src: "/js/plugins/nice-select.min.js" },
    { src: "/js/vendor/jquery-ui.min.js" },
    { src: "/js/vendor/jquery.appear.js" },
    { src: "/js/plugins/parallax.min.js" },
    { src: "/js/plugins/parallax-scroll.js" },
    { src: "/js/plugins/gsap.min.js" },
    { src: "/js/plugins/ScrollTrigger.min.js" },
    { src: "/js/plugins/SplitText.js" },
    { src: "/js/plugins/tween-max.min.js" },
    { src: "/js/plugins/draggable.min.js" },
    { src: "/js/plugins/smoothscroll.js" },
    { src: "/js/vendor/ajax-form.js" },
    { src: "/js/main.js" },
  ];

  return (
    <html className="no-js" lang="en">
      <head>
        <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/css/vendor/fontawesome-pro.css" />
        <link rel="stylesheet" href="/css/vendor/spacing.css" />
        <link rel="stylesheet" href="/css/plugins/odometer-theme-default.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="shortcut icon" type="image/x-icon" href="../imgs/favicon.ico"></link>
      </head>

      <body suppressHydrationWarning={true} className="body-3">
        {children}
        {scripts.map((script) => (
          <Script key={script.src} strategy="afterInteractive" defer src={script.src} />
        ))}
      </body>
    </html>
  );
}
