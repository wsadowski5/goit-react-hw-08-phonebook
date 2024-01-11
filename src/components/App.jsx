// import { ContactsList } from './ContactsList/ContactsList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';




import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import Contacts from 'pages/Contacts/Contacts';





// import css from './App.module.css';

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <h1 className={css.containerHeader}>Phonebook</h1>
//       <h2>Add contact</h2>
//       <ContactForm />
//       <Filter />
//       <ContactsList />
//     </div>
//   );
// };

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  );
};
