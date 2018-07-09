let defaultCity = '广州'
// 防止有些浏览器开了禁止读取local,和开了隐私模式，会抛除异常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
