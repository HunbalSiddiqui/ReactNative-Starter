import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object()
  .shape({
    passwordLength: Yup.number()
      .min(4, 'Should be min of 4 characters.')
      .max(16, 'Should be max of 16 characters.')
      .required('Length is required.')
  })

export default function App() {
  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePassowrdString = (passLength: number) => {

  }

  const createPassword = (characters: string, passLenght: number) => {
    let result = '';

    for (let index = 0; index < passLenght; index++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }

    return result
  }

  const resetPasswordState = () => {

  }

  return (
    <View>
      <Text>Appp</Text>
    </View>
  )
}

const styles = StyleSheet.create({})