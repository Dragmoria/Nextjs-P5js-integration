import dynamic from 'next/dynamic';
//import Sketch from 'react-p5';
import styles from './P5Component.module.css';

const Sketch = dynamic( () => import('react-p5'), { ssr: false } )



function P5Component() {
    const setup = (p5, parentRef) => {
        p5.createCanvas(200, 200).parent(parentRef);
        p5.background(200, 150, 80);
    }

    const draw = () => {

    }

    return (
        <div className={styles.p5ParentDiv} id="p5parentDiv">
            { process.browser && <Sketch setup={setup} draw={draw} ></Sketch> }
        </div>
    )
}

export default P5Component
