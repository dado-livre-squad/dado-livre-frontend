import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'

type LoadingDotsProps = {
  size?: number
}

const DOTS = 3
const DURATION = 350
const STAGGER = 150

export default function LoadingDots({ size = 6 }: LoadingDotsProps) {
  const styles = useThemedStyles(createStyles)

  const anims = useRef(
    Array.from({ length: DOTS }, () => new Animated.Value(0))
  ).current

  useEffect(() => {
    const loops = anims.map((value, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * STAGGER),
          Animated.timing(value, {
            toValue: 1,
            duration: DURATION,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: DURATION,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.delay((DOTS - 1 - i) * STAGGER),
        ])
      )
    )

    loops.forEach((loop) => loop.start())
    return () => loops.forEach((loop) => loop.stop())
  }, [anims])

  return (
    <View
      style={[styles.row, { gap: size * 0.8 }]}
      accessibilityRole="progressbar"
      accessibilityLabel="Carregando"
    >
      {anims.map((value, i) => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              opacity: value.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
              }),
              transform: [
                {
                  translateY: value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -size * 0.6],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center' },
    dot: { backgroundColor: 'white' },
  })