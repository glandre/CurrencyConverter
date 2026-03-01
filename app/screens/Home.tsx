import React from 'react';
import { StatusBar } from 'react-native';
import Container from '../components/Container';
import Logo from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { LastConverted } from '../components/Text';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

function Home(): JSX.Element {
  const handleOptionsPress = (): void => {
    console.log('options press');
  };

  const handlePressBaseCurrency = (): void => {
    console.log('press base');
  };

  const handlePressQuoteCurrency = (): void => {
    console.log('press quote');
  };

  const handleSwapCurrencies = (): void => {
    console.log('swap currencies');
  };

  const handleTextChange = (text: string): void => {
    console.log('change text', text);
  };
  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton text="Reverse Currencies" onPress={handleSwapCurrencies} />
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Home;
