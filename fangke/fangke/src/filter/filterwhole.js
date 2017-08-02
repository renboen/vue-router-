/**
 * Created by rbn on 2017/7/21.
 */
export default {
  install: function (Vue, options) {
    // 添加的内容写在这个函数里面
    Vue.filter("sum", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
      return value + 4;
    });


    Vue.filter("change", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
      return value + "我变了";
    });



    Vue.prototype.test = function () {
        alert(123)
    }


    Vue.prototype.bus=new Vue()

    // Vue.test2 = function () {
    //   alert(567)
    // }
    // Vue.bus=new Vue()

    Vue.config.keyCodes={
      uu:112
    }
  }
};



