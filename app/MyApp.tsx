import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import Colors from "@app/styles/colors";
import { useEffect, useState } from "react";
import { getApiUsersList } from "@app/commands";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import Theme from "@app/styles";
import MyAppItem from "@app/components/MyAppItem";

const MyApp = () => {
  const usersList = useSelector((state: RootState) => state.users.usersList)
  const usersListError = useSelector((state: RootState) => state.users.isError)
  
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getApiUsersList().then()
  }, [])

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await getApiUsersList();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={Theme.MyApp.container}>
      <View style={Theme.MyApp.headerContainer}>
        <Text style={Theme.MyApp.headerTitle}>
          Listado de usuarios
        </Text>
      </View>
      <View style={Theme.MyApp.contentContainer}>
        <FlatList
          style={Theme.MyApp.list}
          data={usersList}
          renderItem={({item}) => <MyAppItem item={item} />}
          ItemSeparatorComponent={() => <View style={Theme.MyApp.listSeparator} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.bg]}
              tintColor={Colors.bg} 
            />
          }
          ListEmptyComponent={() => 
            usersListError?
              <Text style={Theme.MyApp.errorText}>
                Ups! hay un error, vuelva a intentarlo
              </Text>
              :
              <ActivityIndicator size="large" color={Colors.bg}/>}
        />
      </View>
    </View>
  );
}

export default MyApp