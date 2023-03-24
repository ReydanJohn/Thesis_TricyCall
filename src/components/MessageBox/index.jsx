import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import styles from './styles';

const MessageBox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed nisi nemo facilis consequatur quam, dolore ea aperiam et voluptatibus id natus recusandae quas a nulla tempore repudiandae iusto saepe!</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
}

export default MessageBox;
