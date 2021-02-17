import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec!!!')
    }

    return (
        
        <View style = {styles.BtnLogin}>
            <Button  title = "Entrar"
            onPress = {executar}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    BtnLogin: {
        color: "black"
    }
})