import React from 'react'

var InfoPage = React.createClass({
  render() {
    let buttons = null
    if (this.props.buttons) {
      buttons = this.props.buttons.map((btn, index) => {
        return <button onClick={btn.action} key={index}>{btn.message}</button>
      })
    }
    return (
      <div className="info-page">
        <h3>
          {this.props.message}
        </h3>
        <h4>
          {this.props.info}
        </h4>
        <div className="buttons">
          {buttons}
        </div>
      </div>
    )
  }
})

export default InfoPage
