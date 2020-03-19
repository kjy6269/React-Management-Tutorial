import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김지영1',
    'birthday': '19900103',
    'gender': '여자1',
    'job': '회사원1'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김지영2',
    'birthday': '19900103',
    'gender': '여자2',
    'job': '회사원2'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김지영3',
    'birthday': '19900103',
    'gender': '여자3',
    'job': '회사원3'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
