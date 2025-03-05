import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_1lxyd3w',       // Service ID
        'template_k36fp1x',      // Template ID
        formData,                // Datos del formulario
        'QTO1HqMFnRQdXMmaU',
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contáctame</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Tu email"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          required
          className="p-2 border border-gray-300 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;