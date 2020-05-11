// ContextはReactから提供されているのでImport
import { createContext } from 'react'

// createContextは関数になるので、この関数を使ってContextを作成
const CounterContext = createContext()

// 作成したContextを外部のファイルでも使えるようにExport
export default CounterContext