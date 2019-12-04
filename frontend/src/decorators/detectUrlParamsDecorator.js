/* eslint-disable */
import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import qs from 'qs'
import appActions from '../redux-related/actions/appActions'
import bookingActions from '../redux-related/actions/bookingActions'
import orderActions from '../redux-related/actions/orderActions'
import getParamsFromUrl from '../utils/getParamsFromUrl'

const mapStateToProps = ({ appReducers, bookingReducers, orderReducers }) => ({
  hasUrlParamsLoaded: appReducers.hasUrlParamsLoaded,
  checkInDate: bookingReducers.checkInDate,
  checkOutDate: bookingReducers.checkOutDate,
  searchRoomType: bookingReducers.roomType, //先临时改个名字，之后重构会一并处理。
  roomRateType: bookingReducers.roomRateType,
  roomCount: bookingReducers.roomCount,
  childrenCount: bookingReducers.childrenCount,
  hotelId: bookingReducers.hotelId,
  adultsCount: bookingReducers.adultsCount,
  hotel: orderReducers.hotel,
  roomType: orderReducers.roomType,
  property: orderReducers.property,
})

const mapDispatchToProps = dispatch => {
  return {
    saveUrlParamLoadingState: bindActionCreators(appActions.saveUrlParamLoadingState, dispatch),
    saveCheckInDate: bindActionCreators(bookingActions.saveCheckInDate, dispatch),
    saveCheckOutDate: bindActionCreators(bookingActions.saveCheckOutDate, dispatch),
    saveSearchRoomType: bindActionCreators(bookingActions.saveSearchRoomType, dispatch),
    saveSearchRoomRateType: bindActionCreators(bookingActions.saveSearchRoomRateType, dispatch),
    saveRoomCount: bindActionCreators(bookingActions.saveRoomCount, dispatch),
    saveChildrenCount: bindActionCreators(bookingActions.saveChildrenCount, dispatch),
    setHotelId: bindActionCreators(bookingActions.setHotelId, dispatch),
    saveAdultsCount: bindActionCreators(bookingActions.saveAdultsCount, dispatch),
    saveHotel: bindActionCreators(orderActions.saveHotel, dispatch),
    saveProperty: bindActionCreators(orderActions.saveProperty, dispatch),
    saveRoomType: bindActionCreators(orderActions.saveRoomType, dispatch),
    savePrice: bindActionCreators(orderActions.savePrice, dispatch),
    switchDatePicker: bindActionCreators(bookingActions.switchDatePicker, dispatch),
    switchMemberFilter: bindActionCreators(bookingActions.switchMemberFilter, dispatch),
    toggleRoomTypeFilterPopup: bindActionCreators(
      bookingActions.toggleRoomTypeFilterPopup,
      dispatch
    ),
  }
}

const detectUrlParamsDecorator = WrappedComponent => {
  const result = class extends WrappedComponent {
    getParams() {
      return this.$router ? this.$router.params : getParamsFromUrl()
    }

    componentDidMount() {
      const {
        hasUrlParamsLoaded,
        saveUrlParamLoadingState,
        saveCheckInDate,
        saveCheckOutDate,
        saveSearchRoomType,
        saveSearchRoomRateType,
        saveRoomCount,
        saveChildrenCount,
        saveAdultsCount,
        saveHotel,
        setHotelId,
        saveRoomType,
        savePrice,
        saveProperty,
      } = this.props
      // 判断当前url的querystring是否已经加载过了, 只有当前应用第一次加载时才会读取querystring
      if (hasUrlParamsLoaded) {
        // 触发继承组件的生命周期事件
        super.componentDidMount && super.componentDidMount()
        return
      }

      const {
        checkInDate,
        checkOutDate,
        searchRoomType,
        roomRateType,
        roomCount,
        childrenCount,
        adultsCount,
        roomType,
        hotel,
        hotelId,
        price,
        property,
      } = this.getParams()

      // 当querystring里的参数有值时，才将其保存起来
      checkInDate && saveCheckInDate(checkInDate)
      checkOutDate && saveCheckOutDate(checkOutDate)
      searchRoomType && saveSearchRoomType(searchRoomType)
      roomRateType && saveSearchRoomRateType(roomRateType)
      roomCount && saveRoomCount(roomCount)
      childrenCount && saveChildrenCount(childrenCount)
      adultsCount && saveAdultsCount(adultsCount)
      hotel && saveHotel(hotel)
      hotelId && setHotelId(hotelId)
      roomType && saveRoomType(roomType)
      price && savePrice(price)
      property && saveProperty(property)

      // 仅将url中querystring的值保存到store一次，之后通过将hasUrlParamsLoaded的值设置成true来防止再次保存。
      saveUrlParamLoadingState(true)

      // 触发继承组件的生命周期事件
      super.componentDidMount && super.componentDidMount()
    }

    // toggle off all the pop ups when the current page did hide
    componentDidHide() {
      this.toggleOffPopups()
    }

    toggleOffPopups() {
      const { switchDatePicker, switchMemberFilter, toggleRoomTypeFilterPopup } = this.props

      switchDatePicker(false)
      switchMemberFilter(false)
      toggleRoomTypeFilterPopup(false)
    }

    navigateToWithParams(url, extraParamObj) {
      setTimeout(() => {
        const {
          checkInDate,
          checkOutDate,
          searchRoomType,
          roomRateType,
          roomCount,
          childrenCount,
          adultsCount,
          hotel,
          hotelId,
          roomType,
          price,
          property,
        } = this.props
        let queryStringObj = {
          checkInDate,
          checkOutDate,
          searchRoomType,
          roomRateType,
          roomCount,
          childrenCount,
          adultsCount,
          hotel,
          hotelId,
          roomType,
          price,
          property,
        }
        queryStringObj = Object.assign(queryStringObj, extraParamObj)

        const queryString = qs.stringify(queryStringObj)
        Taro.navigateTo({
          url: `${url}?${queryString}`,
        })
      }, 0)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(result)
}

export default detectUrlParamsDecorator
