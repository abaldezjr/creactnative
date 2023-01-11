import React from 'react';

import styles from './style';
import { View, Text, Share, TouchableOpacity } from 'react-native';

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        });
    }

    return (<>
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}
                >
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>);
}