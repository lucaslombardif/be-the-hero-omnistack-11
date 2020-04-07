import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react'

import Routes from './src/routes'
import { StatusBar } from 'react-native';

StatusBar.setTranslucent(true);

export default function App() {
  return (
    <Routes/>
  )
}