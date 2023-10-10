import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  View,
} from "react-native";

import { InfinityFooter } from "@app/components";
import flatHorizontalStyle from "@app/components/common/FlatList/FlatHorizontal/flatHorizontal.style";
import { CL_DANGER, CL_GRAY10 } from "@app/styles/colors";
import { debounce } from "@app/utilis";
import { useFocusEffect } from "@react-navigation/native";

const cx = flatHorizontalStyle;

interface Props<T> {
  data: T[];
  children: (item: T, index: number) => JSX.Element;
  isLoading: boolean;
  isShowStep?: boolean;
}

const FlatHorizontal = <T extends { [key: string]: any }>({
  data,
  children,
  isLoading,
  isShowStep,
}: Props<T>) => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderDot = (index: number) => {
    const isCurrent = activeIndex === index;
    const dotColor = isCurrent ? CL_DANGER : CL_GRAY10;

    return <View style={[cx.dot, { backgroundColor: dotColor }]} />;
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0.8 });
  };

  const debouncedScrollToIndex = useRef(
    debounce((index: number) => {
      scrollToIndex(index);
    }, 300),
  ).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x + activeIndex * 20;
    const index = Math.round(offsetX / event.nativeEvent.layoutMeasurement.width);
    setActiveIndex(index);
    debouncedScrollToIndex(index);
  };

  useFocusEffect(
    useCallback(() => {
      if (data.length) {
        flatListRef.current?.scrollToIndex({ index: 0, animated: true, viewPosition: 0.8 });
      }
    }, []),
  );

  return (
    <>
      {!isLoading ? (
        <>
          <FlatList
            ref={flatListRef}
            horizontal
            data={data}
            removeClippedSubviews
            keyboardShouldPersistTaps="always"
            keyExtractor={(item, index) => `${item?.id}-${index}`}
            maxToRenderPerBatch={5}
            renderItem={({ item, index }) => children(item, index)}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            onScroll={handleScroll}
          />
          {isShowStep && (
            <View style={cx.dotContainer}>
              {data?.map((item, index) => (
                <TouchableOpacity
                  key={`${item?.id}${item}`}
                  onPress={() => scrollToIndex(index)}
                  style={cx.wrapper}
                >
                  {renderDot(index)}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </>
      ) : (
        <InfinityFooter loading={isLoading} />
      )}
      <View />
    </>
  );
};
export default FlatHorizontal;
