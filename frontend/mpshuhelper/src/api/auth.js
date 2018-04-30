import {
  http
} from '../http'

// function getUserToken(code) {
//   // wx.showNavigationBarLoading()
//   http
//     .get(`/auth/mp/app?code=${code}&source=shuhelper_mp_app`)
//     .then(res => {
//       http.config.headers['Authorization'] =
//         'Bearer ' + res.data.token
//     })
//     .catch(err => {
//       console.log(err)
//       wx.hideNavigationBarLoading()
//       // if (err.response.data.needLogin) {
//       //   // wx.setStorageSync('authID', err.response.data.authID)
//       //   // wx.hideLoading()
//       //   wx.showModal({
//       //     title: '提示',
//       //     content: '初次使用，需要绑定一卡通账号',
//       //     success: function(res) {
//       //       if (res.confirm) {
//       //         wx.redirectTo({
//       //           url: `/pages/login/main?authID=${err.response.data.authID}`
//       //         })
//       //       } else if (res.cancel) {
//       //         console.log('用户点击取消')
//       //       }
//       //     }
//       //   })
//       // }
//     })
// }
export function login(cb, errCb) {
  wx.login({
    success: res => {
      http
        .get(`/auth/mp/app?code=${res.code}&source=shuhelper_mp_app`)
        .then(resp => {
          http.config.headers['Authorization'] =
            'Bearer ' + resp.token
          console.log('success log in with token')
          cb(resp)
        })
        .catch(err => {
          console.log(err)
          errCb(err)
        })
    }
  })
}
export function loginWithAuthID() {

}
