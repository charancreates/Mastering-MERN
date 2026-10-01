import "./App.css";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter";
import { MyCard } from "./components/MyCard";
import { MyList } from "./components/MyList";
import { OrderForm } from "./components/OrderForm";
import type { Coffee } from "./types";

const menu: Coffee[] = [
  { id: 1, name: "filter", price: 300 },
  { id: 2, name: "normal", price: 20 },
  { id: 3, name: "black", price: 200 },
];

function App() {
  return (
    <>
      <div>
        <h1>vite + react</h1>
        <MyCard name="HeadPhones" price={5000} />
        <MyCard name="iphone" price={50000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <MyList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Galactic Clasher" footer={<button>yoyo</button>}></Card>
      </div>
    </>
  );
}

export default App;
