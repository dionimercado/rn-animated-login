import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import LoginScreen from "./src/screens/Login";

const cacheImages = images =>
  images.map(image =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );

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
