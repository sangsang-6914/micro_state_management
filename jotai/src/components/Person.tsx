import { useAtom } from 'jotai';
import { personAtom } from '../atoms/person';

function Person() {
  const [person] = useAtom(personAtom);
  return (
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
}

export default Person;
