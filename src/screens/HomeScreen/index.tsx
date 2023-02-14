import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import UInput from 'components/UInput';
import UserAvatar from 'components/UserAvatar';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors} from 'constants/styles';
import {useLazyGetRecipesQuery} from 'service/RecipesService';
import RecipePreview from 'components/RecipePreview';
import {useDebounce} from 'hooks/useDebounce';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {useTypedNavigation} from 'hooks/useTypedNavigation';
import {styles} from './HomeScreen.style';

const HomeScreen = () => {
  const user = useTypedSelector(state => state.userReducer.user);
  const navigator = useTypedNavigation();

  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 300);
  const [isReloading, setIsReloading] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (value: string) => setSearch(value),
    [],
  );
  const [trigger, {data}] = useLazyGetRecipesQuery();

  useEffect(() => {
    if (debouncedSearch.length) {
      trigger({search: debouncedSearch, offset: 0});
    }
  }, [debouncedSearch, trigger]);

  useEffect(() => setIsReloading(false), [data]);
  useEffect(() => setIsReloading(!!search), [search]);

  const handleScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {height} = e.nativeEvent.layoutMeasurement;
      const position = e.nativeEvent.contentOffset.y;
      const contentHeight = e.nativeEvent.contentSize.height;
      const isScrolledEnd = height + position >= contentHeight - 400;

      if (isScrolledEnd && data?.hasMore) {
        trigger({search: debouncedSearch, offset: data!.offset});
      }
    },
    [data, debouncedSearch, trigger],
  );

  const mainContent = useMemo<ReactNode>(() => {
    if (isReloading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }
    if (!search) {
      return (
        <View style={styles.container}>
          <Text style={styles.emptyText}>
            Please type something to start searching
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.list}>
        {data?.recipes.map(item => (
          <View style={styles.recipeItem} key={item.id}>
            <RecipePreview key={item.id} {...item} />
          </View>
        ))}
      </View>
    );
  }, [search, isReloading, data]);

  useEffect(() => {
    if (!user) {
      navigator.navigate('Welcome');
    }
  }, [navigator, user]);

  if (!user) {
    return null;
  }

  return (
    <ScrollView
      style={styles.root}
      onScroll={handleScrollEnd}
      scrollEventThrottle={100}>
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.greetings}>Hello {user.name}</Text>
            <Text style={styles.whatToCook}>
              What do you want to cook today?
            </Text>
          </View>
          <UserAvatar user={user} size="sm" />
        </View>
        <UInput
          placeholder="Search Recipes"
          value={search}
          onChangeText={handleInputChange}
          style={styles.input}
          leftIcon={
            <FeatherIcon name="search" size={16} color={colors.placeholder} />
          }
        />
      </View>
      {mainContent}
    </ScrollView>
  );
};

export default HomeScreen;
