import { mainColor } from '@/constants/color'
import { StyleSheet, Text, View } from 'react-native'
import NewsContainer from '../NewsContainer/NewsContainer'

export default function HomeFooter() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Próximas eleiçoes
        </Text>
        <NewsContainer>
          <View style={styles.innerNewsContainer}>
            <Text style={styles.innerNewsContainerMainText}>
              Eleições Municipais
            </Text>
            <Text style={styles.innerNewsContainerMainText}>
              04 Out 2026
            </Text>
          </View>
          <View style={styles.innerNewsContainer}>
            <Text style={styles.innerNewsContainerSubText}>
               1º Turno
            </Text>
            <Text style={styles.innerNewsContainerSubText}>
              Domingo
            </Text>
          </View>
        </NewsContainer>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    gap: 14
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    color: mainColor,
    fontSize: 18
  },
  innerNewsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerNewsContainerMainText: {
    color: 'white',
    fontFamily: 'RobotoSlab-Bold'
  },
  innerNewsContainerSubText: {
    color: '#74a09d',
    fontFamily: 'RobotoSlab-Bold'
  }
})
