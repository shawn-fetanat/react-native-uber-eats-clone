
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
  - `STRIPE_API_KEY`
- Also, there is a `.env` file in the `/api` folder to store:
  - `STRIPE_SECRET_KEY`

#### Side Note: I tried using `react-native-dotenv` but man does it suck. You need to keep on refreshing the cache and it was just a hassle to deal with so I decided to store API keys in a file instead and just export them where needed to "simulate" using environment variables lol.

### ✅ 🧼 Modifications & Code Clean Up
- Destructed props and other variables and values where appropriate
- Moved inline styles to `StyleSheet`and moved `styles` to the bottom of each component
- Moved hardcoded data variables into separate files and put them in `data` folder/directory then imported them into components
- Created file `action-types.js` to store `actionTypes` for `ADD_TO_CART` & `REMOVE_FROM_CART` and placed in `constants` folder
- Created file `itemActions.js` to store action creators for `addItem` and `removeItem` actions and placed in `actions` folder
- Split up separation of concerns in `cartReducer.js` and moved conditional logic that checks for `checkboxValue` out of the `cartReducer` and into the `MenuItems` component. In other words, instead of checking `if (checkBoxValue)` in the reducer, I used a ternary operator to check for `checkBoxValue` in the `onPress` of the checkbox in the `ViewCart` component. If `checkBoxValue` is `true` then I `dispatch(addItem())` otherwise I `dispatch(removeItem())`
- Instead of users getting sent to `OrdersCompleted` after pressing `Checkout` button an `Orders` screen pops up to process their stripe payment and once completed THEN they are sent to `OrderCompleted` screen

### 🐞 Bug Fixes
- Changed `View` to `ScrollView` in `RestaurantDetail` so you can scroll all the way to the bottom and see all restaurants

### ➕ Additional features
- Added screens for `Browse`, `Grocery`, `Orders`, and `Account` and navigation between each of screens
- Added an API with Node and Express to create a payment intent with `client_secret` and send it back to client
- Added an `Orders` screen after users press the `Checkout` button so users can enter their card information and process their stripe payment
- Added a `Browse` screen where users just browse their local restaurants
- Added a `Login` screen and a `SignUp` screen
- Added a "Log Out" button to the `Account` screen
- Added a simple lotti animation to the `Grocery screen`

### App Screenshots & Video: https://drive.google.com/drive/folders/1E1eOh-A0_JOXyHagE7aWcnyNyEUyoBTL
