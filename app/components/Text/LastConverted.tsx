import React from 'react';
import { Text } from 'react-native';
import { instanceOf, string, number } from 'prop-types';
import moment from 'moment';
import styles from './styles';

const LastConverted = (props: Props): JSX.Element => {
  const { base, conversionRate, date, quote } = props;
  return (
    <Text style={styles.smallText}>
      {`1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format('MMMM D, YYYY')}`}
    </Text>
  );
};

interface Props {
  base: string;
  conversionRate: number;
  date: Date;
  quote: string;
}

LastConverted.propTypes = {
  base: string.isRequired,
  conversionRate: number.isRequired,
  date: instanceOf(Date).isRequired,
  quote: string.isRequired,
};

export default LastConverted;
