# vk-apps-button

> small react button component for your vk mini apps

[![NPM](https://img.shields.io/npm/v/vk-apps-button.svg)](https://www.npmjs.com/package/vk-apps-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save vk-apps-button
```

## Usage

```jsx
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
```

## License

MIT © [Gaserd](https://github.com/Gaserd)
