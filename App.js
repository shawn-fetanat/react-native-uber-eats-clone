// noinspection JSUnusedGlobalSymbols
import * as React from "react";
import RootNavigation from "./navigation";
import {STRIPE_PUBLISHABLE_KEY} from "./secrets/api_keys";
import {StripeProvider} from "@stripe/stripe-react-native";

export default function App() {
  return(
      <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY} merchantIdentifier="merchant.identifier">
        <RootNavigation />
      </StripeProvider>
  );
}
