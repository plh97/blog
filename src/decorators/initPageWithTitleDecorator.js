import { connect } from '@tarojs/redux'

const mapStateToProps = ({ accountReducers }) => {
  return {
    currentUser: accountReducers.currentUser,
  }
}

const initPageWithTitleDecorator = title => WrappedComponent => {
  const result = class extends WrappedComponent {
    componentDidShow() {
      const { currentUser } = this.props
      document.title = title

      // add oneX tracking for page
      if (currentUser) {
        const { openId } = currentUser
        typeof _jinit == 'function' && _jinit(openId || '')
      }

      super.componentDidShow && super.componentDidShow()
    }
  }
  return connect(
    mapStateToProps,
    null
  )(result)
}

export default initPageWithTitleDecorator
