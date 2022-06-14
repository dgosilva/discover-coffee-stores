import { createContext, useReducer } from "react";
import "../styles/globals.css";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORES: "SET_COFFEE_STORES",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      console.log("setting latlong in reducer");
      return { ...state, latlong: action.payload.latlong };
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      console.log("setting coffe stores in reducer");
      return { ...state, coffeeStores: action.payload.coffeeStores };
    }
    default: {
      throw new Error(`Unhlandled Action Type: ${action.type}`);
    }
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    latlong: "",
    coffeeStores: [],
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <footer>
        <p>© 2022 Dgosilva</p>
      </footer>
    </StoreProvider>
  );
}

export default MyApp;
