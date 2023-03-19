import React, { Component } from 'react'
import TextNote from './text-note'
import ImageNote from './image-note'

class Board extends Component {
  eachNote(txtNote) {
    return (<TextNote
              key={txtNote.id}
              id={txtNote.id}
              position={txtNote.position}
              editing={txtNote.editing}
              onTxtNoteDrag={this.props.onTxtNoteDrag}
              onTxtNoteToggle={this.props.onTxtNoteToggle}
              onTxtNoteRemove={this.props.onTxtNoteRemove}
              onTxtNoteSave={this.props.onTxtNoteSave}
              onColorChange={this.props.onColorChange}
              color={txtNote.color}
              note={txtNote.note}
            />)
  }

  eachImage(imgNote) {
    return (<ImageNote
              key={imgNote.id}
              id={imgNote.id}
              src={imgNote.src}
              position={imgNote.position}
              editing={imgNote.editing}
              imgWidth={imgNote.imgWidth}
              imgHeight={imgNote.imgHeight}
              onImgNoteDrag={this.props.onImgNoteDrag}
              onImgNoteToggle={this.props.onImgNoteToggle}
              onImgNoteRemove={this.props.onImgNoteRemove}
              onImgNoteSave={this.props.onImgNoteSave}
            />)
  }

  render() {
    return (
      <div>
        {
          !this.props.activeBoard ? '' : 

          <div className="board" style={{height: '100vh', width: '100%', position: 'relative', padding: '10px'}}>
            {this.props.activeBoard.txtNotes.map(this.eachNote, this)}
            {this.props.activeBoard.imgNotes.map(this.eachImage, this)}
          </div>
        }
      </div>
    )
  }
}

export default Board
