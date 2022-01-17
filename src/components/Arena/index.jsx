
import Ball from './../Ball';
import styles from './Arena.module.scss';

import { arenaSize } from './../../libs/utils';

const Arena = () => 
{

    return (
        <div 
            className={styles.arena} 
            style={{
                width: `${arenaSize}em`, 
                height: `${arenaSize}em`
            }}
        >
            <Ball size={1.5} />
            <Ball size={1.5} />
            <Ball size={1.5} />
            <Ball size={1.5} />
            <Ball size={2} />
            <Ball size={2} />
            <Ball size={2} />
            <Ball size={2} />
            <Ball size={2} />
            <Ball size={2} />
            <Ball size={2.5} />
            <Ball size={2.5} />
            <Ball size={2.5} />
            <Ball size={2.5} />
        </div>
    );
};

export default Arena;