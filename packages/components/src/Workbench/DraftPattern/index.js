import React, { useState } from 'react'
import Draft from '../../Draft'
import Zoombox from '../Zoombox'
import Design from '../Design'
import fileSaver from 'file-saver'
import theme from '@freesewing/plugin-theme'
import Events from './Events'

const DraftPattern = (props) => {
  const svgToFile = (svg) => {
    const blob = new Blob([svg], {
      type: 'image/svg+xml;charset=utf-8'
    })
    fileSaver.saveAs(blob, 'freesewing-' + props.config.name + '.svg')
  }

  if (props.svgExport) {
    svgToFile(
      new props.Pattern({
        ...props.gist.settings,
        embed: false
      })
        .use(theme)
        .draft()
        .render()
    )
    props.setSvgExport(false)
  }

  let focusCount = 0
  if (focus !== null) {
    for (let p of Object.keys(focus)) {
      for (let i in focus[p].points) focusCount++
      for (let i in focus[p].paths) focusCount++
      for (let i in focus[p].coords) focusCount++
    }
  }

  return (
    <section>
      <Draft
        {...props.patternProps}
        design={props.design}
        focus={props.focus}
        raiseEvent={props.raiseEvent}
        viewBox={props.viewBox}
        className="freesewing draft shadow"
      />
      <Events events={props.patternProps.events} />
    </section>
  )
}

export default DraftPattern
