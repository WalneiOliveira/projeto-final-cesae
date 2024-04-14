import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex shrink-0 justify-center items-center h-screen">
      <div className="bg-gray-50 ">
        <div class="min-w-80 md:min-w-96 py-8 px-6  border shadow-xl rounded-xl bg-white">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              Login
            </h1>
          </div>

          <div class="m-5">
            {/*<!-- Form -->*/}
            <form className="min-w-64 md:min-w-80 lg:min-w-96">
              <div class="grid gap-y-4">
                {/*<!--Form Group -->*/}
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">
                    E-mail
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                      aria-describedby="email-error"
                    />
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Por favor, inclua um endereço de email válido
                  </p>
                </div>
                {/*<!-- End Form Group -->*/}

                {/*<!-- Form Group -->*/}
                <div>
                  <div class="flex justify-between items-center">
                    <label
                      for="password"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Palavra-passe
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                      aria-describedby="password-error"
                    />
                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"></div>
                  </div>
                  <p
                    class="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    São necessários mais de 8 caracteres
                  </p>
                </div>
                {/*<!-- End Form Group -->*/}

                {/*<!-- Checkbox -->*/}
                <div class="flex items-center">
                  <div class="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ms-3">
                    <label for="remember-me" class="text-sm dark:text-white">
                      Manter a sessão iniciada
                    </label>
                  </div>
                </div>
                {/*<!-- End Checkbox -->*/}

                <Link
                  to="/"
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Entrar
                </Link>
                <Link
                  to="/"
                  class="text-right block text-xs  text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../examples/html/recover-account.html"
                >
                  Esqueceu-se da palavra-passe?
                </Link>
              </div>
            </form>
            {/*<!-- End Form -->*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
