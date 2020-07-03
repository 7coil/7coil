import React, { ChangeEvent, Component } from 'react';
import styles from './index.module.scss';
import PaddingContainer from '../../../../components/PaddingContainer';
import CombineStyles from '../../../../helpers/CombineStyles';

interface Vector {
  x: number,
  y: number,
}

interface Colour {
  r: number,
  g: number,
  b: number
}

enum Tool {
  PEN = 'Pen',
  RUBBER = 'Rubber',
}

class TerminalPaint extends Component<{}, {
  width: number,
  height: number,
  scaleX: number,
  scaleY: number,
  brushWidth: number,
  brushHeight: number,
  primaryColour: Colour,
  secondaryColour: Colour,
  tool: Tool,
  exportedValue: string
}> {
  canvas = React.createRef<HTMLCanvasElement>()
  tempCanvas = React.createRef<HTMLCanvasElement>()
  ctx: CanvasRenderingContext2D
  tempCtx: CanvasRenderingContext2D
  painting: boolean
  previousPoint: Vector

  constructor(props) {
    super(props);

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.tempSave = this.tempSave.bind(this);
    this.tempRestore = this.tempRestore.bind(this);
    this.setColour = this.setColour.bind(this);
    this.export = this.export.bind(this);
    this.painting = false;
    this.previousPoint = null;

    this.state = {
      width: 100,
      height: 40,
      scaleX: 8,
      scaleY: 16,
      brushWidth: 1,
      brushHeight: 1,
      primaryColour: { r: 0, g: 0, b: 0 },
      secondaryColour: { r: 255, g: 255, b: 255 },
      tool: Tool.PEN,
      exportedValue: 'Click an export button to export your project.'
    }
  }
  setColour(colour: Colour, primary: boolean = true) {
    return (e) => {
      e.preventDefault();
      
      if (primary) {
        this.setState({
          primaryColour: colour
        })
      } else {
        this.setState({
          secondaryColour: colour
        })
      }
    }
  }
  componentDidMount() {
    document.addEventListener('mouseup', this.mouseUp)
    this.ctx = this.canvas.current.getContext('2d')
    this.tempCtx = this.tempCanvas.current.getContext('2d')
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.mouseUp)
  }
  export(template: string) {
    return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      let i = 0;
      let j = 0;
      let beforeColour = 'transparent';
      let outString = ''

      for (j = 0; j < this.state.height; j += 1) {
        for (i = 0; i < this.state.width; i += 1) {
          const colourData = this.ctx.getImageData(i, j, 1, 1).data
          let currentColour;
          let outputColour;

          if (colourData[3]) {
            const pixelColour = template
              .replace('rrr', colourData[0].toString())
              .replace('ggg', colourData[1].toString())
              .replace('bbb', colourData[2].toString())
            
            currentColour = pixelColour
            outputColour = pixelColour
          } else {
            currentColour = 'transparent'
            outputColour = '\\x1b[0m'
          }

          if (beforeColour !== currentColour) {
            beforeColour = currentColour
            outString += outputColour
          }

          outString += ' '
        }
        outString += '\n'
      }

      this.setState({
        exportedValue: outString
      })
    }
  }
  tempSave() {
    const canvasWidth = this.state.width * this.state.scaleX
    const canvasHeight = this.state.height * this.state.scaleY
    this.tempCanvas.current.width = canvasWidth
    this.tempCanvas.current.height = canvasHeight
    this.tempCtx.clearRect(0, 0, canvasWidth, canvasHeight)
    this.tempCtx.drawImage(this.canvas.current, 0, 0)
  }
  tempRestore() {
    if (this.tempCanvas.current.width === 0) return;
    if (this.tempCanvas.current.height === 0) return;
    this.ctx.drawImage(this.tempCanvas.current, 0, 0)
  }
  drawPoint({ x, y }: Vector) {
    x -= Math.floor(this.state.brushWidth / 2)
    y -= Math.floor(this.state.brushHeight / 2)

    if (this.state.tool === Tool.PEN) {
      this.ctx.fillRect(x, y, this.state.brushWidth, this.state.brushHeight)
    } else if (this.state.tool === Tool.RUBBER) {
      this.ctx.clearRect(x, y, this.state.brushWidth, this.state.brushHeight)
    }
  }
  getCanvasCoordFromPointer(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const canvasBounds = this.canvas.current.getBoundingClientRect()
    return {
      x: Math.floor((e.clientX - canvasBounds.left) / this.state.scaleX),
      y: Math.floor((e.clientY - canvasBounds.top) / this.state.scaleY),
    }
  }
  mouseDown(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const { x, y } = this.getCanvasCoordFromPointer(e)

    if (e.button === 0) {
      this.ctx.fillStyle = `rgb(${this.state.primaryColour.r},${this.state.primaryColour.g},${this.state.primaryColour.b})`
    } else if (e.button === 2) {
      this.ctx.fillStyle = `rgb(${this.state.secondaryColour.r},${this.state.secondaryColour.g},${this.state.secondaryColour.b})`
    } else {
      this.ctx.fillStyle = 'black'
    }

    this.painting = true
    this.drawPoint({ x, y })
  }
  mouseUp() {
    this.painting = false
  }
  mouseMove(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    if (this.painting) {
      const { x, y } = this.getCanvasCoordFromPointer(e)
      this.drawPoint({ x, y })
    }
  }
  handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const target = e.target
    const value = target.value
    const name = target.name

    // How do you please TypeScript?!?
    if (name === 'scaleX') {
      this.setState({
        scaleX: Math.max(1, parseInt(value, 10))
      })
    } else if (name === 'scaleY') {
      this.setState({
        scaleY: Math.max(1, parseInt(value, 10))
      })
    } else if (name === 'brushWidth') {
      this.setState({
        brushWidth: Math.max(1, parseInt(value, 10))
      })
    } else if (name === 'brushHeight') {
      this.setState({
        brushHeight: Math.max(1, parseInt(value, 10))
      })
    } else if (name === 'width') {
      this.tempSave()
      this.setState({
        width: Math.max(1, parseInt(value, 10))
      }, () => {
        this.tempRestore()
      })
    } else if (name === 'height') {
      this.tempSave()
      this.setState({
        height: Math.max(1, parseInt(value, 10))
      }, () => {
        this.tempRestore()
      })
    } else if (name === 'tool') {
      const tool = value as Tool

      this.setState({
        tool
      })
    }
  }
  render() {
    return (
      <PaddingContainer>
        <div>
          <h2>Properties</h2>
          <div>
            <input name="scaleX" type="number" step="1" min="1" max="2048" value={this.state.scaleX} onChange={this.handleInputChange}></input>
            <label htmlFor="scaleX">Width of character</label>
          </div>
          <div>
            <input name="scaleY" type="number" step="1" min="1" max="2048" value={this.state.scaleY} onChange={this.handleInputChange}></input>
            <label htmlFor="scaleY">Height of character</label>
          </div>
          <div>
            <input name="width" type="number" step="1" min="1" max="2048" value={this.state.width} onChange={this.handleInputChange}></input>
            <label htmlFor="width">Width of canvas (in characters)</label>
          </div>
          <div>
            <input name="height" type="number" step="1" min="1" max="2048" value={this.state.height} onChange={this.handleInputChange}></input>
            <label htmlFor="height">Height of canvas (in characters)</label>
          </div>
          <div>
            <input name="brushWidth" type="number" step="1" min="1" max="2048" value={this.state.brushWidth} onChange={this.handleInputChange}></input>
            <label htmlFor="brushWidth">Width of brush (in characters)</label>
          </div>
          <div>
            <input name="brushHeight" type="number" step="1" min="1" max="2048" value={this.state.brushHeight} onChange={this.handleInputChange}></input>
            <label htmlFor="brushHeight">Height of brush (in characters)</label>
          </div>
        </div>
        <h2>Colours</h2>
        <div className={styles.colourButtons}>
          <button className={CombineStyles(styles.colourButton, styles.darkButton)} style={{ backgroundColor: 'rgb(0, 0, 0)' }} onClick={this.setColour({ r: 0, g: 0, b: 0 }, true)} onContextMenu={this.setColour({ r: 0, g: 0, b: 0 }, false)}></button>
          <button className={CombineStyles(styles.colourButton, styles.darkButton)} style={{ backgroundColor: 'rgb(128, 0, 0)' }} onClick={this.setColour({ r: 128, g: 0, b: 0 }, true)} onContextMenu={this.setColour({ r: 128, g: 0, b: 0 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(0, 128, 0)' }} onClick={this.setColour({ r: 0, g: 128, b: 0 }, true)} onContextMenu={this.setColour({ r: 0, g: 128, b: 0 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(128, 128, 0)' }} onClick={this.setColour({ r: 128, g: 128, b: 0 }, true)} onContextMenu={this.setColour({ r: 128, g: 128, b: 0 }, false)}></button>
          <button className={CombineStyles(styles.colourButton, styles.darkButton)} style={{ backgroundColor: 'rgb(0, 0, 128)' }} onClick={this.setColour({ r: 0, g: 0, b: 128 }, true)} onContextMenu={this.setColour({ r: 0, g: 0, b: 128 }, false)}></button>
          <button className={CombineStyles(styles.colourButton, styles.darkButton)} style={{ backgroundColor: 'rgb(128, 0, 128)' }} onClick={this.setColour({ r: 128, g: 0, b: 128 }, true)} onContextMenu={this.setColour({ r: 128, g: 0, b: 128 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(0, 128, 128)' }} onClick={this.setColour({ r: 0, g: 128, b: 128 }, true)} onContextMenu={this.setColour({ r: 0, g: 128, b: 128 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(192, 192, 192)' }} onClick={this.setColour({ r: 192, g: 192, b: 192 }, true)} onContextMenu={this.setColour({ r: 192, g: 192, b: 192 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(128, 128, 128)' }} onClick={this.setColour({ r: 128, g: 128, b: 128 }, true)} onContextMenu={this.setColour({ r: 128, g: 128, b: 128 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(255, 0, 0)' }} onClick={this.setColour({ r: 255, g: 0, b: 0 }, true)} onContextMenu={this.setColour({ r: 255, g: 0, b: 0 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(0, 255, 0)' }} onClick={this.setColour({ r: 0, g: 255, b: 0 }, true)} onContextMenu={this.setColour({ r: 0, g: 255, b: 0 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(255, 255, 0)' }} onClick={this.setColour({ r: 255, g: 255, b: 0 }, true)} onContextMenu={this.setColour({ r: 255, g: 255, b: 0 }, false)}></button>
          <button className={CombineStyles(styles.colourButton, styles.darkButton)} style={{ backgroundColor: 'rgb(0, 0, 255)' }} onClick={this.setColour({ r: 0, g: 0, b: 255 }, true)} onContextMenu={this.setColour({ r: 0, g: 0, b: 255 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(255, 0, 255)' }} onClick={this.setColour({ r: 255, g: 0, b: 255 }, true)} onContextMenu={this.setColour({ r: 255, g: 0, b: 255 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(0, 255, 255)' }} onClick={this.setColour({ r: 0, g: 255, b: 255 }, true)} onContextMenu={this.setColour({ r: 0, g: 255, b: 255 }, false)}></button>
          <button className={styles.colourButton} style={{ backgroundColor: 'rgb(255, 255, 255)' }} onClick={this.setColour({ r: 255, g: 255, b: 255 }, true)} onContextMenu={this.setColour({ r: 255, g: 255, b: 255 }, false)}></button>
        </div>
        <div className={styles.selectedColours}>
          <div className={styles.selectedSecondaryColour} style={{backgroundColor: `rgb(${this.state.secondaryColour.r},${this.state.secondaryColour.g},${this.state.secondaryColour.b})`}}></div>
          <div className={styles.selectedPrimaryColour} style={{backgroundColor: `rgb(${this.state.primaryColour.r},${this.state.primaryColour.g},${this.state.primaryColour.b})`}}></div>
        </div>
        <h2>Tools</h2>
        <select name="tool" value={this.state.tool} onChange={this.handleInputChange}>
          {
            Object.entries(Tool)
              .map(([key, value]) => 
                <option value={value} key={key}>{value}</option>
              )
          }
        </select>
        <h2>Canvas</h2>
        <canvas
          ref={this.canvas}
          className={styles.canvas}
          width={this.state.width}
          height={this.state.height}
          style={{
            width: this.state.width * this.state.scaleX,
            height: this.state.height * this.state.scaleY,
          }}
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onContextMenu={e => e.preventDefault()}>
        </canvas>
        <canvas
          ref={this.tempCanvas}
          className={styles.tempCanvas}>
        </canvas>
        <h2>Generation Tools</h2>
        <div>
          <button onClick={this.export('\\x1b[48;2;rrr;ggg;bbbm')}>JavaScript Escape Sequence</button>
        </div>
        <textarea value={this.state.exportedValue} className={styles.exportedValue}></textarea>
      </PaddingContainer>
    )
  }
}

export {
  TerminalPaint
};

