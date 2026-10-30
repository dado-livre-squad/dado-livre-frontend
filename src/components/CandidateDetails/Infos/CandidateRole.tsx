import { StyleSheet, Text } from 'react-native';

type RoleProps = {
  role: string;
}

export default function Role({role}: RoleProps) {
  return (
    <>
      <Text style={styles.role}>{role}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  role: {
    fontFamily: 'Nunito-Bold',
    color: '#a0acb5'
  },
})