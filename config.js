import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "SYS | Photo & Design",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Sys Photo & Design | Fotografi cu prestigiu in Bacau - corporate, wedding, family photography!",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "sys-photo.vercel.app",
  content: {
    homepage: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    aboutUs: {
      hero: {
        title: "Sys Photo & Design, pasiune inainte de toate",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Suna acum",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    contact: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    servicii: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    fotografieProdus: {
      hero: {
        title: "Atrage clienti cu fotografii premium",
        subtitle:
          "Vrei mai multe vânzări? Noi îți punem produsele în cea mai bună lumină! Fotografiile noastre profesionale atrag clienți, cresc încrederea în brandul tău și îți oferă avantajul de care ai nevoie.",
        ctaText: "Creste-ti vanzarile!",
        ctaURL: "/contact",
        images: [
          "/images/product/product1.webp",
          "/images/product/product2.webp",
          "/images/product/product3.webp",
          "/images/product/product4.webp",
          "/images/product/product5.webp",
        ],
      },
    },
    fotografieNunta: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    fotografieCorporate: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
    sedintaFoto: {
      hero: {
        title: "Sedinte foto profesionale, cu suflet.",
        subtitle:
          "Pozele ne permit sa pastram vii toate momentele speciale din viata noastra. Noi suntem alaturi de tine si imortalizam nuntile, aniversarile, botezele si toate celelalte momente care merita pastrate cum ar fi maternitatea, craciunul etc.",
        ctaText: "Hai sa vorbim",
        ctaURL: "/contact",
        images: [
          "/images/wedding1.webp",
          "/images/wedding2.webp",
          "/images/wedding3.webp",
        ],
      },
    },
  },
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 99,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "You need more power",
        price: 99,
        priceAnchor: 149,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "pastel",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["pastel"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
