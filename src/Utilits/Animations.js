import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Shake = keyframes`
    @-webkit-keyframes shake {
        from,
        to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        }
    
        10%,
        30%,
        50%,
        70%,
        90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
        }
    
        20%,
        40%,
        60%,
        80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
        }
    }
    
    @keyframes shake {
        from,
        to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        }
    
        10%,
        30%,
        50%,
        70%,
        90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
        }
    
        20%,
        40%,
        60%,
        80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
        }
    }
    
    .shake {
        -webkit-animation-name: shake;
        animation-name: shake;
    }
    
    @-webkit-keyframes headShake {
        0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
    
        6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
        }
    
        18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
        }
    
        31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
        }
    
        43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
        }
    
        50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
    }
    
    @keyframes headShake {
        0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
    
        6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
        }
    
        18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
        }
    
        31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
        }
    
        43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
        }
    
        50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        }
    }
    
    .headShake {
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: headShake;
        animation-name: headShake;
    }
`