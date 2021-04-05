import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {Text, View} from 'react-native';
import {IAroundProps} from './around.interface';
import {SearchButton} from '../component/ht-button';

const Around = (props: IAroundProps) => {

    const {navigation} = props

    useEffect(() => {
       navigation.setOptions({
           headerTitle : "내주변",
           headerTitleStyle: {
               fontWeight: 'bold',
           },
           headerRight: (() => <SearchButton navigation={navigation}/>),
       })
    }, []);

    return (
        <ScrollerLayout>
            <View>
                <Text>
                    TEST
                </Text>
            </View>
        </ScrollerLayout>
    );
};


export default Around;
