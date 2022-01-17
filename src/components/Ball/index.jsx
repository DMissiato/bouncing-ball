
import { useReducer, useEffect } from 'react';
import styles from './Ball.module.scss';

import { frameRate, arenaSize, ballSize, ballVelocity, reboundMargin, getRandomInteger } from './../../libs/utils';
import { useInterval } from './../../libs/hooks';


const INIT_STATE = {
    
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
};

const reducer = (state, action) =>
{
    switch(action.type)
    {
        case 'setPosition':
            return {...state, position: action.value};
        case 'setVelocity':
            return {...state, velocity: action.value};
        default:
            return state;
    }
};

// Component
const Ball = (props) =>
{
    //Props
    const size = props.size || ballSize;

    // State
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //Functions
    const checkCollision = () => 
    {
        if(state.position.x < 0 || state.position.x > (arenaSize-size))
        {
            dispatch({
                type: 'setPosition',
                value: {
                    ...state.position,
                    x: state.position.x + (state.position.x < 0 ? reboundMargin : -reboundMargin),
                }
            });
            dispatch({ 
                type: 'setVelocity', 
                value: {
                    ...state.velocity,
                    x: state.velocity.x * -1,
                }
            });
        }
        if(state.position.y < 0 || state.position.y > (arenaSize-size))
        {
            dispatch({
                type: 'setPosition',
                value: {
                    ...state.position,
                    y: state.position.y + (state.position.y < 0 ? reboundMargin : -reboundMargin),
                }
            });
            dispatch({
                type: 'setVelocity',
                value: {
                    ...state.velocity,
                    y: state.velocity.y * -1,
                }
            });
        }
    };

    //Hooks
    useEffect(() => {
        dispatch({
            type: 'setPosition',
            value: {
                x: getRandomInteger(arenaSize),
                y: getRandomInteger(arenaSize)
            }
        });
        dispatch({
            type: 'setVelocity',
            value: {
                x: getRandomInteger(ballVelocity)+3 * (getRandomInteger(2) ? 1 : -1),
                y: getRandomInteger(ballVelocity)+3 * (getRandomInteger(2) ? 1 : -1)
            }
        });
    }, []);

    useInterval(() => {

        dispatch({ 
            type: 'setPosition', 
            value: {
                x: state.position.x + (state.velocity.x * 0.005 * frameRate),
                y: state.position.y + (state.velocity.y * 0.005 * frameRate)
            }
        });
        checkCollision();

    }, frameRate);
    
    //Draw
    return (
        <div 
            className={styles.ball}
            style={{
                width: `${size}em`,
                height: `${size}em`,
                top: `${state.position.y}em`,
                left: `${state.position.x}em`
            }}
        >
        </div>
    );
};

export default Ball;