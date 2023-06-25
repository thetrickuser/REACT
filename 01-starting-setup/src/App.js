import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    {
      desc: "Car Insurance",
      price: 294.76,
      date: new Date(2023, 3, 28),
    },
    {
      desc: "Health Insurance",
      price: 345.76,
      date: new Date(2023, 3, 29),
    },
    {
      desc: "Credit Card Bill",
      price: 3376.23,
      date: new Date(2023, 3, 28),
    },
    {
      desc: "House Loan EMI",
      price: 4590.45,
      date: new Date(2023, 3, 30),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
