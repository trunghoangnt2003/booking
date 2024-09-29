import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function App() {
  const [count, setCount] = React.useState(0);


  return (
    <>
          <p className="text-3xl text-red-800">
              Hello world!
          </p>
          <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
<h1>I've rendered cnt {count} times!</h1>;
<button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default App
