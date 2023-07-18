import {
    createStore as createZustandStore,
    useStore as useZustandStore,
  } from "zustand";
  import { createContext, useContext } from "react";
  import { shallow } from "zustand/shallow";
  import PropTypes from "prop-types";
  
  const createStore = (initialStore) => {
    const store = createZustandStore((set) => ({
      ...initialStore,
      setValue: (key, value) => set({ [key]: value }),
      setStoreValue: (key, value) => {
        if (typeof key === "string") {
          set({ [key]: value });
        }
      },
      setStore: (payload) => {
        if (typeof payload === "object") {
          return set(payload);
        }
      },
    }));
  
    return store;
  };
  
  const StoreContext = createContext();
  
  function StoreProvider(props) {
    return (
      <StoreContext.Provider
        value={createStore(
          props.initialStore || props.initialState || props.initialValues
        )}
        {...props}
      />
    );
  }
  
  function useStore(selector) {
    const context = useContext(StoreContext);
    const slice = useZustandStore(context, selector, shallow);
  
    if (context === undefined) {
      throw new Error("useStore must be used within a StoreProvider");
    }
  
    return slice;
  }
  
  StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialValues: PropTypes.object,
  };
  
  StoreProvider.defaultProps = {
    initialValues: {},
  };
  
  export { StoreProvider, useStore };
  