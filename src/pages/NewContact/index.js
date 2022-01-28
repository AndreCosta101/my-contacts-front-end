import PageHeader from '../../components/PageHeader/index';

import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
      />

    </>
  );
}
