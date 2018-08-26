import React from 'react'

import Header from '../features/nav'
import Gitalk from '../features/gitalk/Gitalk'
import SectionLeft from '../features/sectionLeft'
import SectionRight from '../features/sectionRight'

export default () => (
  <div>
    <Header />
    <div id="content">
      <SectionLeft />
      <SectionRight />
    </div>
  </div>
)
