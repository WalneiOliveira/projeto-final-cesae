import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import NavBar from '../components/Navbar';



const Form = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    const fetchAllForms = async () => {
      try {
        const res = await axios.get('http://localhost:8800/form');
        // Extrair os dados da resposta antes de definir o estado
        const formData = res.data;
        setForm(formData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllForms();
  }, []);

  return (
    <>
      <NavBar />
      <Table data={form} />
    </>
  );
};

export default Form;
