import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class VKMiniAppsButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
  }

  render() {

    const {
      url,
      icon,
      title,
      description,
      style
    } = this.props

    return (
      <div style={style}>
        <a 
          href={url}
          target='_blank'
          className={styles.vk_mini_apps_button}
        >
          <img className={styles.vk_mini_apps_icon} src={icon}/>
          <span className={styles.vk_mini_apps_text}>
            <span className={styles.vk_mini_apps_title}>{title}</span> <br/>
            <span className={styles.vk_mini_apps_description}>{description}</span>
          </span>
        </a>
      </div>
    )
  }
}
