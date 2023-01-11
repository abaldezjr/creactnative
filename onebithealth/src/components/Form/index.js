import { React, useState } from 'react';

import styles from './style';

import {
    View,
    Vibration,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Pressable,
    FlatList
} from 'react-native';
import ResultImc from '../ResultImc';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    const imcCalculator = () => {
        let weightFormat = height.replace(',', '.');
        let heightFormat = height.replace(',', '.');
        let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
        setImcList((array) => [...array, { id: new Date().getTime(), imc: totalImc }]);
        setImc(totalImc);
    }

    const validationImc = () => {
        if (height != null && weight != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu imc é igual a:');
            setTextButton('Calcular novamente');
            setErrorMessage(null);
            return;
        } else {
            verificationImc();
            setImc(null);
            setTextButton('Calcular');
            setMessageImc('Preencha o peso e a altura.');
        }
    }

    const verificationImc = () => {
        if (imc == null) {
            setErrorMessage("campo obrigatório");
            Vibration.vibrate();
        }
    }

    return (<>
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>
                        Altura
                    </Text>
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder='Ex. 1.75'
                        keyboardType='numeric'
                    />
                    <Text style={styles.formLabel}>
                        Peso
                    </Text>
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='Ex. 80.5'
                        keyboardType='numeric'
                    />
                    <View style={styles.boxCalculatorButton}>
                        <TouchableOpacity style={styles.buttonCalculator}
                            onPress={() => validationImc()}
                        >
                            <Text style={styles.textButtonCalculator}>
                                {textButton}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <ResultImc resultImc={imc} messageResultImc={messageImc} />
                    <TouchableOpacity style={styles.buttonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC é igual:</Text>
                            {item.imc}
                        </Text>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    </>);
}