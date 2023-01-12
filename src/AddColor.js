import { useState } from 'react';
import { ColorBox } from './ColorBox';

const INITIAL_COLOR_LIST =["orange", "crimson", "red", "blue", "purple", "pink"];

export function AddColor() {

  const [color, setcolor] = useState("skyblue");

  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);

  const styles = {
    backgroundColor: color,
    fontSize: "30px",
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setcolor(event.target.value)}
          style={styles}
          value={color}
          type="text" placeholder='Enter a color'></input>
        <button
          onClick={() => setColorList([...colorList, color])}
        >Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>

  );
}
