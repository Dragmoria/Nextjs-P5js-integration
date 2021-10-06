import dynamic from 'next/dynamic';
//import Sketch from 'react-p5';
import styles from './P5Component.module.css';

const Sketch = dynamic( () => import('react-p5'), { ssr: false } )



function P5Component() {
    let parentOfCanvas;
    
    const setup = (p5, parentRef) => {
        parentOfCanvas = parentRef;

        p5.createCanvas(200, 200).parent(parentRef);
        p5.background(0);
    }

    const draw = () => {

    }

    const windowResized = (p5, parentRef) => {
        console.log(parentOfCanvas)
    }

    return (
        <div className={styles.p5ParentDiv} id="p5parentDiv">
            { process.browser && <Sketch setup={setup} draw={draw} windowResized={windowResized} ></Sketch> }
        </div>
    )
}

export default P5Component
