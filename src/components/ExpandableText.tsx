import { Button, Text } from '@chakra-ui/react';
import React, { Children, ReactNode, useState } from 'react'

interface Props {
    description: string;
}

const ExpandableText = ({description}: Props) => {

    const [expanded, setexpanded] = useState(false);
    const limit = 300
    if (!Children) return null;

    if (description.length <= limit)
            return <Text>{description}</Text> 

    const summary = expanded? description: description.substring(0, limit) + '...'
  return (
    <Text>{summary}<Button marginLeft={1} size='xs' fontWeight={'bold'} colorScheme='yellow' onClick={() => setexpanded(!expanded)}>{expanded? 'show less': 'show more'}</Button></Text>
  )
}

export default ExpandableText