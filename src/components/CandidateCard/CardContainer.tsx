import { StyleSheet, View } from "react-native"

type CardContainerProps = {
  children: React.ReactNode
}

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <>
      <View style={styles.container}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000000',      
    shadowOffset: {
      width: 0,                  
      height: 4,                 
    },
    shadowOpacity: 0.15,         
    shadowRadius: 6,             
    elevation: 5,  
  }
})
