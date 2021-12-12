import { Header } from './components/Header'
import { Main, Panel } from './components/Layout'
import { ProductForm } from './components/ProductForm'
import { ProductsList } from './components/ProductsList'
import { Topbar } from './components/Topbar'

function App() {
  return (
    <>
      <Header />
      <Topbar />
      <Main>
        <Panel>
          <ProductsList />
        </Panel>

        <Panel>
          <ProductForm />
        </Panel>
      </Main>
    </>
  )
}

export default App
