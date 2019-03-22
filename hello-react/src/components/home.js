import React from 'react'; // 固定引入
// 组件写法1 无状态组件
// 无状态组件：1、无需state,即不处理用户的输入，组件的所有的数据都是依赖props传入的 2、不需要用到生命周期函数.
// 无状态组件 写到某一天 想加入生命周期 需要高阶处理 return class xxx extends Component
const Home = (props) => {
  return (
    <div className="home">
      Home {'我是home'} {props.homeLink}
    </div>
  );
}

export default Home