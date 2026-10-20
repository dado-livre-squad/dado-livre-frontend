import TabIcon from "@/components/TabIcon/TabIcon";
import { mainColor } from "@/constants/color";
import { Tabs } from "expo-router";
import { ArrowUpDown, CalendarDays, Home, Newspaper, Users } from 'lucide-react-native';
import TabLabel from "../../components/TabLabel/TabLabel";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: mainColor,
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: { height: 70, paddingBottom: 8, paddingTop: 2 },
          animation: 'shift'
        }}
      >
        <Tabs.Screen name="index" options={{
          title: 'Início',
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} focused={focused} Icon={Home}/>,
          tabBarLabel: ({ color, focused }) => <TabLabel title='Início' color={color} focused={focused} />
        }} />
        <Tabs.Screen name="candidatos" options={{
          title: 'Candidatos',
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} focused={focused} Icon={Users}/>,
          tabBarLabel: ({ color, focused }) => <TabLabel title='Candidatos' color={color} focused={focused} />
        }} />
        <Tabs.Screen name="noticias" options={{
          title: 'Notícias',
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} focused={focused} Icon={Newspaper}/>,
          tabBarLabel: ({ color, focused }) => <TabLabel title='Notícias' color={color} focused={focused} />
        }} />
        <Tabs.Screen name="eleicoes" options={{
          title: 'Eleições',
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} focused={focused} Icon={CalendarDays}/>,
          tabBarLabel: ({ color, focused }) => <TabLabel title='Eleições' color={color} focused={focused} />
        }} />
        <Tabs.Screen name="comparar" options={{
          title: 'Comparar',
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} focused={focused} Icon={ArrowUpDown}/>,
          tabBarLabel: ({ color, focused }) => <TabLabel title='Comparar' color={color} focused={focused} />
        }} />
        <Tabs.Screen name="perfil" options={{
          title: 'perfil',
          href: null
        }} />
      </Tabs>
    </>
  )
}