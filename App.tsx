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
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';

    if (upperCase) {
      characterList += upperCase
    }
    if (lowerCase) {
      characterList += lowerCase
    }
    if (numbers) {
      characterList += numbers
    }
    if (symbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)

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
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(false)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})