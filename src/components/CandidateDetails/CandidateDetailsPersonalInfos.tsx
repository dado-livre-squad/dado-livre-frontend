import { StyleSheet, Text, View } from "react-native";

type CandidateDetailsPersonalInfosProps = {
  title: string,
  data: string
}

export default function CandidateDetailsPersonalInfos({title, data}: CandidateDetailsPersonalInfosProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    height: 'auto',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontFamily: 'Nunito-Medium',
    fontSize: 11,
    color: '#738396'
  },
  data: {
    fontFamily: 'RobotoSlab-ExtraBold'
  }
})