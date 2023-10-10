import "react-native-get-random-values";
import React, { useRef, JSX, useCallback, useState } from "react";
import { FlatList, View, ViewStyle } from "react-native";
import { BallIndicator } from "react-native-indicators";
import { scale } from "react-native-size-matters";
import { v4 } from "uuid";

import { marginT } from "@app/styles";
import tabStyle from "@app/components/screens/myfoods/FoodsTab/tab.style";
import { useTypedSelector, useRefresh } from "@app/hooks";
import { CL_BLUE } from "@app/styles/colors";
import { InfinityFooter } from "@app/components";

type TProps<T> = {
  refreshScreen: () => void;
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  containerStyle?: ViewStyle | ViewStyle[];
  emptyList?: () => JSX.Element;
  onReached?: () => Promise<void>;
  rootContainerStyle?: ViewStyle | ViewStyle[];
};

const FlatListVertical = <T extends unknown>({
  refreshScreen,
  data,
  renderItem,
  containerStyle,
  emptyList,
  onReached,
  rootContainerStyle,
}: TProps<T>) => {
  const { isLoading } = useTypedSelector((state) => state.application);
  const { refreshing, onRefresh } = useRefresh();
  const flatListRef = useRef<FlatList>(null);
  const [isReachedLoading, setIsReachedLoading] = useState<boolean>(false);

  const keyExtractor = () => v4();

  const reachedHandler = async () => {
    if (!isReachedLoading && onReached) {
      setIsReachedLoading(true);
      await onReached();
    }
    setIsReachedLoading(false);
  };

  const renderFooter = useCallback(
    () => (
      <View style={tabStyle.infinityLoader}>
        <InfinityFooter loading={isReachedLoading} />
      </View>
    ),
    [isReachedLoading],
  );

  if (isLoading && !isReachedLoading) {
    return (
      <View style={marginT(30)}>
        <BallIndicator color={CL_BLUE} size={scale(32)} />
      </View>
    );
  }

  return (
    <FlatList
      ref={flatListRef}
      keyboardShouldPersistTaps="always"
      refreshing={refreshing}
      removeClippedSubviews
      contentContainerStyle={[tabStyle.contentContainer, containerStyle]}
      onRefresh={async () => onRefresh(() => refreshScreen())}
      data={data}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.25}
      initialNumToRender={5}
      ListEmptyComponent={emptyList}
      renderItem={({ item, index }) => renderItem(item, index)}
      onEndReached={reachedHandler}
      ListFooterComponent={renderFooter}
      style={rootContainerStyle}
    />
  );
};
export default FlatListVertical;
