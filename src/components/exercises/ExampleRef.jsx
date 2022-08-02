import React, { useRef } from 'react';

export const ExampleRef = () => {
  const text = 'Hola Mundo';

  const object1 = {
    id: 1,
    name: 'Jamon',
    age: '41',
    sex: 'prefiero no decirlo',
  };

  return (
    <>
      <h1 className="text-center">Practicando ando</h1>
      <hr />
      <p>{text}</p>

      <hr />
      <pre>{JSON.stringify(object1)}</pre>

      <hr />
      <p>
        <strong>Identificador:</strong> {object1.id}
      </p>
      <p>
        <strong>Nombre:</strong> {object1.name}
      </p>
      <p>
        <strong>Edad:</strong> {object1.age}
      </p>
      <p>
        <strong>Sexo:</strong> {object1.sex}
      </p>

      <hr />
    </>
  );
};
