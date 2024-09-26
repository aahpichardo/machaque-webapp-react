import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/ModalAvisos/ModalAvisos'; // Asegúrate de importar el modal
import './Register.css'; // Importa el archivo de estilos

const Register: React.FC = () => {
  const [isModalOpenPrivacy, setModalOpenPrivacy] = useState(false);
  const [isModalOpenTerms, setModalOpenTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const openModalPrivacy = () => setModalOpenPrivacy(true);
  const closeModalPrivacy = () => setModalOpenPrivacy(false);

  const openModalTerms = () => setModalOpenTerms(true);
  const closeModalTerms = () => setModalOpenTerms(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro
  };

  return (
    <div className="registro">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper-4">Registro</div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="label" htmlFor="name">Nombre</label>
              <input type="text" id="name" className="input" required />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="surname">Apellido</label>
              <input type="text" id="surname" className="input" required />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="email">Correo</label>
              <input type="email" id="email" className="input" required />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="input" required />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="confirm-password">Confirmar contraseña</label>
              <input type="password" id="confirm-password" className="input" required />
              <p className="p">Mínimo 8 caracteres, que incluya números, mayúsculas y un carácter especial</p>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                checked={acceptedPrivacy}
                onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}
              />
              <label htmlFor="privacy" className="checkbox-label">
                He leído y acepto el <a href="#" onClick={openModalPrivacy}>aviso de privacidad</a>
              </label>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <label htmlFor="terms" className="checkbox-label">
                He leído y acepto los <a href="#" onClick={openModalTerms}>términos y condiciones</a>
              </label>
            </div>
            <div className="div-wrapper">
              <button type="submit" className="text-wrapper-9" disabled={!acceptedPrivacy || !acceptedTerms}>
                Registrarme
              </button>
            </div>
          </form>
                <Modal 
        title="Aviso de Privacidad" 
        content="Aviso de Privacidad y Confidencialidad de la Información
En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma.
1. Recopilación de DatosRecopilamos información personal que incluye, pero no se limita a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otro dato que usted ingrese al registrarse o utilizar nuestros servicios.
2. Uso de la InformaciónLa información personal proporcionada será utilizada únicamente para los fines establecidos en nuestra plataforma, tales como la gestión de su cuenta, la mejora de la experiencia del usuario, y la seguridad de la plataforma.
3. Confidencialidad y SeguridadNos comprometemos a no compartir, vender o alquilar su información personal a terceros sin su consentimiento, salvo en los casos necesarios para cumplir con obligaciones legales o proteger los derechos de la plataforma. Hemos implementado medidas de seguridad para proteger sus datos contra accesos no autorizados, pérdida o modificación.
4. Derechos del UsuarioUsted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor comuníquese con nuestro equipo a través del correo electrónico [correo de contacto].
5. Modificaciones al Aviso de PrivacidadNos reservamos el derecho de actualizar este aviso en cualquier momento. Cualquier modificación será publicada en nuestra plataforma.
Fecha de última actualización: 25/septiembre/2024" 
isOpen={isModalOpenPrivacy} 
onClose={closeModalPrivacy} 
      />
          <Modal 
            title="Términos y Condiciones" 
            content="Términos y Condiciones de Uso
El uso de la plataforma Machaque está sujeto a los siguientes términos y condiciones. Al acceder y utilizar nuestro sitio web o aplicación, usted acepta estos términos. Si no está de acuerdo, por favor no utilice la plataforma. 
1. Uso del Software. Los usuarios aceptan que el uso de la plataforma es bajo su propio riesgo. La plataforma se proporciona 'tal cual', sin ninguna garantía explícita o implícita. Nos esforzamos por ofrecer un servicio continuo y seguro, pero no garantizamos que la plataforma esté libre de errores, interrupciones o fallos de seguridad. 
2. Exención de Responsabilidad. Machaque  no se hace responsable por cualquier daño, pérdida de datos, o cualquier perjuicio derivado del uso de la plataforma o la imposibilidad de acceder a ella, incluso si hemos sido advertidos de la posibilidad de dichos daños. 
3. Limitación de Responsabilidad. En ningún caso Machaque será responsable por daños indirectos, incidentales, especiales o consecuentes, incluyendo pero no limitado a la pérdida de ganancias o datos, que resulten del uso o la imposibilidad de uso de los servicios. 
4. Modificaciones a los Términos. Nos reservamos el derecho de modificar los presentes términos en cualquier momento. Las modificaciones entrarán en vigor desde el momento en que sean publicadas en nuestra plataforma. Su uso continuado de la plataforma después de los cambios implica su aceptación de los nuevos términos. 
5. Ley Aplicable y Jurisdicción. El uso de este sitio web se regirá e interpretará de acuerdo con las leyes aplicables de México. Cualquier disputa que surja en relación con estos términos será sometida a los tribunales competentes de Chihuahua, México."
            isOpen={isModalOpenTerms} 
            onClose={closeModalTerms} 
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
