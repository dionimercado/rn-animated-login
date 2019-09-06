import React, { useState } from "react";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import LoginScreen from "./src/screens/Login";

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export default () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require("./assets/bg.jpg")]);

    await Promise.all([...imageAssets]);
  };

  !isReady && (
    <AppLoading
      startAsync={_loadAssetsAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );

  return <LoginScreen />;
};
