import Link from 'next/link';

const ClientsPage = (): JSX.Element => {
  const clients = [
    { id: 'nol', name: 'Nolan' },
    { id: 'jer', name: 'Jeremy' },
    { id: 'em', name: 'Emily' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
