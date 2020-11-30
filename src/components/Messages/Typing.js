import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledTyping = styled.div`
    width: 5em;
	height: 2em;
	position: relative;
	padding: 10px;
	margin-left: 5px;
	background: #e6e6e6;
	border-radius: 20px;
`;

const loadingFade = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
`;

const TypingDot = styled.div`
	float: left;
	width: 8px;
	height: 8px;
	margin: 0 4px;
	background: #8d8c91;
	border-radius: 50%;
	opacity: 0;
    animation: ${loadingFade} 1s infinite;
    
    &:nth-child(1) {
	    animation-delay: 0s;
    }

    &:nth-child(2) {
	    animation-delay: 0.2s;
    }

    &:nth-child(3) {
	    animation-delay: 0.4s;
    }
`;

const Typing = () => (
    <StyledTyping>
        <TypingDot />
        <TypingDot />
        <TypingDot />
    </StyledTyping>
)

export default Typing;