import { FiEdit, FiTrash } from "react-icons/fi";
const Table = ({ data }) => {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold my-4">Lista de Novos Registos</h1>
      <div class="flex flex-col ">
        <div class="-m-1.5 overflow-x-auto shadow-sm rounded-lg border">
          <div class="   min-w-full inline-block align-middle  ">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 bg dark:divide-gray-700">
                <thead className="bg-blue-100">
                  <tr >
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Género
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      DT Nasc
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Educação
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      NIF
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Morada
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Contato
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Termos
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Ação
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {data &&
                    data.map((item) => (
                      <tr key={item.id} className='hover:bg-gray-50'>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.id}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.name}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.gender}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {new Date(item.birthDate).toLocaleDateString()}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.education}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.nif}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.email}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.address}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {item.phone}
                        </td>
                        <td class="px-4 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                          {`${item.terms === 1 ? `Sim` : `Não`}`}
                        </td>
                        <td class="px-4  flex justify-between py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">
                        <FiEdit />
                        <FiTrash />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

