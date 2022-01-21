
# React Native Uber Eats Challenge

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🔑 API keys
- I Included a file called `api_keys.js` in a folder called `/secrets` to store the following API Keys:
  - `YELP_API_KEY`
  - `GOOGLE_PLACES_API_KEY`
  - `FIREBASE_API_KEY`
  - `STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_API_URL` (this is the route i created in `/api`)
- Also, there is a `.env` file in the `/api` folder to store:
  - `STRIPE_SECRET_KEY`
- Just keep in mind that to spin up this project you also have to add your info from firebase to `firebase.config`

#### Side Note: I tried using `react-native-dotenv` but man does it suck. You need to keep on refreshing the cache and it was just a hassle to deal with so I decided to store API keys in a file instead and just export them where needed to "simulate" using environment variables lol.

#### App Screenshots & Video: https://drive.google.com/drive/folders/1E1eOh-A0_JOXyHagE7aWcnyNyEUyoBTL
