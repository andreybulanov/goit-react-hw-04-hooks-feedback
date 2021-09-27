import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export const Notification = ({ massage }) => (
    <Text>{massage}</Text>
)

Notification.propTypes = {
    massage: PropTypes.string
}