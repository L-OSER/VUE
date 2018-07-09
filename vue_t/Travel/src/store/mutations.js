export default {
  changeCity (state, city) {
    // state指的是我们公用的数据
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
