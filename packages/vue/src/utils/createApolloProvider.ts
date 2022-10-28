// import Vue from 'vue'
// import VueApollo from "@vue/apollo-option";
import VueApollo from "vue-apollo";
import {
  createApolloClient,
  restartWebsockets,
} from "vue-cli-plugin-apollo/graphql-client";
import "regenerator-runtime/runtime";

// Name of the localStorage item
const AUTH_TOKEN = "apollo-token";

// Config
const defaultOptions = {
  httpEndpoint: "http://localhost:4000/graphql",
  wsEndpoint: "ws://localhost:4000/graphql",
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
  getAuth: (tokenName: string) => {
    const token = localStorage.getItem(tokenName);
    return token || "";
  },
};

// Call this in the Vue app file
export function createClient(options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  apolloClient.wsClient = wsClient;

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  return apolloProvider;
}

// Manually call this when user log in
export async function onLogin(apolloClient: { wsClient: any; resetStore: () => any; }, token: any) {
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(token));
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e: any) {
    if (!isUnauthorizedError(e)) {
      console.log(
        "%cError on cache reset (login)",
        "color: orange;",
        e.message
      );
    }
  }
}

// Manually call this when user log out
export async function onLogout(apolloClient: { wsClient: any; resetStore: () => any; }) {
  localStorage.removeItem(AUTH_TOKEN);
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e: any) {
    if (!isUnauthorizedError(e)) {
      console.log(
        "%cError on cache reset (logout)",
        "color: orange;",
        e.message
      );
    }
  }
}

function isUnauthorizedError(error: { graphQLErrors: any; }) {
  const { graphQLErrors } = error;
  return (
    graphQLErrors && graphQLErrors.some((e: any) => e.message === "Unauthorized")
  );
}
