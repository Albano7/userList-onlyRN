import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Theme from '@app/styles'

const MyAppItem = ({ item }: { item: UserProps }) => {
    return (
      <TouchableOpacity style={Theme.MyApp.userCard}>
        <View style={Theme.MyApp.avatarContainer}>
          <Image
            src={item.avatar}
            style={Theme.MyApp.avatar}
          />
        </View>
        <View>
          <Text style={Theme.MyApp.userName}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <View style={Theme.MyApp.separator} />
          <Text>
            {item.email}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

export default MyAppItem