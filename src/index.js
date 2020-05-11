import React from 'react';
import ReactDOM from 'react-dom';

// CounterContextを読み込むために記述
// 大規模アプリでは細かく分ける
import CounterContext from './contexts/counter'

// Counter Componentを読み込むために記述
// 大規模アプリでは細かく分ける
import Counter from './components/counter'

// スタイリング(基本不要)
// import './index.css';
// Componentは基本オリジナルで作成するので削除
// import App from './App';
// serviceWorkerも不要
// import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  // constructorでpropsを受け取る
  constructor(props) {
    // superでpropsを与える
    super(props)

    // このComponentでincrementとdecrementの挙動を定義するためbindingを定義
    // ①
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

    this.state = {
      // counterの初期化
      count: 0,
      // incrementとdecrementの処理の登録
      increment: this.increment,
      decrement: this.decrement
    }
  }

  // ①でbindしたメソッドを定義する
  increment() {
    this.setState({count: this.state.count + 1})
  }
  decrement() {
    this.setState({count: this.state.count - 1})
  }

  // 最後にrenderメソッドを定義する
  // このrenderの中でImportしたCounterContextを使うこととなる
  // value={this.state}でcounterの値とincrement/decrementの処理を渡す
  // CounterContext.ProviderでラップしたComponentの中で渡したvalueの値を扱えるようになる
  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker削除に伴い削除
// serviceWorker.unregister();
