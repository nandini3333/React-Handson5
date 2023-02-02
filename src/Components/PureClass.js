

import { PureComponent, useState } from 'react';

class Greeting extends PureComponent {
  render() {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return (
      
        <h3>Hello{this.props.name && ', '}{this.props.name}!</h3>);
    
  }
}

function PureClass() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <h1>Class Component</h1>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

export default PureClass

