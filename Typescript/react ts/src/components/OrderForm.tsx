import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Filter");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Coffee Name</label>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label>Cups</label>
        <input
          type="number"
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
          }
        />
        <button type="submit">Place order</button>
      </form>
    </div>
  );
}
