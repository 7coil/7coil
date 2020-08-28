import React, { ChangeEvent, Component, RefObject, ReactEventHandler } from 'react';
import PaddingContainer from '../../../../components/PaddingContainer';
import styles from './index.module.scss';
import ExcelJS from 'exceljs';
import CombineStyles from '../../../../helpers/CombineStyles'

const COLOUR_HEX = [
  '00FF0000', '0000FF00', '000000FF'
]

class PixelSpreadsheet extends Component<{}, { height: number, image: HTMLImageElement }> {
  canvas: RefObject<HTMLCanvasElement>
  link: RefObject<HTMLAnchorElement>

  constructor(props) {
    super(props)

    this.onFileChange = this.onFileChange.bind(this)
    this.canvas = React.createRef<HTMLCanvasElement>()
    this.handleSampleSize = this.handleSampleSize.bind(this)
    this.drawImageToCanvas = this.drawImageToCanvas.bind(this)
    this.generate = this.generate.bind(this)
    this.getAspectRatio = this.getAspectRatio.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.link = React.createRef<HTMLAnchorElement>();

    this.state = {
      height: 100,
      image: null
    }
  }

  getWidth() {
    return Math.floor(this.state.height * this.getAspectRatio())
  }

  getAspectRatio() {
    return this.state.image.width / this.state.image.height
  }

  handleSampleSize(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    const parsedValue = Math.max(1, Math.min(this.state.image.height, parseInt(value, 10)))

    if (isNaN(parsedValue)) return

    this.setState({
      height: parsedValue,
    })

    this.drawImageToCanvas()
  }

  generate() {
    const workbook = new ExcelJS.Workbook();

    workbook.creator = 'https://leondrolio.com';
    workbook.created = new Date();
    workbook.modified = new Date();

    const spreadsheet = workbook.addWorksheet('Image')
    const ctx = this.canvas.current.getContext('2d')
    const data = ctx.getImageData(0, 0, this.getWidth(), this.state.height)

    for (let j = 0; j < data.height; j += 1) {
      const excelRow = j * 3;
      const r = []
      const g = []
      const b = []

      for (let i = 0; i < data.width; i += 1) {
        // Set width for all the columns
        spreadsheet.getColumn(i + 1).width = 3.57
        const pixelIndex = 4 * (j * data.width + i)

        r.push(data.data[pixelIndex + 0])
        g.push(data.data[pixelIndex + 1])
        b.push(data.data[pixelIndex + 2])
      }

      // console.log([r, g, b])
      spreadsheet.addRows([r, g, b])

      // Set height, conditional formatting and font for the rows
      for (let k = 0; k < 3; k += 1) {
        const row = spreadsheet.getRow(excelRow + k + 1)
        row.height = 7.5
        row.font = {
          size: 6
        }
        spreadsheet.addConditionalFormatting({
          ref: `${excelRow + k + 1}:${excelRow + k + 1}`,
          rules: [
            {
              type: 'colorScale',
              cfvo: [
                {
                  type: 'num',
                  value: 0
                },
                {
                  type: 'num',
                  value: 255
                }
              ],
              color: [
                {
                  argb: '00000000'
                },
                {
                  argb: COLOUR_HEX[k]
                },
              ],
              priority: 0
            }
          ]
        })
      }
    }

    workbook.xlsx.writeBuffer()
      .then((buffer) => {
        const bytes = new Uint8Array(buffer)
        const blob = new Blob([bytes], { type: 'application/zip' })
        this.link.current.download = 'spreadsheet.xlsx'
        this.link.current.href = URL.createObjectURL(blob)
        this.link.current.click()
      })
  }

  drawImageToCanvas() {
    this.canvas.current.width = this.getWidth()
    this.canvas.current.height = this.state.height
    const ctx = this.canvas.current.getContext('2d')

    ctx.drawImage(this.state.image, 0, 0, this.getWidth(), this.state.height)
  }

  onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e?.target?.files

    if (files && files[0]) {
      const fileReader = new FileReader();
      const image = new Image();
      fileReader.readAsDataURL(files[0])
      fileReader.onload = () => image.src = fileReader.result as string
      image.onload = () => {
        this.setState({
          height: Math.min(100, image.height),
          image
        }, this.drawImageToCanvas)
      }
    }
  }
  render() {
    return (
      <PaddingContainer>
        <h1>Pixel Spreadsheet</h1>
        <p>
          A recreation of Matt Parker&apos;s <a href="https://www.think-maths.co.uk/spreadsheet" target="_blank">image-to-spreadsheet</a> online generator
        </p>
        <p>
          This version uses <b>exceljs</b> and HTML canvas to convert images into Microsoft Excel spreadsheets. No images are sent to any external servers, as processing is all done on your computer.
        </p>
        <h2>Properties</h2>
        <div className={styles.inputFields}>
          <div className={styles.inputField}>
            <label htmlFor="fileUpload">File Upload</label>
            <input name="fileUpload" type="file" onChange={this.onFileChange}></input>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="height">Output Resolution (height)</label>
            <input type="number" onChange={this.handleSampleSize} name="height" value={this.state.height} disabled={this.state.image === null}></input>
            <small>Resolutions greater than 256 is not recommended</small>
          </div>
        </div>
        <div>
          <button onClick={this.generate} disabled={this.state.image === null}>Download Spreadsheet</button>
        </div>
        <h2>Preview</h2>
        <canvas className={
          CombineStyles(styles.canvas, this.state.height < 256 && styles.lowResolution)
        } ref={this.canvas}></canvas>
        <a ref={this.link} style={{visibility: 'hidden'}}>Download</a>
      </PaddingContainer>
    )
  }
}

export { PixelSpreadsheet };

