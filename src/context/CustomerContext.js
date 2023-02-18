import { createContext, useState, useEffect } from "react";
const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/customers");
      const json = await res.json();

      setCustomer(json);
    };
    fetchData();
  }, []);

  const deleCustomer = async (id) => {
    await fetch(`http://localhost:3001/customers/${id}`, { method: "DELETE" });
    setCustomer(customers.filter((customer) => customer.id !== id));
  };
  const addCustomer = async ({ name, details, gender, rating }) => {
    const response = await fetch("http://localhost:3001/customers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, details, gender, rating }),
    });
    const data = response.json();
    setCustomer([data, ...customers]);
  };
  return (
    <CustomerContext.Provider value={{ customers, deleCustomer, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
export default CustomerContext;
