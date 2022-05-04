import { StyleSheet, Text as TEXT, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

export default function Text({ header, bold, title, subText, style, italic , children, }) {
    return (
        <TEXT
            style={[
                { color: COLORS.boldGray },
                {fontFamily: 'Nunito-Bold'},
                {fontSize: 18},
                header && styles.header,
                bold && styles.bold,
                title && styles.title,
                subText && styles.subText,
                italic && styles.italic,
                style
            ]}
        >
            {children}
        </TEXT>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 35,
    },
    bold : {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 25,
    },
    subText: {
        opacity: 0.6
    },
    italic: {
        fontStyle : 'italic',
    }
})