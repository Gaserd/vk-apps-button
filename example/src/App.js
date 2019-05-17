import React, { Component } from 'react'

import VKMiniAppsButton from 'vk-apps-button'

export default class App extends Component {
  render () {
    return (
      <div>
        <VKMiniAppsButton 
          url={'https://vk.com/aviatickets'}
          title={'Поиск авиабилетов'}
          description={'Экономь на авиабилетах!'}
          style={{ margin : 20 }}
          icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/768px-VK.com-logo.svg.png'}
        />
      </div>
    )
  }
}
