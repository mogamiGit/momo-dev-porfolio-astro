import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputCustom from '../atoms/Inputs/inputCustom'
import TextAreaCustom from '../atoms/Inputs/textAreaCustom'
import Button from '../atoms/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    middle_name: '', 
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDisabled = !formData.from_name || !formData.from_email || !formData.message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.middle_name) {
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ from_name: '', from_email: '', message: '', middle_name: '' });
      return;
    }

    try {
      const response = await emailjs.send(
        'service_1lxyd3w',       // Service ID
        'template_k36fp1x',      // Template ID
        formData,                // Datos del formulario
        'QTO1HqMFnRQdXMmaU',
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ from_name: '', from_email: '', message: '', middle_name: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className='pt-6 border-t border-gray-300 dark:border-gray-500'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputCustom
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Jane Doe*"
            required={true}
            inputName='Tu nombre'
          />
          <InputCustom
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="jane.doe@email.com*"
            required={true}
            inputName='Tu email'
          />
          <TextAreaCustom
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¡Hola! Cuéntame tu idea o consulta... Estoy lista para escucharte.*"
            required
            inputName='Tu mensaje'
          />
          <input
            type="text"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            placeholder="Middle name"
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              opacity: 0,
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          <Button
            type="submit"
            text='Enviar formulario'
            className='mt-3'
            disabled={isDisabled}
          />
        </form>
      </div>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;
