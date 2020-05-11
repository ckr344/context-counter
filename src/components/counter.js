import React from 'react'
import CounterContext from '../contexts/counter'

// Componentをreturnさせるときに => のあとは丸括弧になる
const Counter = () => (
  // CounterContext.ConsumerというContextは中で関数を書くのがルール。この関数の引数にsrc/index.jsで設定したvalue等の値を受け取ることができる。
  // Consumerは値を受け取ることが前提となっている。受け取り方は関数の引数である必要がある。
  // CounterContext.Providerでラップされている場合のみCounterContext.Consumerが使える
  <CounterContext.Consumer>
    {
      // ここがその引数の値
      ({ count, increment, decrement }) => {
        return (
          <React.Fragment>
            <div>count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </React.Fragment>
        )
      }
    }
  </CounterContext.Consumer>
)

export default Counter