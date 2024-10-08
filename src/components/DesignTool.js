import React, { useState } from 'react';
import './DesignTool.css';

const DesignTool = () => {
  const [design, setDesign] = useState({
    jewelleryType: '',
    baseMetal: '',
    goldKwt: '',
    size: '',
    gemstone: '',
    stoneType: '',
    stoneSize: '',
  });

  const handleChange = (e) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    // Add design generation logic here
    console.log('Design generated:', design);
  };

  return (
    <div className="design-tool container">
      <h1>Design Tool</h1>
      <form>
        <div>
          <label>Type of Jewellery:</label>
          <input type="text" name="jewelleryType" value={design.jewelleryType} onChange={handleChange} />
        </div>
        <div>
          <label>Type of Base Metal:</label>
          <input type="text" name="baseMetal" value={design.baseMetal} onChange={handleChange} />
        </div>
        <div>
          <label>KWT if Gold:</label>
          <input type="text" name="goldKwt" value={design.goldKwt} onChange={handleChange} />
        </div>
        <div>
          <label>Size of Ring/Length of Necklace:</label>
          <input type="text" name="size" value={design.size} onChange={handleChange} />
        </div>
        <div>
          <label>Type of Gemstone:</label>
          <input type="text" name="gemstone" value={design.gemstone} onChange={handleChange} />
        </div>
        <div>
          <label>Lab or Natural Stones:</label>
          <input type="text" name="stoneType" value={design.stoneType} onChange={handleChange} />
        </div>
        <div>
          <label>Desired Stone Size (mm):</label>
          <input type="text" name="stoneSize" value={design.stoneSize} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleGenerate}>Generate</button>
      </form>
    </div>
  );
};

export default DesignTool;
