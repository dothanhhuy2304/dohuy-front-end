import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Nav/Header';
import Footer from './components/Nav/Footer';
import StudentComponent from './components/StudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import PageNotFound from './components/page/PageNotFound';
import {Provider} from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store} >
      <Router>
            <Header/>
              <div className="container">
                  <Switch>
                      <Route path="/" exact={true} component= {StudentComponent} />
                      <Route path="/student" exact={true} component= {StudentComponent}/>
                      <Route path="/create-student" exact={true} component= {CreateStudentComponent}/>
                      <Route path="/update-student/:id" exact={true} component= {UpdateStudentComponent}/>
                      <Route path="/view-student/:id" exact={true} component= {ViewStudentComponent}/>
                      <Route path="/" exact={false} component= {PageNotFound} />
                  </Switch>
              </div>
            <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
