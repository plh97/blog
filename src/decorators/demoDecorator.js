/* eslint-disable */

// demo演示简易化的高阶组件
const demoDecorator = WrappedComponent => {
  return class extends WrappedComponent {
    componentDidMount() {
      console.log('======== componentDidMount in demoDecorator this.$router', this.$router)

      super.componentDidMount && super.componentDidMount()
    }
  }
}

export default demoDecorator
