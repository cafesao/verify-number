import { useState } from 'react';
import verifyDDD from './functions/verifyDDD';
import verifyOperator from './functions/verifyOperator';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [state, setState] = useState<string>('');
  const [operator, setOperator] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberFormat = event.target.value.replace(/\D/g, '');
    setNumber(Number(numberFormat));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = verifyDDD(number);
    const operator = verifyOperator(number);
    if (!state || !operator) {
      throw new Error('Invalid');
    }
    setState(state);
    setOperator(operator);
    console.log(state, operator);
    return true;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen flex items-center justify-center flex-col space-y-4">
        <h1 className="mb-20 card-title">Verificado estado e operadora</h1>
        {/* FIXME: ATENÇÃO, não é totalmente funcional, por conta que,verificamos apenas o DDD e a operadora, separados */}
        <h4 className="text-red-200 text-opacity-30">
          ATENÇÃO, não é totalmente funcional, por conta que, verificamos apenas
          o DDD e a operadora, separados
        </h4>
        <div className="flex">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Adicione o numero sem formatação
              </span>
            </div>
            <input
              type="tel"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
              value={number}
              onFocus={(event) => {
                event.target.select();
              }}
              placeholder="47912345678"
              maxLength={11}
              minLength={11}
              pattern="^[1-9]{2}9\d{8}$"
            />
            <div className="label">
              <span className="label-text-alt">Ex: 47912345678</span>
            </div>
          </label>
        </div>
        <button className="btn w-64 rounded-full">Verificar</button>
        {state ? (
          <div className="flex items-center justify-center flex-col pt-5">
            <h2 className="text-xl">Estado</h2>
            <p className="text-2xl text-green-400">{state}</p>
            <h2 className="text-xl">Operadora</h2>
            {operator.map((value) => (
              <p className="text-2xl text-green-400" key={uuidv4()}>
                {value}
              </p>
            ))}
            <p className="text-2xl text-green-400">{operator.length > 0}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
