import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSetting, setThemeSetting] = useState(false);
  const [activeCartMenu, setActiveCartMenu] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSetting(false);
  };
  const toggleNotification  =()=>{
    setShowNotification((prev)=>!prev);
  }

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSetting(false);
  };

  const handleClick = (clicked) => {
    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      [clicked]: !prevIsClicked[clicked],
    }));
  };

  return (
    <StateContext.Provider
      value={{
        toggleNotification,
        setShowNotification,
        showNotification,
        activeCartMenu,
        setActiveCartMenu,
        screenSize,
        setScreenSize,
        activeMenu, 
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSetting,
        setThemeSetting,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
