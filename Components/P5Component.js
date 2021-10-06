import dynamic from 'next/dynamic';
import styles from './P5Component.module.css';

const Sketch = dynamic( () => import('react-p5'), { ssr: false } );

function P5Component() {
    let parentOfCanvas;

    const setup = (p5, parentRef) => {
        parentOfCanvas = parentRef.parentElement;

        const clientRect = parentOfCanvas.getBoundingClientRect();
        const width = clientRect.width;
        const height = clientRect.height - 4;

        p5.createCanvas(width, height).parent(parentRef);
        p5.background(0);
    }

    const draw = () => {

    }

    const windowResized = (p5) => {
        const clientRect = parentOfCanvas.getBoundingClientRect();
        const width = clientRect.width;
        const height = clientRect.height - 4;
        console.log(height)
        p5.resizeCanvas(width, height);
        p5.background(0);
    }

    return (
        <div className={styles.p5ParentDiv} id="p5parentDiv">
            { process.browser && <Sketch setup={setup} draw={draw} windowResized={windowResized} ></Sketch> }
        </div>
    )
}

export default P5Component
