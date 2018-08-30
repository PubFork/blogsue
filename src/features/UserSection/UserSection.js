import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
import SectionItem from '../../components/SectionItem'
import { getUser } from '../../utils/github'

import './userSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { avatar_url, name, login } = this.props.userInfo
    const { isDark } = this.props
    const { description } = _config
    return (
      <SectionItem>
        {avatar_url && (
          <div className="user-sec-container">
            <Link to="/">
              <img className="user-avator" alt="avator" src={avatar_url} />
            </Link>
            <h2 className="user-name">{name || login}</h2>
            <p className="user-desc">{description}</p>
            <Button
              icon={isDark ? 'flash' : 'moon'}
              className="bp3-fill"
              onClick={this.props.changePageColor.bind(
                this,
                !_config.pageConfApi.get().isDarkMode
              )}>
              {isDark ? '日间' : '夜间'}
              模式
            </Button>
          </div>
        )}
      </SectionItem>
    )
  }

  async componentWillMount() {
    this.props.changePageColor(_config.pageConfApi.get().isDarkMode)
    let userInfo = (await getUser(_config.user)).data
    this.setState({
      userInfo
    })
    this.props.updateUserInfo(userInfo)
  }
}
