import React from 'react';
import styled, { keyframes } from 'styled-components';

const sweep = keyframes`
    0% { transform: translateX(-100%); }
	50% { transform: translateX(150%); }
	100% { transform: translateX(-100%); }
`;

const StyledSkeleton = styled.div`
    position: relative;
	overflow: hidden;
	height: 40px;
    margin-bottom: 10px;
    
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        animation: ${sweep} 2s infinite;
        background-image: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.4), transparent);
    }
`;

const SkeletonAvatar = styled.div`
    height: 35px;
	width: 35px;
	border-radius: 3px;
	background-color: rgba(58, 57, 57, 0.3);
`;

const SkeletonAuthor = styled.div`
	background-color: rgba(58, 57, 57, 0.3);
	width: 120px;
	height: 10px;
	border-radius: 3px;
	position: absolute;
	bottom: 30px;
	left: 40px;
	right: 0;
`;

const SkeletonDetails = styled.div`
	background-color: rgba(58, 57, 57, 0.3);
	height: 20px;
	border-radius: 3px;
	position: absolute;
	bottom: 5px;
	left: 40px;
	right: 20px;
`;

const Skeleton = () => (
    <StyledSkeleton>
        <SkeletonAvatar />
        <SkeletonAuthor />
        <div className="skeleton__details"></div>
    </StyledSkeleton>
)

export default Skeleton;