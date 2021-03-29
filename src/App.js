import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Page/Register/Register';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import Login from './Page/Login/Login';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import Lifecycle from './Page/Lifecycle/Lifecycle';
import UseStateHook from './Page/Hooks/UseStateHook';
import BaiTapChonXe from './Page/Hooks/BaiTapChonXe';
import UseEffectHome from './Page/Hooks/UseEffectHome';
import ReduxHookHome from './Page/Hooks/ReduxHookHome';
import Details from './Page/Details/Details';
import HookUseCallback from './Page/Hooks/HookUseCallback';
import HookUseMemo from './Page/Hooks/HookUseMemo'
import UseRef from './Page/Hooks/UseRef';
import ParentComponent from './Page/HOC/ParentComponent';
import { HomeTemplate } from './Templates/HomeTemplate';
import { AdminTemplate } from './Templates/AdminTemplate';
import Checkout from './Page/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Loading />
        <Header />
        {/** Sử dụng switch để điều hướng đến các page khác và dùng exact để tìm kiếm chính xác từ khóa mà người dùng tìm kiếm */}
        <Switch>
          <HomeTemplate exact path="/home" Component={Home}/>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/contact" component={Contact} />
          <AdminTemplate exact path="/login" Component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/lifecycle" render={(propsRoute) => {
            {/* //Tham số chứa các thẻ props của thẻ route , muốn render các thuộc tính khác của component thì dùng cách này} */ }
            return <div>
              <h3>Component Lifecycle</h3>
              <Lifecycle {...propsRoute}></Lifecycle>
            </div>
          }} />
          <Route exact path="/usestatedemo" component={UseStateHook} />
          <Route exact path="/baitapchonxe" component={BaiTapChonXe}/>
          <Route exact path="/useEffectHome" component={UseEffectHome}/>
          <Route exact path="/reduxHookHome" component={ReduxHookHome}/>
          <Route exact path="/detail/:id" component={Details}/>
          <Route exact path="/usecallback" component={HookUseCallback}/>
          <Route exact path="/usememo" component={HookUseMemo}/>
          <Route exact path="/useref" component={UseRef}/>
          <Route exact path="/demoprops" component={ParentComponent}/>
          <Route exact path="/checkout/:id" component={Checkout}/>
          {/**Root mặc định để dưới cùng của ứng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
