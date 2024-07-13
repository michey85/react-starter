import { Form } from './components/Form/Form';
import { Input } from './components/Input';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <Form>
        <Input type="text" name="name" label="Name" />
      </Form>
    </div>
  );
};

export default App;
