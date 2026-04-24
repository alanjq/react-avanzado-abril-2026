import { View, Text } from "react-native";

interface IHelloWorldApp {
    nombres?: string[]
}

export const HelloWorldApp = (props: IHelloWorldApp) => {
    let nombres = props.nombres || []
    console.log('nombres:', nombres)

    return <View>
        {nombres.map((nombre_alguien, index) =>
            <Text key={index}>{nombre_alguien}</Text>)}
    </View>
}
